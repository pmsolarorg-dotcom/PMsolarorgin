
create or replace view public.whatsapp_messages_clean as
select id, from_number, message_type, message_body, timestamp
from public.whatsapp_messages
order by timestamp desc;
