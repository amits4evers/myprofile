import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, ArrowRight, BookOpen } from 'lucide-react';
import { tutorials } from '@/data/tutorials';
import { getIcon } from '@/components/IconHelper';

export default function TutorialDetail() {
  const { id } = useParams<{ id: string }>();
  const tutorial = tutorials.find((t) => t.id === id);

  if (!tutorial) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] pt-24 px-4 flex items-center justify-center">
        <div className="text-center">
          <p className="text-zinc-400 text-xl mb-4">Tutorial not found.</p>
          <Link to="/tutorials" className="text-emerald-400 hover:text-emerald-300 font-medium">
            Back to Tutorials
          </Link>
        </div>
      </div>
    );
  }

  const Icon = getIcon(tutorial.icon);
  const currentIndex = tutorials.findIndex((t) => t.id === id);
  const prev = currentIndex > 0 ? tutorials[currentIndex - 1] : null;
  const next = currentIndex < tutorials.length - 1 ? tutorials[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back link */}
        <Link to="/tutorials" className="inline-flex items-center gap-2 text-zinc-400 hover:text-emerald-400 transition-colors mb-8 text-sm">
          <ArrowLeft className="w-4 h-4" />
          All Tutorials
        </Link>

        {/* Header */}
        <div className="mb-10 animate-fade-in-up">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
              <Icon className="w-8 h-8 text-emerald-400" />
            </div>
            <div>
              <span className="text-sm text-emerald-400 font-medium">{tutorial.category}</span>
              <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight">{tutorial.title}</h1>
            </div>
          </div>
          <p className="text-zinc-400 text-lg leading-relaxed">{tutorial.description}</p>
          <div className="flex items-center gap-4 mt-4">
            <span className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 text-sm">
              {tutorial.level}
            </span>
            <span className="flex items-center gap-2 text-zinc-500 text-sm">
              <Clock className="w-4 h-4" />
              {tutorial.estimatedTime}
            </span>
            <span className="flex items-center gap-2 text-zinc-500 text-sm">
              <BookOpen className="w-4 h-4" />
              {tutorial.sections.length} sections
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-6 sm:p-10">
          <div className="prose-content">
            {tutorial.sections.map((section, idx) => (
              <div key={idx}>
                <h2>{section.heading}</h2>
                {section.content.map((para, i) => (
                  <p key={i} dangerouslySetInnerHTML={{ __html: para }} />
                ))}
                {section.list && (
                  <ul>
                    {section.list.map((item, i) => (
                      <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                    ))}
                  </ul>
                )}
                {section.code && (
                  <pre>
                    <code>{section.code}</code>
                  </pre>
                )}
                {section.table && (
                  <table>
                    <thead>
                      <tr>
                        {section.table.headers.map((h, i) => (
                          <th key={i}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.table.rows.map((row, i) => (
                        <tr key={i}>
                          {row.map((cell, j) => (
                            <td key={j} dangerouslySetInnerHTML={{ __html: cell }} />
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="grid grid-cols-2 gap-4 mt-8">
          {prev ? (
            <Link
              to={`/tutorials/${prev.id}`}
              className="group bg-zinc-900/50 border border-zinc-800 rounded-xl p-5 hover:border-emerald-500/30 transition-all"
            >
              <div className="flex items-center gap-2 text-zinc-500 text-xs mb-2">
                <ArrowLeft className="w-4 h-4" />
                Previous
              </div>
              <p className="text-white font-medium text-sm group-hover:text-emerald-400 transition-colors">
                {prev.title}
              </p>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              to={`/tutorials/${next.id}`}
              className="group bg-zinc-900/50 border border-zinc-800 rounded-xl p-5 hover:border-emerald-500/30 transition-all text-right"
            >
              <div className="flex items-center justify-end gap-2 text-zinc-500 text-xs mb-2">
                Next
                <ArrowRight className="w-4 h-4" />
              </div>
              <p className="text-white font-medium text-sm group-hover:text-emerald-400 transition-colors">
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
