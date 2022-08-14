import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { DiamondIcon } from '@/components/DiamondIcon'
import { Logo } from '@/components/Logo'

export function Header() {
  return (
    <header className="relative z-50 pb-11 lg:pt-11">
      <Container className="flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">
        <div className="mt-10 lg:mt-0 lg:grow lg:basis-0 flex items-center">
        <Logo className="h-20 sm:w-30 w-26 text-slate-900 inline" />
        <span className='font-display text-5xl font-bold tracking-tighter text-blue-600 -ml-56 '>Husnain</span>
        </div>
        <div className="order-first -mx-4 flex flex-auto basis-full overflow-x-auto whitespace-nowrap border-b border-blue-600/10 py-4 font-mono text-sm text-blue-600 sm:-mx-6 lg:order-none lg:mx-0 lg:basis-auto lg:border-0 lg:py-0">
          <div className="mx-auto flex items-center gap-10 px-4">

          <a className="css-hobwqm" href="/docs/getting-started.html">Docs</a>
          <a className="css-hobwqm" href="/tutorial/tutorial.html">Tutorial</a>
          <a className="css-hobwqm" href="/blog/">Blog</a>
          <a className="css-hobwqm" href="/community/support.html">Community</a>

          </div>
        </div>
        <div className="hidden sm:mt-10 sm:flex lg:mt-0 lg:grow lg:basis-0 lg:justify-end">
          <Button href="#">Hire me</Button>
        </div>
      </Container>
    </header>
  )
}
