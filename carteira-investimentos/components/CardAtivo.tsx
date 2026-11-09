import { TrendingDown, TrendingUp, Clock, BarChart2 } from "lucide-react";

export default function CardAtivo({ ativo }: { ativo: any }) {
  // 1. Garante que os dados sejam lidos quer venham dentro de "data" ou na raiz do objeto
  const info = ativo.data ? ativo.data : ativo;
  const symbol = ativo.symbol || info.symbol;

  // 2. Tenta usar o nome completo da empresa (longName). Se não existir, usa o curto.
  const nomeDaEmpresa = info.longName || info.shortName || symbol;

  const isPositivo = (info.regularMarketChange || 0) >= 0;
  const CorVariacao = isPositivo ? "text-emerald-500" : "text-red-500";
  const IconeVariacao = isPositivo ? TrendingUp : TrendingDown;

  const formatarMoeda = (valor: number) => {
    if (typeof valor !== 'number') return 'R$ 0,00';
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: info.currency || 'BRL' }).format(valor);
  };
  
  const formatarVolume = (valor: number) => {
    if (!valor) return '0';
    return new Intl.NumberFormat('pt-BR').format(valor);
  };
  
  const formatarData = (dataIso: string) => {
    if (!dataIso) return '--:--';
    return new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit'
    }).format(new Date(dataIso));
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 w-full max-w-sm hover:border-slate-700 transition-colors shadow-sm">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-xl font-bold text-white tracking-wide">{symbol}</h2>
          <p className="text-sm text-slate-400 truncate w-48" title={nomeDaEmpresa}>
            {nomeDaEmpresa}
          </p>
        </div>
        <div className="bg-slate-800 text-slate-300 text-xs px-2 py-1 rounded">
          {info.currency || 'BRL'}
        </div>
      </div>

      <div className="mb-6">
        <span className="text-3xl font-bold text-white">
          {formatarMoeda(info.regularMarketPrice)}
        </span>
        <div className={`flex items-center gap-1 mt-2 text-sm font-medium ${CorVariacao}`}>
          <IconeVariacao size={16} />
          <span>
            {isPositivo ? "+" : ""}
            {formatarMoeda(info.regularMarketChange)} 
            ({isPositivo ? "+" : ""}{(info.regularMarketChangePercent || 0).toFixed(2)}%)
          </span>
        </div>
      </div>

      <div className="flex justify-between items-center pt-4 border-t border-slate-800/60">
        <div className="flex items-center gap-1.5 text-slate-500 text-xs" title="Volume de negociações">
          <BarChart2 size={14} />
          <span>Vol: {formatarVolume(info.regularMarketVolume)}</span>
        </div>
        <div className="flex items-center gap-1.5 text-slate-500 text-xs" title="Última atualização">
          <Clock size={14} />
          <span>{formatarData(info.regularMarketTime)}</span>
        </div>
      </div>
    </div>
  );
}