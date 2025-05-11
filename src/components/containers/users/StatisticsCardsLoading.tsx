"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function StatisticsCardsLoading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {[...Array(4)].map((_, index) => (
        <Card key={`skeleton-${index}`} className="bg-primary-foreground border-none shadow-none gap-0">
          <CardHeader>
            <CardTitle>
              <Skeleton className="h-5 w-3/4" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Skeleton className="h-8 w-full mt-2" />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}