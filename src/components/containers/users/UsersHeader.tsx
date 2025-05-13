"use client"

import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { useUsersForm } from "@/hooks/useUsersForm"
import { UserForm } from "./UserForm"


export function UsersHeader() {
  const { onAddFormOpen } = useUsersForm()

  return (
    <>
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-semibold">Usuários</h1>
      <Button onClick={onAddFormOpen} className="gap-2 rounded-[50px]" variant="default">
        <Plus className="w-4 h-4" />
        Adicionar
      </Button>
    </div>
    <UserForm />
    </>
  )
}
