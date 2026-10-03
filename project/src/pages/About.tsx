import { cvData } from '@/data/cvData';
import { Mail, MapPin, Phone, Github, Linkedin, Briefcase, GraduationCap, Award, Code2, BookOpen, Heart } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center mx-auto mb-6">
            <span className="text-5xl font-bold text-black">A</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2">{cvData.name}</h1>
          <p className="text-lg sm:text-xl text-emerald-400 font-medium mb-3">{cvData.title}</p>
          <p className="text-zinc-500 max-w-2xl mx-auto">{cvData.tagline}</p>
        </div>

        {/* About Section */}
        <section className="mb-12">
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Professional Summary</h2>
            <div className="space-y-4">
              {cvData.about.split('\n\n').map((para, i) => (
                <p key={i} className="text-zinc-400 leading-relaxed">{para}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-5 flex items-center gap-3">
              <Mail className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <div className="min-w-0">
                <div className="text-xs text-zinc-500">Email</div>
                <div className="text-sm text-zinc-300 truncate">{cvData.email}</div>
              </div>
            </div>
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-5 flex items-center gap-3">
              <Phone className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <div className="min-w-0">
                <div className="text-xs text-zinc-500">Mobile</div>
                <div className="text-sm text-zinc-300 truncate">{cvData.phone}</div>
              </div>
            </div>
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-5 flex items-center gap-3">
              <MapPin className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <div className="min-w-0">
                <div className="text-xs text-zinc-500">Location</div>
                <div className="text-sm text-zinc-300 truncate">{cvData.location}</div>
              </div>
            </div>
            <div className="flex gap-2">
              <a href={cvData.social.github} target="_blank" rel="noopener noreferrer"
                className="flex-1 bg-zinc-900/50 border border-zinc-800 rounded-xl p-5 flex items-center justify-center hover:border-emerald-500/30 transition-all">
                <Github className="w-5 h-5 text-zinc-400" />
              </a>
              <a href={cvData.social.linkedin} target="_blank" rel="noopener noreferrer"
                className="flex-1 bg-zinc-900/50 border border-zinc-800 rounded-xl p-5 flex items-center justify-center hover:border-emerald-500/30 transition-all">
                <Linkedin className="w-5 h-5 text-zinc-400" />
              </a>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Code2 className="w-6 h-6 text-emerald-400" />
            <h2 className="text-2xl font-bold text-white">Core Skills</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cvData.skills.map((skill, i) => (
              <div key={i} className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-5">
                <h3 className="text-emerald-400 font-semibold text-sm mb-3">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span key={item} className="px-3 py-1 rounded-lg bg-zinc-800 text-zinc-300 text-xs">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="w-6 h-6 text-emerald-400" />
            <h2 className="text-2xl font-bold text-white">Professional Experience</h2>
          </div>
          <div className="space-y-6">
            {cvData.experience.map((exp, i) => (
              <div key={i} className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                  <h3 className="text-white font-semibold text-lg">{exp.role}</h3>
                  <span className="text-emerald-400 text-sm">{exp.duration}</span>
                </div>
                <p className="text-zinc-400 font-medium text-sm mb-3">{exp.organization}</p>
                <p className="text-zinc-500 text-sm leading-relaxed mb-4">{exp.description}</p>
                {exp.highlights && (
                  <ul className="space-y-2 mb-4">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-zinc-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {exp.projects && exp.projects.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-zinc-800">
                    <h4 className="text-emerald-400 font-semibold text-xs uppercase tracking-wide mb-3">Selected Analytics Projects</h4>
                    <div className="space-y-3">
                      {exp.projects.map((proj, k) => (
                        <div key={k} className="bg-zinc-800/50 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-1">
                            <h5 className="text-white font-medium text-sm">{proj.name}</h5>
                            <span className="text-xs text-zinc-500">{proj.tools}</span>
                          </div>
                          <p className="text-zinc-500 text-xs leading-relaxed">{proj.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Internships */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-6 h-6 text-emerald-400" />
            <h2 className="text-2xl font-bold text-white">Internships</h2>
          </div>
          <div className="space-y-4">
            {cvData.internships.map((intern, i) => (
              <div key={i} className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                  <h3 className="text-white font-semibold text-lg">{intern.role}</h3>
                  <span className="text-emerald-400 text-sm">{intern.duration}</span>
                </div>
                <p className="text-zinc-400 font-medium text-sm mb-2">{intern.organization}</p>
                <p className="text-zinc-500 text-sm leading-relaxed">{intern.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="w-6 h-6 text-emerald-400" />
            <h2 className="text-2xl font-bold text-white">Education</h2>
          </div>
          <div className="space-y-4">
            {cvData.education.map((edu, i) => (
              <div key={i} className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                  <h3 className="text-white font-semibold text-lg">{edu.degree}</h3>
                  <span className="text-emerald-400 text-sm">{edu.duration}</span>
                </div>
                <p className="text-zinc-400 font-medium text-sm mb-2">{edu.institution}</p>
                <p className="text-zinc-500 text-sm leading-relaxed">{edu.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-6 h-6 text-emerald-400" />
            <h2 className="text-2xl font-bold text-white">Certifications</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cvData.certifications.map((cert, i) => (
              <div key={i} className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-5 flex items-center gap-3">
                <Award className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span className="text-zinc-300 text-sm">{cert}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Interests */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Heart className="w-6 h-6 text-emerald-400" />
            <h2 className="text-2xl font-bold text-white">Interests</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {cvData.interests.map((interest, i) => (
              <span key={i} className="px-4 py-2 rounded-xl bg-zinc-900/50 border border-zinc-800 text-zinc-300 text-sm">
                {interest}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
