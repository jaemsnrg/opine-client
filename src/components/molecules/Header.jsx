import TextLogo from '@/components/atoms/TextLogo'
import ButtonLink from '@/components/atoms/ButtonLink'

const Header = () => {
  // bg-[white] fixed z-30 top-8 left-0 right-0 z-50 bg-white bg-opacity-50 backdrop-filter backdrop-blur-md h-24 flex justify-between items-center md:mx-auto max-w-[65rem] rounded-lg drop-shadow-xl px-6 md:px-8
  return (
    <header className='bg-[white] fixed z-30 top-8 left-[-1rem] right-0 z-50 bg-white bg-opacity-50 backdrop-filter backdrop-blur-md h-24 flex justify-between items-center md:mx-auto max-w-[65rem] rounded-lg drop-shadow-xl px-6 md:px-8'>
      <TextLogo />
      <ButtonLink href='/view' colors='bg-charcoal text-cream'>
        view
      </ButtonLink>
    </header>
  )
}

export default Header
