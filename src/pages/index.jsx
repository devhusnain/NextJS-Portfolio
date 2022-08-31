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
          content="I have the potential and energy to help an
          organization achieve its goals and to develop
          my skills. My hobbies are gaming and coding.
          I have more than 3 years of experience."
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
