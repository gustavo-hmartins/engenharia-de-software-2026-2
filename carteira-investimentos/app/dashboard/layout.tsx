import Link from 'next/link';
import { Home, PieChart, ArrowLeftRight, User, LogOut } from 'lucide-react';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-slate-950 text-slate-200">
      {/* Sidebar Lateral */}
      <aside className="w-64 bg-slate-900 border-r border-slate-800 flex flex-col justify-between p-6 hidden md:flex">
        <div>
          <h2 className="text-2xl font-bold text-white mb-10 tracking-widest">V VÉRTICE</h2>
          <nav className="space-y-4">
            <Link href="/dashboard" className="flex items-center gap-3 text-emerald-400 font-medium">
              <Home size={20} /> Página Inicial
            </Link>
            <Link href="/dashboard/carteira" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors">
              <PieChart size={20} /> Minha Carteira
            </Link>
            <Link href="/dashboard/transacoes" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors">
              <ArrowLeftRight size={20} /> Transações
            </Link>
            <Link href="/dashboard/perfil" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors">
              <User size={20} /> Meu Perfil
            </Link>
          </nav>
        </div>
        
        <Link href="/login" className="flex items-center gap-3 text-slate-500 hover:text-red-400 transition-colors mt-auto pt-8 border-t border-slate-800">
          <LogOut size={20} /> Sair da conta
        </Link>
      </aside>

      {/* Conteúdo Dinâmico */}
      <main className="flex-1 overflow-y-auto p-8">
        {children}
      </main>
    </div>
  );
}