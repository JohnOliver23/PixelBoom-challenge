"use client"
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Tag, User } from "lucide-react";
import { getInitials } from "@/utils/formatters";
import { useUsers } from "@/hooks/useUsers";
import { UserListLoading } from "./UserListLoading";
import { GENDER_TRANSLATION } from "@/utils/types";

export function UserList() {
  const { listUsers } = useUsers();

  if (listUsers.isLoading) return <UserListLoading />;

  if (listUsers.error) {
    return (
      <div className="flex items-center justify-center p-8">
        <p className="text-destructive">Erro ao carregar usuários</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {listUsers.data?.map((user) => (
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
                        {user.age} anos, {GENDER_TRANSLATION[user.gender]}
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
                {!!user.status ? "Ativo" : "Inativo"}
              </Badge>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}