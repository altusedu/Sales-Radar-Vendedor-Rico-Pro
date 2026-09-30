import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import { RastreioRolagem } from '@/components/rastreio-rolagem'
import { RepasseAtribuicao } from '@/components/repasse-atribuicao'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Radar do Vendedor Rico PRO | Calculadora de Comissão e Metas',
  description:
    'O sistema definitivo de gestão para vendedores: calcule metas diárias, proteja sua comissão contra descontos e coloque previsibilidade financeira no seu bolso todo mês.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#121212',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} bg-background`}>
      <body className="antialiased font-sans">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
        {process.env.NODE_ENV === 'production' && (
          <>
            <Script id="meta-pixel" strategy="afterInteractive">
              {`
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq.disablePushState = true;
                // Sem eventos automáticos (SubscribedButtonClick/MicroData): cada clique já tem evento
                // próprio (FAQAberta, CliqueCheckout, Lead) e o automático duplicava a contagem.
                fbq('set', 'autoConfig', false, '1660381632085369');
                fbq('init', '1660381632085369');
                fbq('track', 'PageView');
              `}
            </Script>
            <noscript>
              <img
                height="1"
                width="1"
                style={{ display: 'none' }}
                src="https://www.facebook.com/tr?id=1660381632085369&ev=PageView&noscript=1"
                alt=""
              />
            </noscript>
            <RastreioRolagem />
            <RepasseAtribuicao />
            <Script id="ms-clarity" strategy="afterInteractive">
              {`
                (function(c,l,a,r,i,t,y){
                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "yqgztiduzp");
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  )
}
