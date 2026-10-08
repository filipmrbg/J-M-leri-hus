/*
# Create private contact submissions table

1. New Tables
- `contact_submissions`
- `id` (uuid, primary key): Unique identifier for each form submission.
- `name` (text): Customer's name.
- `email` (text): Customer's email address.
- `phone` (text): Customer's phone number.
- `service` (text): Requested service, when provided.
- `message` (text): Customer's project description.
- `source` (text): Whether the submission came from the contact or quote form.
- `created_at` (timestamptz): Time when the submission was stored.
- `email_message_id` (text): Optional identifier returned by the email provider.

2. Modified Tables
- None.

3. Security
- Enable row level security on `contact_submissions`.
- Deny anonymous and authenticated browser access for SELECT, INSERT, UPDATE, and DELETE.
- The server-side contact function uses the service role to insert submissions after validation.

4. Important Notes
- Customer contact details are private and are not exposed through the browser data API.
- The table stores submissions independently from email delivery so submitted requests can be retained for later processing.
*/

CREATE TABLE IF NOT EXISTS public.contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  service text,
  message text NOT NULL,
  source text NOT NULL DEFAULT 'contact' CHECK (source IN ('contact', 'quote')),
  created_at timestamptz NOT NULL DEFAULT now(),
  email_message_id text
);

ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Deny public reads of contact submissions" ON public.contact_submissions;
CREATE POLICY "Deny public reads of contact submissions"
ON public.contact_submissions FOR SELECT
TO anon, authenticated
USING (false);

DROP POLICY IF EXISTS "Deny public inserts of contact submissions" ON public.contact_submissions;
CREATE POLICY "Deny public inserts of contact submissions"
ON public.contact_submissions FOR INSERT
TO anon, authenticated
WITH CHECK (false);

DROP POLICY IF EXISTS "Deny public updates of contact submissions" ON public.contact_submissions;
CREATE POLICY "Deny public updates of contact submissions"
ON public.contact_submissions FOR UPDATE
TO anon, authenticated
USING (false)
WITH CHECK (false);

DROP POLICY IF EXISTS "Deny public deletes of contact submissions" ON public.contact_submissions;
CREATE POLICY "Deny public deletes of contact submissions"
ON public.contact_submissions FOR DELETE
TO anon, authenticated
USING (false);

REVOKE ALL ON TABLE public.contact_submissions FROM anon, authenticated;
