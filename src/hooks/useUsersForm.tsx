"use client"
import { createContext, useContext, useMemo, useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { emptyToNull } from "@/utils/formatters"

const userFormSchema = z.object({
  name: z.string({ required_error: "Campo obrigatório" }).min(3, 'Nome deve ter pelo menos 3 caracteres'),
  email: z.string().email('E-mail inválido').nullable().optional(),
  phone: z.string().min(11, 'Telefone inválido').nullable().optional(),
  whatsapp: z.boolean().nullable().optional(),
  cpf: z
  .string()
  .transform((val) => val?.replace(/\D/g, ''))
  .refine((val) => !val || val.length === 11, {
    message: 'CPF inválido',
  })
  .nullable()
  .optional(),
  rg: z.string().min(7, 'RG inválido').nullable().optional(),
  gender: z.enum(['male', 'female'], { required_error: "Campo obrigatório" }).nullable(),
  status: z.boolean().default(true).optional(),
  birthDate: z.string({ required_error: "Campo obrigatório" }).nullable()
})


export type UserFormValues = z.infer<typeof userFormSchema>

type UserFormContextType = {
  form: ReturnType<typeof useForm<UserFormValues>>
  resetForm: (defaultValues?: Partial<UserFormValues>) => void
  isOpen: boolean
  isEdit: boolean
  userId?: number
  onAddFormOpen: () => void
  onEditFormOpen: (id: number, values: Partial<UserFormValues>) => void
  onFormClose: () => void
}

const UserFormContext = createContext<UserFormContextType | null>(null)

export function UserFormProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const [userId, setUserId] = useState<number | undefined>(undefined)

  const form = useForm<UserFormValues>({
    resolver: zodResolver(userFormSchema),
    defaultValues: {
     status: true,
    }
  })

  const resetForm = (defaultValues?: Partial<UserFormValues>) => {
    form.reset({
     status: true,
      ...defaultValues
    })
  }

  const onAddFormOpen = () => {
    setUserId(undefined)
    resetForm()
    setIsEdit(false)
    setIsOpen(true)
  }

  const onEditFormOpen = (id: number, user: Partial<UserFormValues>) => {
    let birthDate = ''
    if (user.birthDate) {
        const [day, month, year] = user.birthDate.split('/')
        const dateStr = `${month}/${day}/${year}`
        const parsed = new Date(dateStr)
        if (!isNaN(parsed.getTime())) {
            const year = parsed.getFullYear()
            const month = String(parsed.getMonth() + 1).padStart(2, '0')
            const day = String(parsed.getDate()).padStart(2, '0')
            birthDate = `${year}-${month}-${day}`
        }
    }

    resetForm({
      name: user.name || '',
      email: emptyToNull(user.email),
      phone: emptyToNull(user.phone),
      whatsapp: user.whatsapp ?? undefined,
      cpf: user.cpf ?? undefined,
      rg: user.rg ?? undefined,
      gender: user.gender,
      status: user.status,
      birthDate,
    })
    setUserId(id)
    setIsEdit(true)
    setIsOpen(true)
  }
  
  
  

  const onFormClose = () => {
    setUserId(undefined)
    setIsOpen(false)
    resetForm()
  }

  const value = useMemo(() => ({
    form,
    resetForm,
    isOpen,
    isEdit,
    userId,
    onAddFormOpen,
    onEditFormOpen,
    onFormClose
  }), [form, isOpen, isEdit, userId])

  return (
    <UserFormContext.Provider value={value}>
      {children}
    </UserFormContext.Provider>
  )
}

export function useUsersForm() {
  const context = useContext(UserFormContext)
  if (!context) {
    throw new Error("useUsersForm must be used within a UserFormProvider")
  }
  return context
}
