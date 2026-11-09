"use client";
import { useState, useEffect } from 'react';
import CardAtivo from '@/components/CardAtivo'; // O componente do layout que criamos antes

export default function PainelAtivos() {
  // Onde vamos guardar o JSON que vier da API (os famosos "dadosApi")
  const [dados, setDados] = useState<any>(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    async function buscarCotacoes() {
      try {
        // Faz a chamada para a SUA rota interna, pedindo dados de PETR4 e VALE3
        // (A sua rota /api/cotacao precisará repassar esses símbolos para a brapi)
        // Dentro do useEffect no PainelAtivos.tsx
        const resposta = await fetch('/api/cotacao?ticker=PETR4,VALE3,ITUB4,MGLU3');
        
        if (!resposta.ok) throw new Error("Falha ao buscar cotações");
        
        const json = await resposta.json();
        setDados(json); // Aqui nós guardamos o JSON no estado da aplicação
      } catch (erro) {
        console.error("Erro:", erro);
      } finally {
        setCarregando(false);
      }
    }

    buscarCotacoes();
  }, []);

  if (carregando) {
    return <div className="text-slate-400 animate-pulse">Carregando cotações ao vivo...</div>;
  }

  if (!dados || !dados.results) {
    return <div className="text-red-400">Não foi possível carregar os ativos.</div>;
  }

  return (
    <div className="flex gap-6 flex-wrap mt-6">
      {/* Aqui fazemos um loop nos "results" do JSON para criar um cartão para cada ativo */}
      {dados.results.map((item: any) => (
        <CardAtivo key={item.symbol} ativo={item} />
      ))}
    </div>
  );
}