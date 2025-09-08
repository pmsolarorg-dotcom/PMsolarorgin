
-- whatsapp_messages table
create table if not exists public.whatsapp_messages (
  id uuid default gen_random_uuid() primary key,
  from_number text not null,
  message_type text,
  message_body text,
  timestamp timestamptz default now(),
  metadata jsonb
);
