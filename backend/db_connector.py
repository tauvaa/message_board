import os
import sys
import traceback

import psycopg2 as psy

from config import MESSAGE_CREDS


class Connector:
    def __init__(self, creds):
        self.creds = creds
        self.connection: psy.extensions.connection

    def __enter__(self):
        print("creating connection!")
        self.connection = psy.connect(**self.creds)
        return self

    def __exit__(self, exc_type, exc_value, exc_traceback):
        print("closing connection")

        self.connection.close()


class Querier(Connector):
    def __init__(self, creds):
        super().__init__(creds)

    def run_read_query(self, query, params=None):
        params = params or ()
        cur = self.connection.cursor()
        cur.execute(query, params)
        data = cur.fetchall()
        cols = [x.name for x in cur.description]
        for d in list(map(lambda x: dict(zip(cols, x)), data)):
            yield d

    def run_commit_query(self, query, params, run_multi=False):
        params = params or ()
        cur = self.connection.cursor()
        if not run_multi:
            cur.execute(query, params)
        else:
            cur.executemany(query, params)
        self.connection.commit()

    @staticmethod
    def get_query(directory, query):
        with open(
            os.path.join(os.path.dirname(__file__), "sql", directory, query)
        ) as f:
            query = f.read()
        return query

    def __enter__(self):
        super().__enter__()
        return self

    def __exit__(self, exc_type, exc_value, exc_traceback):
        super().__exit__(exc_type, exc_value, exc_traceback)


def insert_message(message, author):
    with Querier(MESSAGE_CREDS) as querier:
        query = querier.get_query("write", "messages.sql")
        querier.run_commit_query(query, (message, author))


def read_messages(num_messages):
    with Querier(MESSAGE_CREDS) as querier:
        query = querier.get_query("read", "limited_messages.sql")
        query = query.format(limit=num_messages)
        return list(querier.run_read_query(query))
    

if __name__ == "__main__":
    read_query = """select * from messages"""
    author = "Not tolo"
    message = "this is a test message"
    insert_message(message, author)
    print(read_messages(10))
