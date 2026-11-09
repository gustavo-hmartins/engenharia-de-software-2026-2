'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import {
  ArrowDownLeft,
  ArrowUpRight,
  Search,
  Plus,
  Filter,
  CalendarDays,
  ArrowUpDown,
  Wallet,
  TrendingUp,
  TrendingDown,
  CircleDollarSign,
} from 'lucide-react';

type TipoTransacao = 'Compra' | 'Venda' | 'Dividendo';

interface Transacao {
  id: number;
  data: string;
  ativo: string;
  nome: string;
  tipo: TipoTransacao;
  quantidade: number;
  precoUnitario: number;
}

const transacoes: Transacao[] = [
  {
    id: 1,
    data: '2026-11-08',
    ativo: 'PETR4',
    nome: 'Petrobras PN',
    tipo: 'Compra',
    quantidade: 10,
    precoUnitario: 35.5,
  },
  {
    id: 2,
    data: '2026-11-07',
    ativo: 'VALE3',
    nome: 'Vale ON',
    tipo: 'Venda',
    quantidade: 5,
    precoUnitario: 62.3,
  },
  {
    id: 3,
    data: '2026-11-05',
    ativo: 'ITUB4',
    nome: 'Itaú Unibanco PN',
    tipo: 'Compra',
    quantidade: 20,
    precoUnitario: 31.2,
  },
  {
    id: 4,
    data: '2026-11-03',
    ativo: 'BBAS3',
    nome: 'Banco do Brasil ON',
    tipo: 'Dividendo',
    quantidade: 10,
    precoUnitario: 2.15,
  },
  {
    id: 5,
    data: '2026-11-01',
    ativo: 'WEGE3',
    nome: 'WEG ON',
    tipo: 'Compra',
    quantidade: 8,
    precoUnitario: 42.8,
  },
  {
    id: 6,
    data: '2026-10-28',
    ativo: 'BOVA11',
    nome: 'ETF Ibovespa',
    tipo: 'Venda',
    quantidade: 3,
    precoUnitario: 128.4,
  },
];

const formatarMoeda = (valor: number) =>
  valor.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

const formatarData = (data: string) =>
  new Date(`${data}T12:00:00`).toLocaleDateString('pt-BR');

