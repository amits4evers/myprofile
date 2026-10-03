import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '@/lib/supabase';
import { Plus, Edit3, Trash2, Eye, Calendar, Tag, X, Save, FileText, Bold, Italic, Underline, List, ListOrdered, Quote, Heading2, Link2, Code } from 'lucide-react';

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

const colorMap: Record<string, { bg: string; text: string; border: string; gradient: string }> = {
  emerald: { bg: 'bg-emerald-500/10', text: 'text-emerald-400', border: 'border-emerald-500/30', gradient: 'from-emerald-500/20 to-teal-500/5' },
  blue: { bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/30', gradient: 'from-blue-500/20 to-cyan-500/5' },
  orange: { bg: 'bg-orange-500/10', text: 'text-orange-400', border: 'border-orange-500/30', gradient: 'from-orange-500/20 to-amber-500/5' },
  purple: { bg: 'bg-purple-500/10', text: 'text-purple-400', border: 'border-purple-500/30', gradient: 'from-purple-500/20 to-pink-500/5' },
  rose: { bg: 'bg-rose-500/10', text: 'text-rose-400', border: 'border-rose-500/30', gradient: 'from-rose-500/20 to-red-500/5' },
  teal: { bg: 'bg-teal-500/10', text: 'text-teal-400', border: 'border-teal-500/30', gradient: 'from-teal-500/20 to-emerald-500/5' },
};

function getColor(key: string) {
  return colorMap[key] || colorMap.emerald;
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric', month: 'short', day: 'numeric',
  });
}

