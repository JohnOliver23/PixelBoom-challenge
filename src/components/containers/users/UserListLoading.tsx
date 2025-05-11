"use client"
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function UserListLoading() {
  return (
    <div className="space-y-3">
      {[...Array(3)].map((_, i) => (
        <Card key={`user-skeleton-${i}`} className="border-border shadow-none">
          <CardContent className="p-4">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <Skeleton className="h-10 w-10 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[200px]" />
                  <div className="flex gap-4">
                    <Skeleton className="h-3 w-[120px]" />
                    <Skeleton className="h-3 w-[80px]" />
                    <Skeleton className="h-3 w-[100px]" />
                  </div>
                  
                </div>
              </div>
              <Skeleton className="h-6 w-16 rounded-full" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}