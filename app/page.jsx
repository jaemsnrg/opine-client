'use client'
import localFont from 'next/font/local'
import '@/styles/globals.css'
import Layout from '@/components/Layout'
import Grid from '@/components/Grid'
import ProductTitle from '@/components/atoms/ProductTitle'
import ButtonLink from '@/components/atoms/ButtonLink'
import EmailForm from '@/components/molecules/EmailForm'
import LetterAnimator from '@/components/atoms/LetterAnimator'

const helvetica = localFont({
  src: [
    {
      path: '../public/fonts/helvetica-light.woff2',
      weight: '200',
    },
  ],
  variable: '--font-helvetica',
})

const helveticaBold = localFont({
  src: [
    {
      path: '../public/fonts/helvetica-bold.woff2',
      weight: '400',
    },
  ],
  variable: '--font-helvetica-bold',
})

export default function Index({ pageProps }) {
  return (
    <main className={`${helvetica.variable} ${helveticaBold.variable}`}>
      <Layout>
        <Grid hasMarginTop={false} shadingTop shadingBottom>
          <h1 className='flex flex-row items-center pt-20 md:pt-0 md:h-screen text-6xl t1 text-dark-blue z-10 mt-40 md:mt-0'>
            <div>
              <LetterAnimator textColor='text-dark-blue' initialDelay={0.1} text='Simple' />
              <LetterAnimator textColor='text-crimson' initialDelay={0.4} text='Functional' />
              <LetterAnimator textColor='text-dark-blue' initialDelay={0.7} text='Beautiful' />
            </div>
          </h1>
          <img
            className='relative md:top-[55%] md:translate-y-[-50%] col-start-1 col-span-6 md:col-start-2 md:col-span-5 z-0'
            alt='O1 table in full view'
            src='/img/splash.png'
          />
        </Grid>

        <Grid hasMarginTop={false} shadingBottom>
          <div className='relative z-10 col-start-0 col-span-6 md:col-start-1 md:col-span-5'>
            <div className='w-full flex flex-col md:flex-row items-center gap-12 my-32'>
              <img className='shadow-xl w-3/5 md:w-80 rounded-md' src='/img/focus.png' />
              <div className='w-full'>
                <h2 className='t3 flex items-start text-dark-blue'>Focussed</h2>
                <p className='b2'>
                  We offer a selective range of simple, functional furniture. Our focus on diligent design, care in
                  craftsmanship, and sustainable sourcing sets us apart.
                </p>
              </div>
            </div>
            <div className='w-full flex flex-col md:flex-row items-center gap-12 my-32'>
              <img className='shadow-xl w-3/5 md:w-80 rounded-md' src='/img/form.png' />
              <div className='w-full'>
                <h2 className='t3 flex items-start text-dark-blue'>Form follows Function</h2>
                <p className='b2'>
                  We offer a selective range of simple, functional furniture. Our focus on diligent design, care in
                  craftsmanship, and sustainable sourcing sets us apart.
                </p>
              </div>
            </div>
            <div className='w-full flex flex-col md:flex-row items-center gap-12 my-32'>
              <img className='shadow-xl w-3/5 md:w-80 rounded-md' src='/img/sustainable.png' />
              <div className='w-full'>
                <h2 className='t3 flex items-start text-dark-blue'>Sustainable</h2>
                <p className='b2'>
                  We offer a selective range of simple, functional furniture. Our focus on diligent design, care in
                  craftsmanship, and sustainable sourcing sets us apart.
                </p>
              </div>
            </div>
          </div>
        </Grid>
        <Grid background='bg-crimson' hasMarginTop={false}>
          <div className='flex items-center col-start-1 col-span-6 w-full flex flex-row justify-between mt-8'>
            <ProductTitle textColor='text-dark-blue' underlineColor='bg-off-white'>
              O1
            </ProductTitle>
            <ButtonLink href='/view' colors='bg-charcoal text-cream'>
              view
            </ButtonLink>
          </div>
          <div className='col-start-1 col-span-6 md:col-start-0 md:col-span-6 z-0'>
            <img className='mt-8 mb-40' alt='O1 table in full view' src='/img/splash.png' />
          </div>
        </Grid>
        <Grid>
          <div className='flex flex-col items-center justify-center col-start-0 col-span-6 md:col-start-2 md:col-span-4'>
            <h2 className='t3s  text-center text-dark-blue'>
              New items in our range are under development, leave your email and we'll keep you posted
            </h2>
            <div className='mt-12'>
              <EmailForm onSubmit={(userEmail) => console.log('userEmail', userEmail)} />
            </div>
          </div>
        </Grid>
      </Layout>
    </main>
  )
}
