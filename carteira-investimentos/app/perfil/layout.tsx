import LayoutPrincipal from "@/components/LayoutPrincipal";

export default function PerfilLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LayoutPrincipal paginaAtiva="perfil">
      {children}
    </LayoutPrincipal>
  );
}