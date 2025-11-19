import { motion } from 'motion/react';
import { Linkedin, Instagram, Mail, ArrowUp } from 'lucide-react';
import type { Page } from '../App';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: 'Home', page: 'home' as Page },
    { label: 'Sobre', page: 'about' as Page },
    { label: 'Serviços', page: 'services' as Page },
    { label: 'Portfólio', page: 'portfolio' as Page },
    { label: 'Contato', page: 'contact' as Page },
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/company/cliqz', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com/cliqzagencia', label: 'Instagram' },
    { icon: Mail, href: 'mailto:contato@cliqz.com', label: 'Email' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-900/20 border-t border-slate-800/50 mt-32">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <button
              onClick={() => onNavigate('home')}
              className="text-4xl mb-6 tracking-tight"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800 }}
            >
              <span className="text-white">Cliq</span>
              <span className="text-indigo-500">Z</span>
            </button>
            <p className="text-slate-400 max-w-xs leading-relaxed">
              Transformando ideias em soluções digitais de alto impacto.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3
              className="text-lg mb-6"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}
            >
              Navegação
            </h3>
            <nav className="space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.page}
                  onClick={() => onNavigate(link.page)}
                  className="block text-slate-400 hover:text-white transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </motion.div>

          {/* Social & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3
              className="text-lg mb-6"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}
            >
              Conecte-se
            </h3>
            <div className="flex gap-4 mb-8">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-slate-800/50 hover:bg-indigo-600 flex items-center justify-center transition-colors"
                >
                  <social.icon className="text-white" size={18} />
                </a>
              ))}
            </div>

            <div className="space-y-2 text-sm text-slate-400">
              <p>contato@cliqz.com</p>
              <p>+55 11 99999-9999</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {currentYear} CliqZ. Todos os direitos reservados.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
          >
            <span className="text-sm">Voltar ao topo</span>
            <div className="w-8 h-8 rounded-lg bg-slate-800/50 hover:bg-slate-700 flex items-center justify-center transition-colors">
              <ArrowUp size={16} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
