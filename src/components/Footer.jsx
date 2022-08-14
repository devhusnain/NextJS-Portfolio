import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'

export function Footer() {
  return (
    <footer className="py-16">
      <Container className="flex flex-col items-center justify-between md:flex-row">
      <div className="mt-10 lg:mt-0 lg:grow lg:basis-0 flex items-center">
        <Logo className="h-20 sm:w-30 w-26 text-slate-900 inline" />
        <span className='font-display text-5xl font-bold tracking-tighter text-blue-600 -ml-56 '>Husnain</span>
        </div>
        <p className="mt-6 text-base text-slate-500 md:mt-0">
          Copyright &copy; {new Date().getFullYear()} Husnaindev, LLC. All
          rights reserved.
        </p>
      </Container>
    </footer>
  )
}
