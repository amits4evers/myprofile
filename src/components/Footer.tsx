import { Link } from 'react-router-dom';
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: "https://github.com/", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:amit.dataanalyst@example.com", label: "Email" },
];

const footerNav = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/tutorials', label: 'Tutorials' },
  { path: '/projects', label: 'Projects' },
];

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-[#0a0a0a] mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center">
                <span className="text-black font-bold">A</span>
              </div>
              <span className="text-white font-bold">Amit's Data Blog</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed">
              A personal blog sharing data analysis tutorials, projects, and insights — from basics to advanced.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2">
              {footerNav.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-zinc-500 hover:text-emerald-400 transition-colors text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-zinc-800 hover:bg-emerald-500/20 flex items-center justify-center text-zinc-400 hover:text-emerald-400 transition-all"
                    aria-label={link.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-zinc-800/50 text-center">
          <p className="text-zinc-600 text-sm">
            © {new Date().getFullYear()} Amit's Data Blog. Built with passion for data.
          </p>
        </div>
      </div>
    </footer>
  );
}
