-- create database if not exists test;
create database message_board;
create user comp_user with password 'password';
\c message_board;
create table if not exists message_board.public.messages(
    message_id serial primary key,
    message text,
    author varchar(200),
    message_timestamp timestamp default now()
);

grant all on message_board.public.messages to comp_user;
grant usage on messages_message_id_seq to comp_user;
