"use client";

import { useState } from "react";
import {
  UserRound,
  Mail,
  Phone,
  CreditCard,
  ShieldCheck,
  LockKeyhole,
  X,
} from "lucide-react";

type ModalType = "email" | "telefone" | "senha" | null;

export default function ProfilePage() {
  const [modal, setModal] = useState<ModalType>(null);

  const [email, setEmail] = useState("Aviao@exemplo.com.br");
  const [telefone, setTelefone] = useState("(12) 34567-8910");

  const [novoEmail, setNovoEmail] = useState("");
  const [confirmarEmail, setConfirmarEmail] = useState("");
  const [novoTelefone, setNovoTelefone] = useState("");

  const [senhaAtual, setSenhaAtual] = useState("");
  const [novaSenha, setNovaSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const [mensagem, setMensagem] = useState("");

  const [ultimaAlteracaoSenha, setUltimaAlteracaoSenha] = useState(
    "Última alteração realizada há 4 meses."
  );

  function formatarTelefone(valor: string) {
    const numeros = valor.replace(/\D/g, "").slice(0, 11);

    if (numeros.length <= 2) {
      return numeros.length ? `(${numeros}` : "";
    }
    if (numeros.length <= 6) {
      return `(${numeros.slice(0, 2)}) ${numeros.slice(2)}`;
    }
    if (numeros.length <= 10) {
      return `(${numeros.slice(0, 2)}) ${numeros.slice(2, 6)}-${numeros.slice(6)}`;
    }
    return `(${numeros.slice(0, 2)}) ${numeros.slice(2, 7)}-${numeros.slice(7)}`;
  }

  function fecharModal() {
    setModal(null);
    setMensagem("");
    setNovoEmail("");
    setConfirmarEmail("");
    setNovoTelefone("");
    setSenhaAtual("");
    setNovaSenha("");
    setConfirmarSenha("");
  }

  function salvarEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (novoEmail !== confirmarEmail) {
      setMensagem("Os e-mails informados não coincidem.");
      return;
    }

    setEmail(novoEmail);
    fecharModal();
    alert("E-mail atualizado com sucesso!");
  }

  function salvarTelefone(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const quantidadeNumeros = novoTelefone.replace(/\D/g, "").length;

    if (quantidadeNumeros !== 10 && quantidadeNumeros !== 11) {
      setMensagem("Informe um telefone válido com DDD.");
      return;
    }

    setTelefone(novoTelefone);
    fecharModal();
    alert("Número de telefone atualizado com sucesso!");
  }

  function salvarSenha(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (novaSenha.length < 8) {
      setMensagem("A nova senha precisa ter pelo menos 8 caracteres.");
      return;
    }

    if (novaSenha !== confirmarSenha) {
      setMensagem("As senhas informadas não coincidem.");
      return;
    }

    setUltimaAlteracaoSenha("Senha alterada agora mesmo.");

    fecharModal();
    alert("Senha alterada com sucesso!");
  }

  return (
    <div className="-m-8 min-h-screen bg-slate-100 px-6 py-8 text-slate-900 md:px-10 md:py-10">
      <div className="mx-auto max-w-6xl space-y-8">

        <header>
          <h1 className="text-3xl font-bold">
            Configurações de Perfil
          </h1>
          <p className="mt-2 text-slate-500">
            Gerencie suas informações pessoais e configurações de segurança.
          </p>
        </header>

        <section className="grid grid-cols-1 gap-6 lg:grid-cols-2">

          {/* Informações pessoais */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-200">
                <UserRound size={32} className="text-slate-500" />
              </div>

              <div>
                <h2 className="text-xl font-bold">Celso Portioli</h2>
                <p className="text-sm text-slate-500">
                  Informações pessoais
                </p>
              </div>
            </div>

            <div className="space-y-5">

              {/* E-mail */}
              <div>
                <div className="mb-2 flex items-center gap-2 text-slate-500">
                  <Mail size={18} />
                  <span className="text-xs font-semibold uppercase tracking-wider">
                    E-mail
                  </span>
                </div>

                <p className="font-medium">{email}</p>

                <button
                  onClick={() => setModal("email")}
                  className="mt-1 text-sm font-medium text-red-500 hover:text-red-700"
                >
                  Alterar E-mail
                </button>
              </div>

              {/* Telefone */}
              <div>
                <div className="mb-2 flex items-center gap-2 text-slate-500">
                  <Phone size={18} />
                  <span className="text-xs font-semibold uppercase tracking-wider">
                    Número de telefone
                  </span>
                </div>

                <p className="font-medium">{telefone}</p>

                <button
                  onClick={() => setModal("telefone")}
                  className="mt-1 text-sm font-medium text-red-500 hover:text-red-700"
                >
                  Alterar Número de Telefone
                </button>
              </div>

              {/* CPF */}
              <div>
                <div className="mb-2 flex items-center gap-2 text-slate-500">
                  <CreditCard size={18} />
                  <span className="text-xs font-semibold uppercase tracking-wider">
                    CPF
                  </span>
                </div>

                <p className="font-medium tracking-wider">
                  ***.456.789-**
                </p>
              </div>

            </div>
          </div>

          {/* Segurança */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-lg bg-emerald-100 p-3">
                <ShieldCheck size={25} className="text-emerald-600" />
              </div>

              <h2 className="text-xl font-bold">Segurança</h2>
            </div>

            <div className="space-y-6">

              <div>
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="font-semibold">
                      Autenticação de 2 Fatores
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">
                      Maior segurança no login.
                    </p>
                  </div>

                  <div
                    role="img"
                    aria-label="Autenticação de dois fatores ativada"
                    className="flex h-7 w-12 items-center justify-end rounded-full bg-emerald-500 p-1"
                  >
                    <div className="h-5 w-5 rounded-full bg-white shadow-sm" />
                  </div>
                </div>

                <span className="mt-3 inline-block rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                  ATIVADA
                </span>
              </div>

              <div className="border-t border-slate-100" />

              <div>
                <div className="mb-2 flex items-center gap-2">
                  <LockKeyhole size={18} className="text-slate-500" />
                  <h3 className="font-semibold">Senha de Acesso</h3>
                </div>

                <p className="text-sm text-slate-500">
                  {ultimaAlteracaoSenha}
                </p>

                <button
                  onClick={() => setModal("senha")}
                  className="mt-2 text-sm font-medium text-red-500 hover:text-red-700"
                >
                  Alterar Senha
                </button>
              </div>

            </div>
          </div>

        </section>
      </div>

      {/* Janelas de alteração */}
      {modal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={fecharModal}
        >
          <div
            className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-bold">
                {modal === "email" && "Alterar E-mail"}
                {modal === "telefone" && "Alterar Telefone"}
                {modal === "senha" && "Alterar Senha"}
              </h2>

              <button
                onClick={fecharModal}
                className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
                aria-label="Fechar janela"
              >
                <X size={20} />
              </button>
            </div>

            {/* Formulário de e-mail */}
            {modal === "email" && (
              <form onSubmit={salvarEmail} className="space-y-4">
                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Novo e-mail
                  </label>
                  <input
                    type="email"
                    required
                    value={novoEmail}
                    onChange={(e) => setNovoEmail(e.target.value)}
                    placeholder="novo@email.com"
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Confirmar novo e-mail
                  </label>
                  <input
                    type="email"
                    required
                    value={confirmarEmail}
                    onChange={(e) => setConfirmarEmail(e.target.value)}
                    placeholder="Digite novamente o e-mail"
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-emerald-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-emerald-600 py-3 font-semibold text-white hover:bg-emerald-700"
                >
                  Salvar alterações
                </button>
              </form>
            )}

            {/* Formulário de telefone */}
            {modal === "telefone" && (
              <form onSubmit={salvarTelefone} className="space-y-4">
                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Novo número de telefone
                  </label>
                  <input
                    type="tel"
                    required
                    value={novoTelefone}
                    onChange={(e) => setNovoTelefone(formatarTelefone(e.target.value))}
                    placeholder="(00) 00000-0000"
                    maxLength={15}
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-emerald-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-emerald-600 py-3 font-semibold text-white hover:bg-emerald-700"
                >
                  Salvar alterações
                </button>
              </form>
            )}

            {/* Formulário de senha */}
            {modal === "senha" && (
              <form onSubmit={salvarSenha} className="space-y-4">
                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Senha atual
                  </label>
                  <input
                    type="password"
                    required
                    value={senhaAtual}
                    onChange={(e) => setSenhaAtual(e.target.value)}
                    placeholder="Digite sua senha atual"
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Nova senha
                  </label>
                  <input
                    type="password"
                    required
                    value={novaSenha}
                    onChange={(e) => setNovaSenha(e.target.value)}
                    placeholder="Mínimo de 8 caracteres"
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Confirmar nova senha
                  </label>
                  <input
                    type="password"
                    required
                    value={confirmarSenha}
                    onChange={(e) => setConfirmarSenha(e.target.value)}
                    placeholder="Digite novamente a nova senha"
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-emerald-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-emerald-600 py-3 font-semibold text-white hover:bg-emerald-700"
                >
                  Salvar nova senha
                </button>
              </form>
            )}

            {mensagem && (
              <p className="mt-4 text-sm font-medium text-red-500">
                {mensagem}
              </p>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
