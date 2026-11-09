export default function TransacoesPage() {
  return (
    <div className="p-6 space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-white">Transações</h1>
        <p className="text-zinc-400">Histórico de movimentações e aportes.</p>
      </header>

      {/* Tabela de Transações */}
      <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4">
        <table className="w-full text-left text-sm text-zinc-400">
          <thead className="border-b border-zinc-800 text-xs uppercase text-zinc-400">
            <tr>
              <th scope="col" className="px-4 py-3">Data</th>
              <th scope="col" className="px-4 py-3">Tipo</th>
              <th scope="col" className="px-4 py-3">Ativo</th>
              <th scope="col" className="px-4 py-3">Valor</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-zinc-800/50">
              <td className="px-4 py-3">--/--/----</td>
              <td className="px-4 py-3">Compra</td>
              <td className="px-4 py-3">--</td>
              <td className="px-4 py-3">R$ 0,00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}