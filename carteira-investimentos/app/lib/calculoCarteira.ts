// app/lib/calculoCarteira.ts
export function calculoCarteira(ativos: { nome: string; quantidade: number; preco: number }[]) {
  return ativos.reduce((total, ativo) => total + ativo.quantidade * ativo.preco, 0);
}