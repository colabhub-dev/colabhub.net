"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Github, Instagram, Moon, Send, Sun, Twitter } from "lucide-react"
import Link from "next/link"

function Footer() {
  const [isDarkMode, setIsDarkMode] = React.useState(true)
  const [isChatOpen, setIsChatOpen] = React.useState(false)

  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  return (
    <footer className="relative border-t bg-background text-foreground transition-colors duration-300 mt-10">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="flex flex-inline justify-between">
          <div className="relative w-1/4">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">Colab Hub</h2>
            <p className="mb-6 text-muted-foreground">
             Colab Hubは、開発者がプロジェクトを共有し、協力してコードを作成するためのプラットフォームです。
            </p>
            <form className="relative">
              <Input
                type="email"
                placeholder="emailを入力してください"
                className="pr-12 backdrop-blur-sm"
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-1 top-1 h-8 w-8 rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105"
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">登録</span>
              </Button>
            </form>
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
          </div>
          <div className="flex flex-inline justify-between gap-15">
            <div>
              <h3 className="mb-4 text-lg font-semibold">クイックリンク</h3>
              <nav className="space-y-2 text-sm">
                <Link href="/" className="block transition-colors hover:text-primary">
                  ホーム
                </Link>
                <Link href="/about-us" className="block transition-colors hover:text-primary">
                  私たちについて
                </Link>
                <Link href="/services" className="block transition-colors hover:text-primary">
                  サービス
                </Link>
                <Link href="/products" className="block transition-colors hover:text-primary">
                  製品
                </Link>
                <Link href="/contact" className="block transition-colors hover:text-primary">
                  お問い合わせ
                </Link>
              </nav>
            </div>
            <div className="relative">
              <h3 className="mb-4 text-lg font-semibold">ソーシャルメディア</h3>
              <div className="mb-6 flex space-x-4">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon" className="rounded-full">
                        <Twitter className="h-4 w-4" />
                        <span className="sr-only">X</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>X</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon" className="rounded-full">
                        <Instagram className="h-4 w-4" />
                        <span className="sr-only">Instagram</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Instagram</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon" className="rounded-full">
                        <Github className="h-4 w-4" />
                        <span className="sr-only">Github</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Github</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="flex items-center space-x-2">
                <Sun className="h-4 w-4" />
                <Switch
                  id="dark-mode"
                  checked={isDarkMode}
                  onCheckedChange={setIsDarkMode}
                />
                <Moon className="h-4 w-4" />
                <Label htmlFor="dark-mode" className="sr-only">
                  ダークモード
                </Label>
              </div>
            </div> 
          </div>

        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2025 Colab Hub. All rights reserved.
          </p>
          <nav className="flex gap-4 text-sm">
            <Link href="/privacy-policy" className="transition-colors hover:text-primary">
              プライバシーポリシー
            </Link>
            <Link href="/terms-of-service" className="transition-colors hover:text-primary">
              利用規約
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export { Footer
 }