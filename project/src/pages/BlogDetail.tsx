import { useState, useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '@/lib/supabase';
import { ArrowLeft, Calendar, Eye, Tag, MessageSquare, Send, User, Clock, AlertCircle } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string | null;
  content: string;
  author_name: string;
  tags: string[];
  cover_color: string;
  published: boolean;
  views: number;
  created_at: string;
  updated_at: string;
}

interface BlogComment {
  id: string;
  post_id: string;
  name: string;
  email: string;
  message: string;
  created_at: string;
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  });
}

function formatRelative(dateStr: string) {
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return 'Just now';
  if (mins < 60) return `${mins} minute${mins > 1 ? 's' : ''} ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days} day${days > 1 ? 's' : ''} ago`;
  return formatDate(dateStr);
}

export default function BlogDetail() {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [comments, setComments] = useState<BlogComment[]>([]);
  const [commentsLoading, setCommentsLoading] = useState(true);

  // Comment form
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [commentError, setCommentError] = useState<string | null>(null);
  const [commentSuccess, setCommentSuccess] = useState(false);

  const fetchPost = useCallback(async () => {
    if (!id) return;
    setLoading(true);
    const { data, error: err } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('id', id)
      .maybeSingle();
    if (err || !data) {
      setError('Blog post not found or unable to load.');
      setPost(null);
    } else {
      setPost(data);
      // Increment view count (fire and forget)
      supabase
        .from('blog_posts')
        .update({ views: (data.views || 0) + 1 })
        .eq('id', id)
        .then(() => {});
    }
    setLoading(false);
  }, [id]);

  const fetchComments = useCallback(async () => {
    if (!id) return;
    setCommentsLoading(true);
    const { data, error: err } = await supabase
      .from('blog_comments')
      .select('*')
      .eq('post_id', id)
      .order('created_at', { ascending: false });
    if (!err && data) {
      setComments(data);
    }
    setCommentsLoading(false);
  }, [id]);

  useEffect(() => {
    fetchPost();
    fetchComments();
  }, [fetchPost, fetchComments]);

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault();
    setCommentError(null);
    setCommentSuccess(false);

    if (!name.trim() || !email.trim() || !message.trim()) {
      setCommentError('Please fill in all fields.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setCommentError('Please enter a valid email address.');
      return;
    }

    setSubmitting(true);
    const { data, error: err } = await supabase
      .from('blog_comments')
      .insert({
        post_id: id,
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
      })
      .select('*')
      .single();

    if (err || !data) {
      setCommentError('Failed to post your comment. Please try again.');
    } else {
      setComments([data, ...comments]);
      setCommentSuccess(true);
      setName('');
      setEmail('');
      setMessage('');
    }
    setSubmitting(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-zinc-800 rounded w-3/4" />
            <div className="h-4 bg-zinc-800 rounded w-1/3" />
            <div className="h-4 bg-zinc-800 rounded w-full" />
            <div className="h-4 bg-zinc-800 rounded w-full" />
            <div className="h-4 bg-zinc-800 rounded w-2/3" />
          </div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] pt-24 px-4 flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="w-12 h-12 text-zinc-700 mx-auto mb-4" />
          <p className="text-zinc-400 text-xl mb-4">{error || 'Post not found.'}</p>
          <Link to="/blog" className="text-emerald-400 hover:text-emerald-300 font-medium">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Back link */}
        <Link to="/blog" className="inline-flex items-center gap-2 text-zinc-400 hover:text-emerald-400 transition-colors mb-8 text-sm">
          <ArrowLeft className="w-4 h-4" />
          All Posts
        </Link>

        {/* Article header */}
        <div className="mb-8 animate-fade-in-up">
          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag, i) => (
                <span key={i} className="flex items-center gap-1 text-xs px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-400">
                  <Tag className="w-3 h-3" />
                  {tag}
                </span>
              ))}
            </div>
          )}

          <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">{post.title}</h1>

          {post.excerpt && (
            <p className="text-lg text-zinc-400 leading-relaxed mb-4">{post.excerpt}</p>
          )}

          <div className="flex items-center gap-4 text-sm text-zinc-600 border-b border-zinc-800 pb-4">
            <span className="text-zinc-400 font-medium">{post.author_name}</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {formatDate(post.created_at)}
            </span>
            <span className="flex items-center gap-1.5">
              <Eye className="w-4 h-4" />
              {post.views} views
            </span>
          </div>
        </div>

        {/* Article content */}
        <article
          className="blog-article-content text-zinc-300 leading-relaxed mb-12"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Comments section */}
        <section className="border-t border-zinc-800 pt-8">
          <div className="flex items-center gap-3 mb-6">
            <MessageSquare className="w-5 h-5 text-emerald-400" />
            <h2 className="text-xl font-bold text-white">
              Comments {comments.length > 0 && `(${comments.length})`}
            </h2>
          </div>

          {/* Comment form */}
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-5 mb-6">
            <h3 className="text-sm font-semibold text-white mb-4">Leave a Comment</h3>

            {commentSuccess && (
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-3 mb-4 text-emerald-400 text-sm">
                Your comment has been posted successfully!
              </div>
            )}
            {commentError && (
              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-3 mb-4 text-red-400 text-sm">
                {commentError}
              </div>
            )}

            <form onSubmit={handleSubmitComment} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-zinc-500 font-medium mb-1.5 block">Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-2.5 text-sm text-zinc-300 placeholder:text-zinc-600 focus:border-emerald-500 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs text-zinc-500 font-medium mb-1.5 block">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@example.com"
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-2.5 text-sm text-zinc-300 placeholder:text-zinc-600 focus:border-emerald-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs text-zinc-500 font-medium mb-1.5 block">Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share your thoughts..."
                  rows={4}
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-2.5 text-sm text-zinc-300 placeholder:text-zinc-600 focus:border-emerald-500 focus:outline-none transition-colors resize-none"
                />
              </div>
              <div className="flex items-center justify-between">
                <p className="text-xs text-zinc-600">Your email is kept private and never displayed publicly.</p>
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex items-center gap-2 px-5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 disabled:cursor-not-allowed text-black font-medium text-sm transition-colors"
                >
                  {submitting ? 'Posting...' : (
                    <>
                      <Send className="w-4 h-4" />
                      Post Comment
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Comments list */}
          {commentsLoading ? (
            <div className="space-y-3">
              {[1, 2].map((i) => (
                <div key={i} className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4 animate-pulse">
                  <div className="h-4 bg-zinc-800 rounded w-1/4 mb-2" />
                  <div className="h-3 bg-zinc-800 rounded w-full mb-1" />
                  <div className="h-3 bg-zinc-800 rounded w-3/4" />
                </div>
              ))}
            </div>
          ) : comments.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-zinc-600 text-sm">No comments yet. Be the first to share your thoughts!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {comments.map((comment) => (
                <div key={comment.id} className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center flex-shrink-0">
                      <span className="text-black font-bold text-sm">
                        {comment.name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-white font-medium text-sm">{comment.name}</span>
                        <span className="flex items-center gap-1 text-xs text-zinc-600">
                          <Clock className="w-3 h-3" />
                          {formatRelative(comment.created_at)}
                        </span>
                      </div>
                      <p className="text-zinc-400 text-sm leading-relaxed whitespace-pre-wrap">{comment.message}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
