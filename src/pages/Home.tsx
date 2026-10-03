import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, FolderGit2, TrendingUp, Database, Code2, BarChart3, Sparkles } from 'lucide-react';
import { tutorials } from '@/data/tutorials';
import { projects } from '@/data/projects';
import { getIcon } from '@/components/IconHelper';

export default function Home() {
  const featuredTutorials = tutorials.slice(0, 6);
  const featuredProjects = projects.slice(0, 4);

  const stats = [
    { label: 'Tutorials', value: tutorials.length, icon: BookOpen },
    { label: 'Projects', value: projects.length, icon: FolderGit2 },
    { label: 'Topics Covered', value: '15+', icon: TrendingUp },
    { label: 'From Basic to Advanced', value: '100%', icon: Sparkles },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-transparent to-transparent" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6 animate-fade-in">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 text-sm font-medium">Data Analyst Roadmap — Complete Guide</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 animate-fade-in-up leading-tight">
            Learn Data Analysis
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              From Zero to Pro
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 animate-fade-in-up leading-relaxed">
            Complete tutorials covering Excel, SQL, Python, Pandas, NumPy, Power BI, Web Scraping, Data Visualization, and 10 hands-on projects — all following the Data Analyst Roadmap.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
            <Link
              to="/tutorials"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold rounded-xl transition-all hover:scale-105"
            >
              Start Learning
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-8 py-4 bg-zinc-800 hover:bg-zinc-700 text-white font-semibold rounded-xl transition-all border border-zinc-700"
            >
              View Projects
              <FolderGit2 className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 text-center hover:border-emerald-500/30 transition-all"
              >
                <Icon className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-zinc-500 mt-1">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Featured Tutorials */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Featured Tutorials</h2>
              <p className="text-zinc-500">Start with these essential topics</p>
            </div>
            <Link to="/tutorials" className="text-emerald-400 hover:text-emerald-300 text-sm font-medium flex items-center gap-1">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTutorials.map((tutorial) => {
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
                    <div className="min-w-0">
                      <span className="text-xs text-emerald-400 font-medium">{tutorial.category}</span>
                      <h3 className="text-white font-semibold text-lg group-hover:text-emerald-400 transition-colors leading-tight">
                        {tutorial.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-zinc-500 text-sm line-clamp-2 mb-4">{tutorial.description}</p>
                  <div className="flex items-center gap-3 text-xs">
                    <span className="px-2 py-1 rounded-md bg-zinc-800 text-zinc-400">{tutorial.level}</span>
                    <span className="text-zinc-600">{tutorial.estimatedTime}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Roadmap Banner */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-900 to-zinc-900/30 border border-zinc-800 p-8 sm:p-12">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
            <div className="relative">
              <h2 className="text-3xl font-bold text-white mb-4">The Data Analyst Roadmap</h2>
              <p className="text-zinc-400 max-w-2xl mb-6">
                Follow a structured path from beginner to advanced. Every tutorial on this blog is mapped to the official Data Analyst Roadmap.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                {['Excel', 'SQL', 'Python', 'Pandas', 'NumPy', 'Power BI', 'Web Scraping', 'Data Viz', 'Statistics'].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 rounded-lg bg-zinc-800 border border-zinc-700 text-zinc-300 text-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                to="/tutorials/data-analyst-roadmap"
                className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-medium"
              >
                View the Roadmap <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Hands-On Projects</h2>
              <p className="text-zinc-500">Apply what you learn with 10 real-world projects</p>
            </div>
            <Link to="/projects" className="text-emerald-400 hover:text-emerald-300 text-sm font-medium flex items-center gap-1">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((project) => {
              const Icon = getIcon(project.icon);
              return (
                <Link
                  key={project.id}
                  to={`/projects/${project.id}`}
                  className="group bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 hover:border-emerald-500/30 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-teal-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs text-teal-400 font-medium">{project.category}</span>
                        <span className="text-xs text-zinc-600">•</span>
                        <span className="text-xs text-zinc-500">{project.difficulty}</span>
                      </div>
                      <h3 className="text-white font-semibold text-lg group-hover:text-teal-400 transition-colors mb-2">
                        {project.title}
                      </h3>
                      <p className="text-zinc-500 text-sm line-clamp-2 mb-3">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span key={tech} className="text-xs px-2 py-1 rounded bg-zinc-800 text-zinc-400">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
