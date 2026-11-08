import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const ticker = searchParams.get('ticker'); 

  if (!ticker) {
    return NextResponse.json({ erro: "Ticker não informado" }, { status: 400 });
  }

  
  const token = process.env.BRAPI_KEY; // Certifique-se de que a variável de ambiente está configurada corretamente

  if (!token) {
    return NextResponse.json({ erro: "Chave da API não configurada" }, { status: 500 });
  }

  // Usa a exata URL v2 que você validou com sucesso
  const res = await fetch(`https://brapi.dev/api/v2/stocks/quote?symbols=${ticker}`, {
    headers: {
      Authorization: `Bearer ${token}`
    },
    // Faz cache por 60 segundos para poupar o limite da sua conta
    next: { revalidate: 60 }
  });
  
  // Tratamento de limite de requisições exigido pela Brapi (HTTP 429)
  if (res.status === 429) {
    const retryAfter = res.headers.get('Retry-After') || '60';
    return NextResponse.json(
      { erro: "Limite atingido." }, 
      { status: 429, headers: { 'Retry-After': retryAfter } }
    );
  }

  const data = await res.json();
  
  // Verifica se a API retornou erro ou se a propriedade results não existe
  if (data.error || !data.results || data.results.length === 0) {
    return NextResponse.json({ erro: "Ativo não encontrado ou erro na API" }, { status: 404 });
  }

  // RETORNO CRÍTICO: Devolvemos a variável 'data' inteira
  // Assim, o frontend recebe o "results" completo para desenhar os cartões
  return NextResponse.json(data);
}