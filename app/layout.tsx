import './globals.css'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs';

import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/providers/theme-providers';
import { ModalProvider } from '@/components/providers/modal-providers';
import { SocketProvider } from '@/components/providers/socket-providers';
import { QueryProvider } from '@/components/providers/query-providers';


const font = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Harmony | Chat with friends & share contents.',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={cn(font.className,
          "bg-white dark:bg-[#313338]"
        )}>
          <ThemeProvider
            attribute='class'
            defaultTheme='dark'
            enableSystem={false}
            storageKey='harmony-theme'
          >
            <SocketProvider>
              <ModalProvider />
                <QueryProvider>
                  {children}
                </QueryProvider>
            </SocketProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
