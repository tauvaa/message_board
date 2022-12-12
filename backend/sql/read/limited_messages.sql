select message_id, message, author, message_timestamp
from messages
order by message_id desc
limit {limit}
