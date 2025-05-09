import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const stats = [
  { label: "Usuários", value: 294 },
  { label: "Tempo de sessão", value: "31m 20s" },
  { label: "Ativos", value: 203 },
  { label: "Inativos", value: 127 },
];

export function StatisticsList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <Card className="bg-primary-foreground border-none shadow-none gap-0" key={stat.label}>
          <CardHeader>
            <CardTitle className="text-sm font-normal text-muted-foreground">{stat.label}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-semibold">{stat.value}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}