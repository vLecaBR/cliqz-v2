import { motion } from 'motion/react';
import { Mail, MessageCircle, Linkedin, Copy, Check } from 'lucide-react';
import { useState, useCallback, memo } from 'react';

// Card de Email com lógica de cópia isolada
export const EmailCard = memo(function EmailCard() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = useCallback(() => {
    navigator.clipboard.writeText('contato@cliqz.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      whileHover={{ y: -10 }}
      className="p-8 bg-slate-900/30 border border-slate-800/50 rounded-2xl hover:border-indigo-500/50 transition-all cursor-pointer"
      onClick={handleCopyEmail}
    >
      <div className="w-14 h-14 mb-6 rounded-xl bg-linear-to-br from-indigo-600 to-violet-600 flex items-center justify-center">
        <Mail className="text-white" size={28} />
      </div>

      <h3 className="text-xl mb-3" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}>
        Email
      </h3>
      <p className="text-slate-400 mb-6 break-all">contato@cliqz.com</p>

      <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-slate-800/50 rounded-lg text-sm hover:bg-slate-800 transition-colors">
        {copied ? (
          <>
            <Check size={18} className="text-green-400" />
            <span className="text-green-400">Copiado!</span>
          </>
        ) : (
          <>
            <Copy size={18} />
            <span>Copiar Email</span>
          </>
        )}
      </button>
    </motion.div>
  );
});

// Card WhatsApp
export const WhatsAppCard = memo(function WhatsAppCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      whileHover={{ y: -10 }}
      className="p-8 bg-slate-900/30 border border-slate-800/50 rounded-2xl hover:border-indigo-500/50 transition-all cursor-pointer"
      onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
    >
      <div className="w-14 h-14 mb-6 rounded-xl bg-linear-to-br from-green-600 to-emerald-600 flex items-center justify-center">
        <MessageCircle className="text-white" size={28} />
      </div>

      <h3 className="text-xl mb-3" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}>
        WhatsApp
      </h3>
      <p className="text-slate-400 mb-6">+55 11 99999-9999</p>

      <button className="w-full px-4 py-3 bg-green-600/20 border border-green-500/30 rounded-lg text-green-400 text-sm hover:bg-green-600/30 transition-colors">
        Iniciar Conversa
      </button>
    </motion.div>
  );
});

// Card LinkedIn
export const LinkedInCard = memo(function LinkedInCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      whileHover={{ y: -10 }}
      className="p-8 bg-slate-900/30 border border-slate-800/50 rounded-2xl hover:border-indigo-500/50 transition-all cursor-pointer"
      onClick={() => window.open('https://linkedin.com/company/cliqz', '_blank')}
    >
      <div className="w-14 h-14 mb-6 rounded-xl bg-linear-to-br from-blue-600 to-cyan-600 flex items-center justify-center">
        <Linkedin className="text-white" size={28} />
      </div>

      <h3 className="text-xl mb-3" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}>
        LinkedIn
      </h3>
      <p className="text-slate-400 mb-6">@cliqzagencia</p>

      <button className="w-full px-4 py-3 bg-slate-800/50 rounded-lg text-sm hover:bg-slate-800 transition-colors">
        Conectar
      </button>
    </motion.div>
  );
});