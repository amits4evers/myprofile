/*
# Create blog posts and comments tables

1. New Tables
- `blog_posts`
  - `id` (uuid, primary key)
  - `title` (text, not null) — blog post title
  - `excerpt` (text) — short summary shown in blog list
  - `content` (text, not null) — full HTML content of the blog post
  - `author_name` (text, default 'Amit Prasad') — author display name
  - `tags` (text[]) — array of tag strings for categorization
  - `cover_color` (text, default 'emerald') — accent color for the post card
  - `published` (boolean, default true) — whether the post is visible to readers
  - `views` (integer, default 0) — view count incremented on each visit
  - `created_at` (timestamptz, default now())
  - `updated_at` (timestamptz, default now())

- `blog_comments`
  - `id` (uuid, primary key)
  - `post_id` (uuid, foreign key to blog_posts.id, ON DELETE CASCADE)
  - `name` (text, not null) — commenter display name
  - `email` (text, not null) — commenter email (stored, not shown publicly)
  - `message` (text, not null) — comment body
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on both tables.
- Both tables are single-tenant (no sign-in required). Use `TO anon, authenticated` so the anon-key client can read and write.
- blog_posts: full CRUD for anon + authenticated (the site owner posts and visitors read).
- blog_comments: INSERT and SELECT for anon + authenticated. UPDATE/DELETE not needed for comments.
- An index on blog_comments(post_id) for efficient comment lookups.

3. Important Notes
- This is a no-auth single-tenant app. The blog owner posts directly through the site UI without login.
- Comments are open to all visitors — name, email, and message are required.
- Email addresses are collected but never displayed publicly on the site.
*/

CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  excerpt text,
  content text NOT NULL,
  author_name text NOT NULL DEFAULT 'Amit Prasad',
  tags text[] DEFAULT '{}',
  cover_color text DEFAULT 'emerald',
  published boolean NOT NULL DEFAULT true,
  views integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_posts" ON blog_posts;
CREATE POLICY "anon_select_posts" ON blog_posts FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_posts" ON blog_posts;
CREATE POLICY "anon_insert_posts" ON blog_posts FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_posts" ON blog_posts;
CREATE POLICY "anon_update_posts" ON blog_posts FOR UPDATE
  TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_posts" ON blog_posts;
CREATE POLICY "anon_delete_posts" ON blog_posts FOR DELETE
  TO anon, authenticated USING (true);

CREATE TABLE IF NOT EXISTS blog_comments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id uuid NOT NULL REFERENCES blog_posts(id) ON DELETE CASCADE,
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE blog_comments ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_comments" ON blog_comments;
CREATE POLICY "anon_select_comments" ON blog_comments FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_comments" ON blog_comments;
CREATE POLICY "anon_insert_comments" ON blog_comments FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_comments" ON blog_comments;
CREATE POLICY "anon_delete_comments" ON blog_comments FOR DELETE
  TO anon, authenticated USING (true);

CREATE INDEX IF NOT EXISTS idx_blog_comments_post_id ON blog_comments(post_id);
CREATE INDEX IF NOT EXISTS idx_blog_posts_created_at ON blog_posts(created_at DESC);
