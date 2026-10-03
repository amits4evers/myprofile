import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Clock, ArrowRight } from 'lucide-react';
import { tutorials } from '@/data/tutorials';
import { getIcon } from '@/components/IconHelper';

export default function Tutorials() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...Array.from(new Set(tutorials.map((t) => t.category)))];

  const filtered = tutorials.filter((t) => {
    const matchesSearch =
      t.title.toLowerCase().includes(search.toLowerCase()) ||
      t.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === 'All' || t.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Tutorials</h1>
          <p className="text-zinc-500 max-w-2xl mx-auto">
            Complete data analysis tutorials from basic to advanced — covering the entire Data Analyst Roadmap.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
            <input
              type="text"
              placeholder="Search tutorials..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500/50 transition-colors"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-emerald-500 text-black'
                  : 'bg-zinc-900 border border-zinc-800 text-zinc-400 hover:border-emerald-500/30 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tutorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((tutorial) => {
            const Icon = getIcon(tutorial.icon);
            return (
              <Link
                key={tutorial.id}
                to={`/tutorials/${tutorial.id}`}
                className="group bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 hover:border-emerald-500/30 hover:bg-zinc-900 transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-xs text-emerald-400 font-medium">{tutorial.category}</span>
                    <h3 className="text-white font-semibold text-lg group-hover:text-emerald-400 transition-colors leading-tight">
                      {tutorial.title}
                    </h3>
                  </div>
                </div>
                <p className="text-zinc-500 text-sm line-clamp-3 mb-4">{tutorial.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-xs">
                    <span className="px-2 py-1 rounded-md bg-zinc-800 text-zinc-400">{tutorial.level}</span>
                    <span className="flex items-center gap-1 text-zinc-600">
                      <Clock className="w-3 h-3" />
                      {tutorial.estimatedTime}
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-zinc-500 text-lg">No tutorials found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}
