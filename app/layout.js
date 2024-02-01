import { Caveat } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Navigation";
import AudioPlayer from "@/components/AudioPlayer";

const caveat = Caveat({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
})


export const metadata = {
  openGraph: {
    title: 'Baby Shower',
    description: 'Invitacion a baby shower de Thomas',
    url: 'https://baby-shower-two.vercel.app/',
    siteName: 'Baby Shower',
    images: [
      {
        url: 'https://github.com/LihuisiEd/Baby-shower-website/blob/main/public/graficos/baby-thomas.png', // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={caveat.className}>
        <main className="bg-white relative h-screen w-screen flex justify-center">

          <AudioPlayer src={'music/cancion.mp3'} />
          {children}
          <NavBar />
        </main>
      </body>
    </html>
  );
}
