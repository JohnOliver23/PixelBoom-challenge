"use client"

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"

import { useUsers } from "@/hooks/useUsers"
import { UserFormValues, useUsersForm } from "@/hooks/useUsersForm"
import { GENDER_TRANSLATION, UserJson } from "@/utils/types"
import { formatUserJson } from "@/utils/formatters"
import { toast } from "sonner"

export function UserForm() {
  const {
    form,
    isOpen,
    isEdit,
    userId,
    onFormClose,
  } = useUsersForm()

  const { createUserMutation, updateUserMutation } = useUsers()

  const onSubmit = (data: UserFormValues) => {
    const formattedUser: UserJson = formatUserJson(data);
    if (userId) {
      updateUserMutation.mutate({ id: userId, data: formattedUser }, {
        onSuccess: () => {
          toast.success("Usuário atualizado com sucesso!") 
          onFormClose();
        },
        onError: (error) => {
          toast.error(`Erro ao atualizar: ${error.message}`)
        },
      });
    } else {
      createUserMutation.mutate(formattedUser as Omit<UserJson, "id">, {
        onSuccess: () => {
          toast.success("Usuário adicionado com sucesso!") 
          onFormClose();
        },
        onError: (error) => {
          toast.error(`Erro ao adicionar: ${error.message}`) 
        },
      });
    }
  }

  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && onFormClose()}>
      <SheetContent 
        side="right"
        className="p-10"
        style={{ width: "560px", maxWidth: "90vw" }}
      >
        <SheetHeader className="p-0">
          <SheetTitle>{isEdit ? "Editar Usuário" : "Adicionar Usuário"}</SheetTitle>
        </SheetHeader>
        <div className="overflow-y-auto max-h-[calc(100vh-120px)] pr-2">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 py-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome completo</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Digite o nome" 
                        {...field} 
                        value={field.value ?? ""} 
                        className="!bg-white"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>E-mail</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Digite o e-mail" 
                        {...field} 
                        value={field.value ?? ""} 
                        className="!bg-white"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Telefone</FormLabel>
                    <FormControl>
                      <Input 
                        {...field} 
                        value={field.value ?? ""} 
                        className="!bg-white"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="whatsapp"
                render={({ field }) => (
                  <FormItem className="flex items-center gap-2">
                    <FormControl>
                      <Checkbox 
                        checked={field.value ?? false} 
                        onCheckedChange={field.onChange} 
                      />
                    </FormControl>
                    <div className="space-y-1">
                      <FormLabel className="cursor-pointer">WhatsApp</FormLabel>
                     
                    </div>
                  </FormItem>
                )}
              />

              <div className="flex w-full gap-4">
                <FormField
                  control={form.control}
                  name="cpf"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>CPF</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Digite o CPF" 
                          {...field} 
                          value={field.value ?? ""} 
                          className="!bg-white"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="rg"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>RG</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Digite o RG" 
                          {...field} 
                          value={field.value ?? ""} 
                          className="!bg-white"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex w-full gap-4">
                <FormField
                  control={form.control}
                  name="gender"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Gênero</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value ?? ""}>
                        <FormControl>
                          <SelectTrigger className="!bg-white">
                            <SelectValue className="w-full" placeholder="Selecione o gênero" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="male">{GENDER_TRANSLATION["male"]}</SelectItem>
                          <SelectItem value="female">{GENDER_TRANSLATION["female"]}</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="birthDate"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Data de nascimento</FormLabel>
                      <FormControl>
                        <Input 
                          type="date" 
                          {...field} 
                          value={field.value ?? ""} 
                          className="!bg-white"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem className="rounded-[8px] flex bg-primary-foreground border border-border gap-2 p-4 items-center justify-between">
                    <div className="space-y-1">
                      <FormLabel>Status</FormLabel>
                      <p className="text-sm text-muted-foreground">
                        Define se o usuário estará ativo ao ser adicionado.
                      </p>
                    </div>
                    <div className="flex items-center justify-end gap-2">
                      <FormControl>
                        <Switch 
                          checked={field.value ?? false} 
                          onCheckedChange={field.onChange} 
                        />
                      </FormControl>
                      <span className="text-sm font-medium">
                        {field.value ? "Ativo" : "Inativo"}
                      </span>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="absolute bottom-0 right-0 w-full px-10 pb-6 bg-white">
                <div className="flex justify-end gap-4">
                  <SheetClose asChild>
                    <Button
                      className="rounded-[50px] !bg-white"
                      type="button"
                      variant="outline"
                    >
                      Cancelar
                    </Button>
                  </SheetClose>
                  <Button
                    className="rounded-[50px]"
                    type="submit"
                    disabled={createUserMutation.isPending || updateUserMutation.isPending}
                  >
                    {createUserMutation.isPending || updateUserMutation.isPending ? (
                      <span>Carregando...</span> 
                    ) : (
                      isEdit ? "Atualizar" : "Cadastrar"
                    )}
                  </Button>
                </div>
              </div>
            </form>
          </Form>
        </div>
      </SheetContent>
    </Sheet>
  )
}