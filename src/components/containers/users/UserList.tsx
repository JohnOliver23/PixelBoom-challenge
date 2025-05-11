"use client"

import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Tag, User } from "lucide-react"
import { getInitials } from "@/utils/formatters"

const users = [
    {
      id: 1,
      name: "José Ricardo Gomes",
      age: 51,
      gender: "Homem",
      birthday: "27/03/2025 - 10:21am",
      time: "38m22s",
      typeUser: "Usuário padrão",
      status: "Ativo",
    },
    {
      id: 2,
      name: "Helena Soares",
      age: 46,
      gender: "Mulher",
      birthday: "22/03/2025 - 10:21am",
      time: "38m22s",
      typeUser: "Usuário padrão",
      status: "Inativo",
    },
    {
      id: 3,
      name: "Débora Santana",
      age: 24,
      gender: "Mulher",
      birthday: "22/03/2025 - 10:21am",
      time: "38m22s",
      typeUser: "Usuário padrão",
      status: "Inativo",
    },
    {
      id: 4,
      name: "Lucas Rocha Silveira",
      age: 31,
      gender: "Homem",
      birthday: "22/03/2025 - 10:21am",
      time: "38m22s",
      typeUser: "Usuário padrão",
      status: "Ativo",
    },
    {
      id: 5,
      name: "Sérgio Arantes",
      age: 24,
      gender: "Homem",
      birthday: "22/03/2025 - 10:21am",
      time: "38m22s",
      typeUser: "Usuário padrão",
      status: "Ativo",
    },
    {
      id: 6,
      name: "Adriano Costa",
      age: 24,
      gender: "Homem",
      birthday: "22/03/2025 - 10:21am",
      time: "38m22s",
      typeUser: "Usuário padrão",
      status: "Ativo",
    },
  ]

export function UserList() {
  return (
    <div className="space-y-3">
      {users.map((user) => (
        <Card key={user.id} className="border-border shadow-none">
          <CardContent className="p-4">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarFallback className="bg-gray-100 text-gray-800 font-medium">
                  {getInitials(user.name)}
                  </AvatarFallback>
                </Avatar>
                
                <div className="space-y-1">
                    <div className="flex items-center">
                        <CardTitle className="text-base font-medium">
                            {user.name}
                        </CardTitle>
                        <div className="flex gap-1 justify-center items-center ml-2">
                            <User size={14} className="text-muted-foreground" />
                            <p className="text-sm text-muted-foreground">
                                 {user.age} anos, {user.gender}
                            </p>
                        </div>
                  </div>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                    <div className="flex gap-1 justify-center items-center">
                        <Calendar size={14} />
                        <p>{user.birthday}</p>
                    </div>
                    <div className="flex gap-1 justify-center items-center">
                        <Clock size={14}/>
                        <p>{user.time}</p>
                    </div>
                    <div className="flex gap-1 justify-center items-center">
                        <Tag size={14}/>
                        <p>{user.typeUser}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <Badge 
                variant={user.status === "Ativo" ? "default" : "secondary"}
                className={`${
                  user.status === "Ativo" 
                    ? "bg-secondary text-secondary-foreground" 
                    : "bg-base-background text-muted-foreground border border-border "
                } px-[10px] py-[2px] rounded-full`}
              >
                {user.status}
              </Badge>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}