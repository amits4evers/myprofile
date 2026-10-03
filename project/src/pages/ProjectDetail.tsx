import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Clock, Target, Database, Settings, Code2, Play, TrendingUp, Lightbulb, FolderGit2 } from 'lucide-react';
import { projects } from '@/data/projects';
import { getIcon } from '@/components/IconHelper';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] pt-24 px-4 flex items-center justify-center">
        <div className="text-center">
          <p className="text-zinc-400 text-xl mb-4">Project not found.</p>
          <Link to="/projects" className="text-teal-400 hover:text-teal-300 font-medium">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const Icon = getIcon(project.icon);
  const currentIndex = projects.findIndex((p) => p.id === id);
  const prev = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const next = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back link */}
        <Link to="/projects" className="inline-flex items-center gap-2 text-zinc-400 hover:text-teal-400 transition-colors mb-8 text-sm">
          <ArrowLeft className="w-4 h-4" />
          All Projects
        </Link>

        {/* Header */}
        <div className="mb-10 animate-fade-in-up">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-teal-500/10 flex items-center justify-center flex-shrink-0">
              <Icon className="w-8 h-8 text-teal-400" />
            </div>
            <div>
              <span className="text-sm text-teal-400 font-medium">{project.category}</span>
              <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight">{project.title}</h1>
            </div>
          </div>
          <p className="text-zinc-400 text-lg leading-relaxed">{project.description}</p>
          <div className="flex flex-wrap items-center gap-3 mt-4">
            <span className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 text-sm">
              {project.difficulty}
            </span>
            <span className="flex items-center gap-2 text-zinc-500 text-sm">
              <Clock className="w-4 h-4" />
              {project.estimatedTime}
            </span>
            {project.technologies.map((tech) => (
              <span key={tech} className="text-xs px-2 py-1 rounded bg-teal-500/10 text-teal-400">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Objectives */}
        <section className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-6 sm:p-8 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <Target className="w-5 h-5 text-teal-400" />
            <h2 className="text-xl font-bold text-white">Project Objectives</h2>
          </div>
          <ul className="space-y-2">
            {project.objectives.map((obj, i) => (
              <li key={i} className="text-zinc-400 text-sm leading-relaxed flex items-start gap-2">
                <span className="text-teal-400 mt-1">•</span>
                {obj}
              </li>
            ))}
          </ul>
        </section>

        {/* Dataset */}
        <section className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-6 sm:p-8 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <Database className="w-5 h-5 text-teal-400" />
            <h2 className="text-xl font-bold text-white">Dataset</h2>
          </div>
          <p className="text-zinc-400 text-sm leading-relaxed">{project.dataset}</p>
        </section>

        {/* Setup */}
        <section className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-6 sm:p-8 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <Settings className="w-5 h-5 text-teal-400" />
            <h2 className="text-xl font-bold text-white">How to Set Up on Your Desktop</h2>
          </div>
          <ol className="space-y-3">
            {project.setupSteps.map((step, i) => (
              <li key={i} className="text-zinc-400 text-sm leading-relaxed flex items-start gap-3">
                <span className="text-teal-400 font-mono text-xs bg-teal-500/10 px-2 py-1 rounded flex-shrink-0">
                  {i + 1}
                </span>
                <span dangerouslySetInnerHTML={{ __html: step }} />
              </li>
            ))}
          </ol>
        </section>

        {/* Code */}
        <section className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-6 sm:p-8 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <Code2 className="w-5 h-5 text-teal-400" />
            <h2 className="text-xl font-bold text-white">Complete Code</h2>
          </div>
          <pre className="bg-[#18181b] border border-zinc-800 rounded-xl p-4 overflow-x-auto">
            <code className="text-sm text-zinc-300 leading-relaxed">{project.code}</code>
          </pre>
          <div className="mt-4 p-4 bg-teal-500/5 border border-teal-500/20 rounded-xl">
            <p className="text-zinc-400 text-sm leading-relaxed">
              <span className="text-teal-400 font-medium">Code Explanation: </span>
              {project.codeExplanation}
            </p>
          </div>
        </section>

        {/* Run */}
        <section className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-6 sm:p-8 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <Play className="w-5 h-5 text-teal-400" />
            <h2 className="text-xl font-bold text-white">How to Run</h2>
          </div>
          <ol className="space-y-3">
            {project.runSteps.map((step, i) => (
              <li key={i} className="text-zinc-400 text-sm leading-relaxed flex items-start gap-3">
                <span className="text-teal-400 font-mono text-xs bg-teal-500/10 px-2 py-1 rounded flex-shrink-0">
                  {i + 1}
                </span>
                <span dangerouslySetInnerHTML={{ __html: step }} />
              </li>
            ))}
          </ol>
        </section>

        {/* Expected Output */}
        <section className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-6 sm:p-8 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="w-5 h-5 text-teal-400" />
            <h2 className="text-xl font-bold text-white">Expected Output</h2>
          </div>
          <p className="text-zinc-400 text-sm leading-relaxed">{project.expectedOutput}</p>
        </section>

        {/* Enhancements */}
        <section className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-6 sm:p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Lightbulb className="w-5 h-5 text-teal-400" />
            <h2 className="text-xl font-bold text-white">Ideas to Enhance This Project</h2>
          </div>
          <ul className="space-y-2">
            {project.enhancements.map((enh, i) => (
              <li key={i} className="text-zinc-400 text-sm leading-relaxed flex items-start gap-2">
                <span className="text-teal-400 mt-1">•</span>
                {enh}
              </li>
            ))}
          </ul>
        </section>

        {/* Navigation */}
        <div className="grid grid-cols-2 gap-4">
          {prev ? (
            <Link
              to={`/projects/${prev.id}`}
              className="group bg-zinc-900/50 border border-zinc-800 rounded-xl p-5 hover:border-teal-500/30 transition-all"
            >
              <div className="flex items-center gap-2 text-zinc-500 text-xs mb-2">
                <ArrowLeft className="w-4 h-4" />
                Previous Project
              </div>
              <p className="text-white font-medium text-sm group-hover:text-teal-400 transition-colors">
                {prev.title}
              </p>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              to={`/projects/${next.id}`}
              className="group bg-zinc-900/50 border border-zinc-800 rounded-xl p-5 hover:border-teal-500/30 transition-all text-right"
            >
              <div className="flex items-center justify-end gap-2 text-zinc-500 text-xs mb-2">
                Next Project
                <ArrowRight className="w-4 h-4" />
              </div>
              <p className="text-white font-medium text-sm group-hover:text-teal-400 transition-colors">
                {next.title}
              </p>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
}
