import { Link, useLocation } from 'react-router-dom';
import { Home, BookOpen, FolderGit2, User, Menu, X, PenSquare } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/about', label: 'About (CV)', icon: User },
  { path: '/projects', label: 'Projects', icon: FolderGit2 },
  { path: '/tutorials', label: 'Tutorials', icon: BookOpen },
  { path: '/blog', label: 'Blog', icon: PenSquare },
];

export default function Navbar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group" onClick={() => setMobileOpen(false)}>
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center">
              <span className="text-black font-bold text-lg">A</span>
            </div>
            <span className="text-white font-bold text-lg group-hover:text-emerald-400 transition-colors">
              Amit's Data Blog
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = location.pathname === item.path ||
                (item.path !== '/' && location.pathname.startsWith(item.path));
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    active
                      ? 'bg-emerald-500/10 text-emerald-400'
                      : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </Link>
              );
            })}
          </div>

          <button
            className="md:hidden text-zinc-400 hover:text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden pb-4 space-y-1 animate-fade-in">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = location.pathname === item.path ||
                (item.path !== '/' && location.pathname.startsWith(item.path));
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    active
                      ? 'bg-emerald-500/10 text-emerald-400'
                      : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {item.label}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
}
