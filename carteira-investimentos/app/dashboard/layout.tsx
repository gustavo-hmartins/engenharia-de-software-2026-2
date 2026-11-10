import LayoutPrincipal from "@/components/LayoutPrincipal";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LayoutPrincipal paginaAtiva="inicio">
      {children}
    </LayoutPrincipal>
  );
}