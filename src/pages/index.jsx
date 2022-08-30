import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Newsletter } from '@/components/Newsletter'
import { SkillsComponent} from '@/components/SkillsComponent'
import { Speakers } from '@/components/Speakers'
import { Sponsors } from '@/components/Sponsors'

export default function Home() {
  return (
    <>
      <Head>
        <title>Husnaindev - Software engineer from Pakistan</title>
        <meta
          name="description"
          content="My name is Husnain, and i am a Full Stack Developer with over 2 year of experience. We love to help my clients solve their problems, and We can go beyond building websites and help you identify how to solve your unique challenges,"
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <Speakers />
        <SkillsComponent />
        {/* <Sponsors /> */}
        {/* <Newsletter /> */}
      </main>
      <Footer />
    </>
  )
}
