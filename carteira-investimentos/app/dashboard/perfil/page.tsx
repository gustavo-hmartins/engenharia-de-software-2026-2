
import {
  UserRound,
  Mail,
  Phone,
  CreditCard,
  ShieldCheck,
  LockKeyhole,
} from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="-m-8 min-h-screen bg-slate-100 px-6 py-8 text-slate-900 md:px-10 md:py-10">
      <div className="mx-auto max-w-6xl space-y-8">

        {/* Título da página */}
        <header>
          <h1 className="text-3xl font-bold text-slate-900">
            Configurações de Perfil
          </h1>

          <p className="mt-2 text-slate-500">
            Gerencie suas informações pessoais e configurações de segurança.
          </p>
        </header>

        {/* Cartões principais */}
        <section className="grid grid-cols-1 gap-6 lg:grid-cols-2">

          {/* Cartão de informações pessoais */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

            {/* Cabeçalho do cartão */}
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-200">
                <UserRound size={32} className="text-slate-500" />
              </div>

              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  Celso Portiolli
                </h2>

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

                <p className="font-medium text-slate-800">
                  Aviao@exemplo.com.br
                </p>

                <span className="mt-1 inline-block cursor-pointer text-sm font-medium text-red-500 hover:text-red-700">
                  Alterar E-mail
                </span>
              </div>

              {/* Telefone */}
              <div>
                <div className="mb-2 flex items-center gap-2 text-slate-500">
                  <Phone size={18} />
                  <span className="text-xs font-semibold uppercase tracking-wider">
                    Número de telefone
                  </span>
                </div>

                <p className="font-medium text-slate-800">
                  (11) 09876-5432
                </p>

                <span className="mt-1 inline-block cursor-pointer text-sm font-medium text-red-500 hover:text-red-700">
                  Alterar Número de Telefone
                </span>
              </div>

              {/* CPF */}
              <div>
                <div className="mb-2 flex items-center gap-2 text-slate-500">
                  <CreditCard size={18} />
                  <span className="text-xs font-semibold uppercase tracking-wider">
                    CPF
                  </span>
                </div>

                <p className="font-medium tracking-wider text-slate-800">
                  ***.200.199-**
                </p>
              </div>

            </div>
          </div>

          {/* Cartão de segurança */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

            {/* Cabeçalho */}
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-lg bg-emerald-100 p-3">
                <ShieldCheck size={25} className="text-emerald-600" />
              </div>

              <h2 className="text-xl font-bold text-slate-900">
                Segurança
              </h2>
            </div>

            <div className="space-y-6">

              {/* Autenticação de dois fatores */}
              <div>
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-slate-800">
                      Autenticação de 2 Fatores
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      Maior segurança no login.
                    </p>
                  </div>

                  {/* Interruptor visual, ainda sem funcionalidade */}
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

              {/* Senha */}
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <LockKeyhole size={18} className="text-slate-500" />

                  <h3 className="font-semibold text-slate-800">
                    Senha de Acesso
                  </h3>
                </div>

                <p className="text-sm text-slate-500">
                  Última alteração realizada há 4 meses.
                </p>

                <span className="mt-2 inline-block cursor-pointer text-sm font-medium text-red-500 hover:text-red-700">
                  Alterar Senha
                </span>
              </div>

            </div>
          </div>

        </section>
      </div>
    </div>
  );
}
