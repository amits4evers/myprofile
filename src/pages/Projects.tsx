import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Clock, ArrowRight } from 'lucide-react';
import { projects } from '@/data/projects';
import { getIcon } from '@/components/IconHelper';

export default function Projects() {
  const [search, setSearch] = useState('');
  const [activeDifficulty, setActiveDifficulty] = useState('All');

  const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  const filtered = projects.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase());
    const matchesDifficulty = activeDifficulty === 'All' || p.difficulty === activeDifficulty;
    return matchesSearch && matchesDifficulty;
  });

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Data Analyst Projects</h1>
          <p className="text-zinc-500 max-w-2xl mx-auto">
            10 hands-on projects with detailed setup instructions, complete code, and step-by-step guides to run on your desktop.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
            <input
              type="text"
              placeholder="Search projects..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:border-teal-500/50 transition-colors"
            />
          </div>
        </div>

        {/* Difficulty filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {difficulties.map((d) => (
            <button
              key={d}
              onClick={() => setActiveDifficulty(d)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeDifficulty === d
                  ? 'bg-teal-500 text-black'
                  : 'bg-zinc-900 border border-zinc-800 text-zinc-400 hover:border-teal-500/30 hover:text-white'
              }`}
            >
              {d}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((project) => {
            const Icon = getIcon(project.icon);
            return (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className="group bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 hover:border-teal-500/30 hover:bg-zinc-900 transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-teal-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs text-teal-400 font-medium">{project.category}</span>
                      <span className="text-xs text-zinc-600">•</span>
                      <span className="text-xs text-zinc-500">{project.difficulty}</span>
                    </div>
                    <h3 className="text-white font-semibold text-lg group-hover:text-teal-400 transition-colors leading-tight">
                      {project.title}
                    </h3>
                  </div>
                </div>
                <p className="text-zinc-500 text-sm line-clamp-2 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="text-xs px-2 py-1 rounded bg-zinc-800 text-zinc-400">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1 text-zinc-600 text-xs">
                    <Clock className="w-3 h-3" />
                    {project.estimatedTime}
                  </span>
                  <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-teal-400 group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-zinc-500 text-lg">No projects found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}
