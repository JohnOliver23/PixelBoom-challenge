"use client"

import UserIcon from "@/utils/icons/user.svg"
import FileIcon from "@/utils/icons/file.svg"
import SettingsIcon from "@/utils/icons/settings.svg"
import GraphicIcon from "@/utils/icons/graphic.svg"
import { ChevronDown, Headphones } from "lucide-react"


import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const items = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: GraphicIcon,
  },
  {
    title: "Usuários",
    href: null,
    icon: UserIcon,
    selected: true,
  },
  {
    title: "Documentos",
    href: "/documents",
    icon: FileIcon,
  },
]

const configItems = [
  {
    title: "Geral",
    href: "/settings",
    icon: SettingsIcon,
  },
]

export function AppSidebar() {
  return (
    <Sidebar className="bg-white text-black border-r border-border w-64 fixed top-0 left-0 h-screen flex flex-col justify-between z-50">
      <SidebarContent className="py-5 px-4 flex flex-col">
        <div className="flex flex-col gap-4 px-2">
          <div className="h-8 w-16 bg-black text-white rounded flex items-center justify-center text-xs font-semibold">
            Logo
          </div>

          <button className="flex items-center justify-between  gap-2 text-sm font-medium rounded-md px-2 py-1 w-full">
            <div className="flex gap-3 items-center">
              <div className="bg-muted w-4 h-6 rounded-md flex items-center justify-center text-xs font-semibold p-4">FA</div>
              Filial A
              </div>
            <ChevronDown className=" h-4 text-muted-foreground" />
          </button>
        </div>

        {/* Menu */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs  text-muted-foreground">
            Menu
          </SidebarGroupLabel>
          <SidebarGroupContent>
          <SidebarMenu>
            {items.map((item) => (
              <SidebarMenuItem key={item.title}>
                {item.selected ? (
                  <div className="px-4 py-2 rounded-[50px] flex items-center gap-3 text-sm font-medium bg-sidebar-primary text-sidebar-primary-foreground cursor-default">
                    <item.icon className="w-5 h-5" />
                    <span>{item.title}</span>
                  </div>
                ) : (
                  <SidebarMenuButton
                    asChild
                    className="group px-4 py-2 rounded-lg flex items-center gap-3 text-sm font-medium  hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors text-muted-foreground "
                  >
                    <div className="cursor-pointer">
                      <item.icon className="w-5 h-5" />
                      <span className="">{item.title}</span>

                    </div>
                  </SidebarMenuButton>
                )}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>

          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-xs text-muted-foreground ">
            Configurações
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {configItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className="group px-4 py-2 rounded-lg flex items-center gap-3 text-sm font-medium hover:bg-muted transition-colors text-muted-foreground"
                  >
                    <div className="cursor-pointer">
                      <item.icon className="w-4 h-4" />
                      <span>{item.title}</span>
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>


      <div className="p-4">
        <button className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium bg-background rounded-lg hover:bg-muted/80 transition-colors">
          <span>Precisa de ajuda?</span>
          <Headphones className="w-4 h-4" />
        </button>
      </div>
    </Sidebar>
  )
}
