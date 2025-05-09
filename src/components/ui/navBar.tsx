import { Bell, HelpCircle } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import UserImage from "@/utils/images/image.png"

export function Navbar() {
  return (
    <header className="h-14 border-b flex items-center justify-end px-4 gap-2 bg-background fixed top-0 left-64 right-0 z-40">
      <div className="flex items-center gap-3 rounded-full px-2 py-1">
        <Button
          variant="ghost"
          size="icon"
          className="border border-muted rounded-full w-10 h-10"
        >
          <HelpCircle className="h-5 w-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="border border-muted rounded-full w-10 h-10"
        >
          <Bell className="h-5 w-5" />
        </Button>
        <div className="border border-muted rounded-full w-10 h-10 overflow-hidden">
          <Avatar className="w-10 h-10">
            <AvatarImage src={UserImage.src} alt="User" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  )
}