export default function TransacoesPage() {
  const [busca, setBusca] = useState('');
  const [filtroTipo, setFiltroTipo] = useState('Todos');

  const transacoesFiltradas = useMemo(() => {
    return transacoes.filter((transacao) => {
      const correspondeBusca =
        transacao.ativo.toLowerCase().includes(busca.toLowerCase()) ||
        transacao.nome.toLowerCase().includes(busca.toLowerCase());

      const correspondeTipo =
        filtroTipo === 'Todos' || transacao.tipo === filtroTipo;

      return correspondeBusca && correspondeTipo;
    });
  }, [busca, filtroTipo]);

  const totalCompras = transacoes
    .filter((transacao) => transacao.tipo === 'Compra')
    .reduce(
      (total, transacao) =>
        total + transacao.quantidade * transacao.precoUnitario,
      0
    );

  const totalVendas = transacoes
    .filter((transacao) => transacao.tipo === 'Venda')
    .reduce(
      (total, transacao) =>
        total + transacao.quantidade * transacao.precoUnitario,
      0
    );

  const totalDividendos = transacoes
    .filter((transacao) => transacao.tipo === 'Dividendo')
    .reduce(
      (total, transacao) =>
        total + transacao.quantidade * transacao.precoUnitario,
      0
    );

  const totalMovimentado = totalCompras + totalVendas + totalDividendos;

  return (
    <main className="min-h-screen space-y-6 bg-slate-950 p-4 text-slate-200 md:p-6">
      {/* Cabeçalho */}
      <header className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold text-white">
            Transações
          </h1>

          <p className="mt-1 text-sm text-zinc-400">
            Histórico de movimentações e aportes da sua carteira.
          </p>
        </div>

        <Link
          href="/transacoes/nova"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
        >
          <Plus size={18} />
          Nova transação
        </Link>
      </header>

      {/* Cards de resumo */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-zinc-400">
              Total movimentado
            </p>

            <CircleDollarSign
              size={20}
              className="text-emerald-400"
            />
          </div>

          <h2 className="mt-3 text-2xl font-bold text-white">
            {formatarMoeda(totalMovimentado)}
          </h2>

          <p className="mt-2 text-xs text-zinc-500">
            Compras, vendas e dividendos
          </p>
        </div>

        <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-zinc-400">
              Total em compras
            </p>

            <ArrowDownLeft
              size={20}
              className="text-blue-400"
            />
          </div>

          <h2 className="mt-3 text-2xl font-bold text-white">
            {formatarMoeda(totalCompras)}
          </h2>

          <p className="mt-2 text-xs text-zinc-500">
            Aportes realizados
          </p>
        </div>

        <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-zinc-400">
              Total em vendas
            </p>

            <ArrowUpRight
              size={20}
              className="text-rose-400"
            />
          </div>

          <h2 className="mt-3 text-2xl font-bold text-white">
            {formatarMoeda(totalVendas)}
          </h2>

          <p className="mt-2 text-xs text-zinc-500">
            Valores recebidos por vendas
          </p>
        </div>

        <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-zinc-400">
              Dividendos recebidos
            </p>

            <Wallet
              size={20}
              className="text-amber-400"
            />
          </div>

          <h2 className="mt-3 text-2xl font-bold text-white">
            {formatarMoeda(totalDividendos)}
          </h2>

          <p className="mt-2 text-xs text-zinc-500">
            Proventos da carteira
          </p>
        </div>
      </section>

      {/* Histórico de transações */}
      <section className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/50">
        <div className="flex flex-col gap-4 border-b border-zinc-800 p-5 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-lg font-semibold text-white">
              Histórico de movimentações
            </h2>

            <p className="mt-1 text-sm text-zinc-400">
              Consulte e filtre as transações realizadas.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            {/* Pesquisa */}
            <div className="relative">
              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500"
              />

              <input
                type="text"
                placeholder="Buscar ativo..."
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                className="w-full rounded-lg border border-zinc-700 bg-slate-950 py-2.5 pl-10 pr-4 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-emerald-500 sm:w-56"
              />
            </div>

            {/* Filtro por tipo */}
            <div className="relative">
              <Filter
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500"
              />

              <select
                value={filtroTipo}
                onChange={(e) => setFiltroTipo(e.target.value)}
                className="w-full appearance-none rounded-lg border border-zinc-700 bg-slate-950 py-2.5 pl-9 pr-8 text-sm text-white outline-none transition focus:border-emerald-500 sm:w-40"
              >
                <option value="Todos">Todos os tipos</option>
                <option value="Compra">Compra</option>
                <option value="Venda">Venda</option>
                <option value="Dividendo">Dividendo</option>
              </select>
            </div>
          </div>
        </div>

        {/* Tabela */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[850px] text-left text-sm">
            <thead className="border-b border-zinc-800 bg-zinc-950/50 text-xs uppercase text-zinc-500">
              <tr>
                <th className="px-5 py-4">
                  <span className="inline-flex items-center gap-2">
                    <CalendarDays size={14} />
                    Data
                  </span>
                </th>

                <th className="px-5 py-4">Ativo</th>

                <th className="px-5 py-4">Tipo</th>

                <th className="px-5 py-4 text-right">
                  Quantidade
                </th>

                <th className="px-5 py-4 text-right">
                  Preço unitário
                </th>

                <th className="px-5 py-4 text-right">
                  Valor total
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-zinc-800/70">
              {transacoesFiltradas.map((transacao) => {
                const valorTotal =
                  transacao.quantidade * transacao.precoUnitario;

                return (
                  <tr
                    key={transacao.id}
                    className="transition hover:bg-zinc-800/30"
                  >
                    <td className="whitespace-nowrap px-5 py-4 text-zinc-400">
                      {formatarData(transacao.data)}
                    </td>

                    <td className="px-5 py-4">
                      <div className="font-semibold text-white">
                        {transacao.ativo}
                      </div>

                      <div className="mt-1 text-xs text-zinc-500">
                        {transacao.nome}
                      </div>
                    </td>

                    <td className="px-5 py-4">
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${
                          transacao.tipo === 'Compra'
                            ? 'bg-blue-500/10 text-blue-400'
                            : transacao.tipo === 'Venda'
                              ? 'bg-rose-500/10 text-rose-400'
                              : 'bg-amber-500/10 text-amber-400'
                        }`}
                      >
                        {transacao.tipo === 'Compra' ? (
                          <ArrowDownLeft size={14} />
                        ) : transacao.tipo === 'Venda' ? (
                          <ArrowUpRight size={14} />
                        ) : (
                          <TrendingUp size={14} />
                        )}

                        {transacao.tipo}
                      </span>
                    </td>

                    <td className="px-5 py-4 text-right text-zinc-300">
                      {transacao.quantidade}
                    </td>

                    <td className="px-5 py-4 text-right text-zinc-300">
                      {formatarMoeda(transacao.precoUnitario)}
                    </td>

                    <td
                      className={`whitespace-nowrap px-5 py-4 text-right font-semibold ${
                        transacao.tipo === 'Compra'
                          ? 'text-blue-400'
                          : transacao.tipo === 'Venda'
                            ? 'text-rose-400'
                            : 'text-amber-400'
                      }`}
                    >
                      {formatarMoeda(valorTotal)}
                    </td>
                  </tr>
                );
              })}

              {transacoesFiltradas.length === 0 && (
                <tr>
                  <td
                    colSpan={6}
                    className="px-5 py-12 text-center text-zinc-500"
                  >
                    Nenhuma transação encontrada.
                    <p className="mt-1 text-xs">
                      Tente alterar a pesquisa ou o filtro.
                    </p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Rodapé da tabela */}
        <div className="flex flex-col gap-2 border-t border-zinc-800 px-5 py-4 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            Exibindo {transacoesFiltradas.length} de {transacoes.length}{' '}
            transações
          </p>

          <p className="inline-flex items-center gap-1">
            <ArrowUpDown size={14} />
            Ordenado por data
          </p>
        </div>
      </section>
    </main>
  );
}