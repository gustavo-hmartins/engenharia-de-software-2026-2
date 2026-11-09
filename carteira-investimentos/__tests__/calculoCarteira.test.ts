import { calculoCarteira } from '../app/lib/calculoCarteira';

describe('Testes da carteira de investimentos', () => {
  test('deve calcular o valor total dos investimentos', () => {
    const ativos = [
      { nome: 'PETR4', quantidade: 10, preco: 35 },
      { nome: 'VALE3', quantidade: 5, preco: 60 },
    ];

    expect(calculoCarteira(ativos)).toBe(650);
  });

  test('deve retornar zero para carteira vazia', () => {
    expect(calculoCarteira([])).toBe(0);
  });

  test('deve calcular um único ativo', () => {
    const ativos = [
      { nome: 'ITUB4', quantidade: 2, preco: 30 },
    ];

    expect(calculoCarteira(ativos)).toBe(60);
  });
});