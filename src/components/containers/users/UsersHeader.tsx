"use client"

import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export function UsersHeader() {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-semibold">Usuários</h1>
      <Button className="gap-2 rounded-[50px]" variant="default">
        <Plus className="w-4 h-4" />
        Adicionar
      </Button>
    </div>
  )
}
