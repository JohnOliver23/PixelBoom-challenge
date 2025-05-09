"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ListFilter, Search } from "lucide-react"

export function UserSearch() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-6">
      <div className="relative w-full">
      <Search className="absolute left-3 top-4.5 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input 
        placeholder="Buscar..."
        className="pl-9 !bg-primary-foreground"
      />
    </div>
        <Button variant="outline" className="gap-2 rounded-full p-5 mt-[-3px]">
          <ListFilter className="w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}