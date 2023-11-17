import DashboardNavigation from "@/components/Dashboard/Navigation/DashboardNavigation";

export const metadata = {
  title: "Dashboard | FINDEB FZCO Admin Dashboard",
  description: "Generated by create next app",
};

export default function DashboardLayout({ children }) {
  return <DashboardNavigation>{children}</DashboardNavigation>;
}
