import Link from 'next/link';
import { Mail, Key, EyeOff, ShieldCheck, User, FileText } from 'lucide-react';

export default function CadastroPage() {
  return (
    <div className="flex min-h-screen bg-slate-950 text-slate-200 font-sans">
      {/* Lado Esquerdo - Reutilizado do Login */}
      <div className="hidden lg:flex w-1/2 flex-col justify-center p-16 bg-slate-900 border-r border-slate-800">
        <h1 className="text-4xl font-bold tracking-tight mb-2 text-white">V VÉRTICE <span className="font-light">PATRIMÔNIO</span></h1>
        <h2 className="text-2xl font-semibold mb-4 text-emerald-400">REVOLUÇÃO FINTECH</h2>
        <p className="text-3xl font-medium mb-6 leading-tight text-white">
          Sua vida financeira, <br /> consolidada e sob controle.
        </p>
        <div className="flex items-center gap-2 text-emerald-500 bg-emerald-500/10 w-max px-4 py-2 rounded-full border border-emerald-500/20 mt-8">
          <ShieldCheck size={20} />
          <span className="text-sm font-medium">Criptografia 256-bit LGPD Compliant</span>
        </div>
      </div>

      {/* Lado Direito - Formulário de Cadastro */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8 lg:p-12 overflow-y-auto">
        <div className="w-full max-w-md">
          <h3 className="text-3xl font-semibold text-white mb-2">Crie sua conta</h3>
          <p className="text-slate-400 mb-8">Preencha seus dados para iniciar a consolidação do seu patrimônio.</p>

          <form className="space-y-4" action="/login">
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
              <input type="text" placeholder="Nome Completo" className="w-full bg-slate-900 border border-slate-700 rounded-lg py-3 pl-12 pr-4 text-white focus:border-emerald-500 outline-none" required />
            </div>

            <div className="relative">
              <FileText className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
              <input type="text" placeholder="CPF" className="w-full bg-slate-900 border border-slate-700 rounded-lg py-3 pl-12 pr-4 text-white focus:border-emerald-500 outline-none" required />
            </div>

            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
              <input type="email" placeholder="E-mail" className="w-full bg-slate-900 border border-slate-700 rounded-lg py-3 pl-12 pr-4 text-white focus:border-emerald-500 outline-none" required />
            </div>

            <div className="relative">
              <Key className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
              <input type="password" placeholder="Crie uma Senha" className="w-full bg-slate-900 border border-slate-700 rounded-lg py-3 pl-12 pr-12 text-white focus:border-emerald-500 outline-none" required />
              <EyeOff className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
            </div>

            <button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-lg py-4 rounded-lg flex items-center justify-center gap-2 mt-6">
              Cadastrar <span>→</span>
            </button>
          </form>

          <p className="text-center mt-6 text-slate-400">
            Já possui conta? <Link href="/login" className="text-emerald-400 hover:underline">Faça Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}