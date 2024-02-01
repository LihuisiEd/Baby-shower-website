import Principal from "@/components/Principal";

export const metadata = {
  openGraph: {
    title: 'Baby Shower de Thomas',
    description: 'Invitacion a baby shower de Thomas',
    url: 'https://baby-shower-two.vercel.app',
    siteName: 'BabyShower',
    images: [
      {
        url: 'https://baby-shower-two.vercel.app/graficos/graph-tiny.png',
        width: 800,
        height: 600,
      },
      {
        url: 'https://baby-shower-two.vercel.app/graficos/graph.png',
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function Home() {
  return (
    <main className=" bg-amber-100 min-h-screen w-screen"
      style={{
        backgroundImage: "url('/Stars.png')",
        backgroundRepeat: 'repeat-x',
        backgroundPosition: 'left top',
      }}>
      <Principal />

    </main>
  );
}
