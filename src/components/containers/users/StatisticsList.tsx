"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useUsers } from "@/hooks/useUsers";
import { StatisticsCardsLoading } from "./StatisticsCardsLoading";

export function StatisticsList() {
  const { getStatistics } = useUsers();
  const { data: statistics, isLoading, error } = getStatistics;

  if (isLoading) return <StatisticsCardsLoading />;

  if (error) {
    return (
      <div className="flex items-center justify-center p-4">
        <p className="text-destructive">Erro ao carregar estatísticas</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {statistics?.map((stat) => (
        <Card key={stat.id} className="bg-primary-foreground border-none shadow-none gap-0">
          <CardHeader>
            <CardTitle className="text-sm font-normal text-muted-foreground">{stat.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-semibold">{stat.value}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}