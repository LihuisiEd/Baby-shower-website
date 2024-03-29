import { Caveat } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Navigation";
import AudioPlayer from "@/components/AudioPlayer";

const caveat = Caveat({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
})


export const metadata = {
  title: "Baby Shower",
  description: "Invitacion a baby shower de Thomas",
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
