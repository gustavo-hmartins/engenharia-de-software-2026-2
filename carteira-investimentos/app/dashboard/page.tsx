export default function DashboardHome() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <header>
        <p className="text-slate-400 mb-1">Olá, <span className="font-semibold text-white">Guilherme</span></p>
        <h1 className="text-3xl font-bold text-white">Aqui está o panorama completo do seu patrimônio consolidado hoje.</h1>
      </header>

      {/* Cards de Resumo */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
          <h3 className="text-sm font-medium text-slate-400 mb-2 uppercase tracking-wider">Patrimônio Total Consolidado</h3>
          <p className="text-4xl font-bold text-white">R$ 0,00</p>
          <p className="text-emerald-400 text-sm mt-2 font-medium">+ R$ 0,00 (0,0%) este mês</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-sm font-medium text-slate-400 mb-2 uppercase tracking-wider">Rentabilidade Carteira (YTD)</h3>
              <p className="text-4xl font-bold text-white">0,00% <span className="text-lg text-slate-500 font-normal">ao ano</span></p>
              <p className="text-slate-400 text-sm mt-2">0% do CDI <span className="text-slate-600 text-xs ml-1">(Benchmark)</span></p>
            </div>
            <div className="bg-slate-800 p-2 rounded flex flex-col items-center">
               <span className="text-xs text-slate-400">Ambiente Criptografado</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabela de Investimentos */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
        <div className="p-6 border-b border-slate-800">
          <h3 className="text-lg font-semibold text-white">Meus Investimentos</h3>
          <p className="text-sm text-slate-400">Principais posições ativas em custódia</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-950/50 text-slate-400 text-xs uppercase tracking-wider">
                <th className="p-4 font-medium">Ativo/Produto</th>
                <th className="p-4 font-medium">Instituição</th>
                <th className="p-4 font-medium">Saldo Atual</th>
                <th className="p-4 font-medium">Rentab. (12m)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-sm text-white">
              {/* Espaço reservado para as linhas de dados que virão do banco SQL */}
              <tr>
                <td className="p-6 text-center text-slate-500" colSpan={4}>Nenhum investimento cadastrado ainda.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}