function estimateReadTime(html: string) {
  const text = html.replace(/<[^>]*>/g, ' ');
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showEditor, setShowEditor] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);

  const fetchPosts = useCallback(async () => {
    setLoading(true);
    setError(null);
    const { data, error: err } = await supabase
      .from('blog_posts')
      .select('*')
      .order('created_at', { ascending: false });
    if (err) {
      setError('Unable to load blog posts. Please try again later.');
      setPosts([]);
    } else {
      setPosts(data || []);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this blog post? This cannot be undone.')) return;
    const { error: err } = await supabase.from('blog_posts').delete().eq('id', id);
    if (err) {
      alert('Failed to delete the post. Please try again.');
    } else {
      setPosts(posts.filter((p) => p.id !== id));
    }
  };

  const handleEdit = (post: BlogPost) => {
    setEditingPost(post);
    setShowEditor(true);
  };

  const handleNew = () => {
    setEditingPost(null);
    setShowEditor(true);
  };

  const handleSaved = () => {
    setShowEditor(false);
    setEditingPost(null);
    fetchPosts();
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-10 animate-fade-in-up">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Blog</h1>
            <p className="text-zinc-500">Daily posts on data analytics, projects, and insights</p>
          </div>
          <button
            onClick={handleNew}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-medium text-sm transition-colors"
          >
            <Plus className="w-4 h-4" />
            New Post
          </button>
        </div>

        {/* Error */}
        {error && (
          <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 text-center mb-8">
            <p className="text-red-400">{error}</p>
          </div>
        )}

        {/* Loading */}
        {loading && (
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 animate-pulse">
                <div className="h-6 bg-zinc-800 rounded w-3/4 mb-3" />
                <div className="h-4 bg-zinc-800 rounded w-1/2 mb-4" />
                <div className="h-4 bg-zinc-800 rounded w-full mb-2" />
                <div className="h-4 bg-zinc-800 rounded w-2/3" />
              </div>
            ))}
          </div>
        )}

        {/* Empty state */}
        {!loading && !error && posts.length === 0 && (
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-12 text-center">
            <FileText className="w-12 h-12 text-zinc-700 mx-auto mb-4" />
            <h3 className="text-white font-semibold text-lg mb-2">No blog posts yet</h3>
            <p className="text-zinc-500 text-sm mb-6">Start sharing your data analytics journey by creating your first post.</p>
            <button
              onClick={handleNew}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-medium text-sm transition-colors"
            >
              <Plus className="w-4 h-4" />
              Create First Post
            </button>
          </div>
        )}

        {/* Posts list */}
        {!loading && !error && posts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {posts.map((post) => {
              const color = getColor(post.cover_color);
              return (
                <div
                  key={post.id}
                  className={`group bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-700 transition-all`}
                >
                  {/* Color bar */}
                  <div className={`h-2 bg-gradient-to-r ${color.gradient}`} />

                  <div className="p-6">
                    {/* Tags */}
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.tags.slice(0, 3).map((tag, i) => (
                          <span key={i} className={`text-xs px-2 py-0.5 rounded ${color.bg} ${color.text}`}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Title */}
                    <Link to={`/blog/${post.id}`}>
                      <h2 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors leading-snug">
                        {post.title}
                      </h2>
                    </Link>

                    {/* Excerpt */}
                    <p className="text-zinc-500 text-sm leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt || post.content.replace(/<[^>]*>/g, '').slice(0, 150) + '...'}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center justify-between text-xs text-zinc-600">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {formatDate(post.created_at)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          {post.views} views
                        </span>
                      </div>
                      <span className="text-zinc-700">{estimateReadTime(post.content)} min read</span>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2 mt-4 pt-4 border-t border-zinc-800">
                      <Link
                        to={`/blog/${post.id}`}
                        className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-emerald-400 transition-colors"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        Read
                      </Link>
                      <button
                        onClick={() => handleEdit(post)}
                        className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-blue-400 transition-colors"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(post.id)}
                        className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-red-400 transition-colors ml-auto"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Editor Modal */}
      {showEditor && (
        <BlogEditor
          post={editingPost}
          onClose={() => { setShowEditor(false); setEditingPost(null); }}
          onSaved={handleSaved}
        />
      )}
    </div>
  );
}

/* ==================== Rich Text Editor ==================== */

interface BlogEditorProps {
  post: BlogPost | null;
  onClose: () => void;
  onSaved: () => void;
}

function BlogEditor({ post, onClose, onSaved }: BlogEditorProps) {
  const [title, setTitle] = useState(post?.title || '');
  const [excerpt, setExcerpt] = useState(post?.excerpt || '');
  const [tagsInput, setTagsInput] = useState(post?.tags?.join(', ') || '');
  const [coverColor, setCoverColor] = useState(post?.cover_color || 'emerald');
  const [published, setPublished] = useState(post?.published ?? true);
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);
  const editorRef = useState<HTMLDivElement | null>(null);
  const [, forceUpdate] = useState(0);

  useEffect(() => {
    if (editorRef[0]) {
      editorRef[0].innerHTML = post?.content || '';
    }
  }, [editorRef, post]);

  const exec = (command: string, value?: string) => {
    document.execCommand(command, false, value);
    forceUpdate((n) => n + 1);
  };

  const handleLink = () => {
    const url = prompt('Enter the URL:');
    if (url) exec('createLink', url);
  };

  const handleSave = async () => {
    if (!title.trim()) {
      setSaveError('Please enter a title.');
      return;
    }
    const content = editorRef[0]?.innerHTML || '';
    if (!content.replace(/<[^>]*>/g, '').trim()) {
      setSaveError('Please write some content.');
      return;
    }

    setSaving(true);
    setSaveError(null);

    const tags = tagsInput.split(',').map((t) => t.trim()).filter(Boolean);
    const autoExcerpt = excerpt.trim() || content.replace(/<[^>]*>/g, '').slice(0, 160) + '...';

    const payload = {
      title: title.trim(),
      excerpt: autoExcerpt,
      content,
      tags,
      cover_color: coverColor,
      published,
    };

    let result;
    if (post) {
      result = await supabase.from('blog_posts').update({ ...payload, updated_at: new Date().toISOString() }).eq('id', post.id);
    } else {
      result = await supabase.from('blog_posts').insert(payload);
    }

    if (result.error) {
      setSaveError('Failed to save the post. Please try again.');
      setSaving(false);
    } else {
      setSaving(false);
      onSaved();
    }
  };

  const toolbarButtons = [
    { icon: Bold, command: 'bold', label: 'Bold' },
    { icon: Italic, command: 'italic', label: 'Italic' },
    { icon: Underline, command: 'underline', label: 'Underline' },
    { icon: Heading2, command: 'formatBlock', value: '<h2>', label: 'Heading' },
    { icon: List, command: 'insertUnorderedList', label: 'Bullet List' },
    { icon: ListOrdered, command: 'insertOrderedList', label: 'Numbered List' },
    { icon: Quote, command: 'formatBlock', value: '<blockquote>', label: 'Quote' },
    { icon: Code, command: 'formatBlock', value: '<pre>', label: 'Code Block' },
  ];

  return (
    <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-start sm:items-center justify-center p-0 sm:p-4 overflow-y-auto">
      <div className="bg-zinc-900 border border-zinc-800 rounded-none sm:rounded-2xl w-full max-w-3xl my-0 sm:my-8">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-zinc-800 sticky top-0 bg-zinc-900 z-10 rounded-t-2xl">
          <h2 className="text-xl font-bold text-white">{post ? 'Edit Post' : 'New Blog Post'}</h2>
          <button onClick={onClose} className="text-zinc-400 hover:text-white p-1 rounded-lg hover:bg-zinc-800 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 space-y-5">
          {/* Title */}
          <div>
            <label className="text-xs text-zinc-500 font-medium mb-1.5 block">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter your blog post title..."
              className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white text-lg font-medium placeholder:text-zinc-600 focus:border-emerald-500 focus:outline-none transition-colors"
            />
          </div>

          {/* Excerpt */}
          <div>
            <label className="text-xs text-zinc-500 font-medium mb-1.5 block">Short Summary (optional — auto-generated if empty)</label>
            <input
              type="text"
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              placeholder="A brief summary shown in the blog list..."
              className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-2.5 text-sm text-zinc-300 placeholder:text-zinc-600 focus:border-emerald-500 focus:outline-none transition-colors"
            />
          </div>

          {/* Tags & Color */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-zinc-500 font-medium mb-1.5 block">Tags (comma-separated)</label>
              <input
                type="text"
                value={tagsInput}
                onChange={(e) => setTagsInput(e.target.value)}
                placeholder="Python, SQL, Power BI..."
                className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-2.5 text-sm text-zinc-300 placeholder:text-zinc-600 focus:border-emerald-500 focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="text-xs text-zinc-500 font-medium mb-1.5 block">Cover Color</label>
              <div className="flex gap-2">
                {Object.keys(colorMap).map((c) => (
                  <button
                    key={c}
                    onClick={() => setCoverColor(c)}
                    className={`w-8 h-8 rounded-lg ${colorMap[c].bg} border-2 transition-all ${coverColor === c ? colorMap[c].border : 'border-transparent'}`}
                    title={c}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Rich Text Editor */}
          <div>
            <label className="text-xs text-zinc-500 font-medium mb-1.5 block">Content</label>

            {/* Toolbar */}
            <div className="flex flex-wrap items-center gap-1 bg-zinc-800 border border-zinc-700 border-b-0 rounded-t-xl p-2">
              {toolbarButtons.map((btn) => {
                const Icon = btn.icon;
                return (
                  <button
                    key={btn.command + (btn.value || '')}
                    onClick={() => exec(btn.command, btn.value)}
                    title={btn.label}
                    className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </button>
                );
              })}
              <button
                onClick={handleLink}
                title="Insert Link"
                className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors"
              >
                <Link2 className="w-4 h-4" />
              </button>
              <div className="w-px h-6 bg-zinc-700 mx-1" />
              <button
                onClick={() => exec('formatBlock', '<p>')}
                title="Normal Text"
                className="px-3 py-1.5 rounded-lg text-xs text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors font-medium"
              >
                Normal
              </button>
            </div>

            {/* Editable area */}
            <div
              ref={(el) => { if (editorRef[0] !== el) editorRef[0] = el; }}
              contentEditable
              suppressContentEditableWarning
              data-placeholder="Start writing your blog post here... Use the toolbar above to format text, add headings, lists, quotes, and code blocks."
              className="blog-editor-content bg-zinc-800/50 border border-zinc-700 rounded-b-xl p-4 min-h-[300px] max-h-[500px] overflow-y-auto text-sm text-zinc-300 leading-relaxed focus:outline-none focus:border-emerald-500/50 transition-colors"
            />
          </div>

          {/* Published toggle */}
          <label className="flex items-center gap-3 cursor-pointer">
            <button
              type="button"
              onClick={() => setPublished(!published)}
              className={`relative w-11 h-6 rounded-full transition-colors ${published ? 'bg-emerald-500' : 'bg-zinc-700'}`}
            >
              <span className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition-transform ${published ? 'translate-x-5' : ''}`} />
            </button>
            <span className="text-sm text-zinc-400">{published ? 'Published — visible to readers' : 'Draft — hidden from readers'}</span>
          </label>

          {/* Error */}
          {saveError && (
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-3">
              <p className="text-red-400 text-sm">{saveError}</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 p-5 border-t border-zinc-800 sticky bottom-0 bg-zinc-900 rounded-b-2xl">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-zinc-400 hover:text-white text-sm font-medium transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={saving}
            className="flex items-center gap-2 px-5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 disabled:cursor-not-allowed text-black font-medium text-sm transition-colors"
          >
            {saving ? (
              <>Saving...</>
            ) : (
              <>
                <Save className="w-4 h-4" />
                {post ? 'Update Post' : 'Publish Post'}
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
