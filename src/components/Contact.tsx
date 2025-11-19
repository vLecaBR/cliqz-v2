import { motion } from 'motion/react';
import { Mail, MessageCircle, Linkedin, Copy, Check } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('contato@cliqz.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1
            className="text-5xl md:text-7xl lg:text-8xl mb-6"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800 }}
          >
            Vamos criar algo{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-violet-500">
              extraordinário
            </span>
          </h1>

          <p className="text-xl text-slate-400">
            Entre em contato e descubra como podemos impulsionar seu negócio
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {/* Email */}
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

            <h3
              className="text-xl mb-3"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}
            >
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

          {/* WhatsApp */}
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

            <h3
              className="text-xl mb-3"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}
            >
              WhatsApp
            </h3>
            <p className="text-slate-400 mb-6">+55 11 99999-9999</p>

            <button className="w-full px-4 py-3 bg-green-600/20 border border-green-500/30 rounded-lg text-green-400 text-sm hover:bg-green-600/30 transition-colors">
              Iniciar Conversa
            </button>
          </motion.div>

          {/* LinkedIn */}
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

            <h3
              className="text-xl mb-3"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700 }}
            >
              LinkedIn
            </h3>
            <p className="text-slate-400 mb-6">@cliqzagencia</p>

            <button className="w-full px-4 py-3 bg-slate-800/50 rounded-lg text-sm hover:bg-slate-800 transition-colors">
              Conectar
            </button>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}

          className="max-w-4xl mx-auto p-12 md:p-16 bg-linear-to-br from-indigo-600/10 to-violet-600/10 border border-indigo-500/20 rounded-3xl text-center"
        >
          <h2
            className="text-3xl md:text-4xl mb-6"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800 }}
          >
            Resposta em até 24 horas
          </h2>
          <p className="text-slate-400 text-lg mb-8">
            Nossa equipe está pronta para entender suas necessidades e propor soluções personalizadas.
          </p>

          <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full" />
              <span>Online agora</span>
            </div>
            <div>Segunda a Sexta: 9h - 18h</div>
            <div>Atendimento em PT e EN</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
