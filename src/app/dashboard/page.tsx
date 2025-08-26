import { DashboardStats } from "@/components/dashboard/dashboard-stats";
import { RecentActivity } from "@/components/dashboard/recent-activity";
import { StockOverviewChart } from "@/components/dashboard/stock-overview-chart";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function DashboardPage() {
  return (
    <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
      <DashboardStats />
      <div className="grid gap-4 md:gap-8 lg:col-span-2">
        <StockOverviewChart />
        <RecentActivity />
      </div>
    </div>
  );
}
