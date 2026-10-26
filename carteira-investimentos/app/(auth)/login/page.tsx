import Link from 'next/link';
import { Mail, Key, EyeOff, ShieldCheck } from 'lucide-react';

export default function LoginPage() {
  return (
    <div className="flex min-h-screen bg-slate-950 text-slate-200 font-sans">
      {/* Lado Esquerdo - Banner */}
      <div className="hidden lg:flex w-1/2 flex-col justify-center p-16 bg-slate-900 border-r border-slate-800">
        <h1 className="text-4xl font-bold tracking-tight mb-2 text-white">V VÉRTICE <span className="font-light">PATRIMÔNIO</span></h1>
        <h2 className="text-2xl font-semibold mb-4 text-emerald-400">REVOLUÇÃO FINTECH</h2>
        <p className="text-3xl font-medium mb-6 leading-tight text-white">
          Sua vida financeira, <br /> consolidada e sob controle.
        </p>
        <p className="text-slate-400 mb-12 text-lg max-w-md">
          Acompanhe, analise e otimize todo o seu patrimônio com a precisão institucional que você merece.
        </p>
        <div className="flex items-center gap-2 text-emerald-500 bg-emerald-500/10 w-max px-4 py-2 rounded-full border border-emerald-500/20">
          <ShieldCheck size={20} />
          <span className="text-sm font-medium">Criptografia 256-bit LGPD Compliant</span>
        </div>
      </div>

      {/* Lado Direito - Formulário */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8 lg:p-24">
        <div className="w-full max-w-md">
          <h3 className="text-3xl font-semibold text-white mb-2">Acesse sua conta</h3>
          <p className="text-slate-400 mb-8">Insira suas credenciais para gerenciar seus investimentos.</p>

          <form className="space-y-4" action="/dashboard">
            {/* Campo E-mail */}
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
              <input 
                type="email" 
                placeholder="guilherme@exemplo.com.br" 
                className="w-full bg-slate-900 border border-slate-700 rounded-lg py-4 pl-12 pr-4 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                required
              />
            </div>

            {/* Campo Senha */}
            <div className="relative">
              <Key className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
              <input 
                type="password" 
                placeholder="••••••••••••" 
                className="w-full bg-slate-900 border border-slate-700 rounded-lg py-4 pl-12 pr-12 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                required
              />
              <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300">
                <EyeOff size={20} />
              </button>
            </div>

            <p className="text-xs text-center text-emerald-500 font-semibold mt-4 mb-2 tracking-widest">
              SIMULAR RESPOSTA DO SISTEMA:
            </p>

            <button 
              type="submit" 
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-lg py-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
            >
              Entrar <span>→</span>
            </button>
          </form>

          <p className="text-center mt-6 text-slate-400">
            Ainda não tem conta? <Link href="/cadastro" className="text-emerald-400 hover:underline">Cadastre-se</Link>
          </p>
        </div>
      </div>
    </div>
  );
}