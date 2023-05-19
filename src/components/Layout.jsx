import Header from '@/components/molecules/Header'
import Footer from '@/components/molecules/Footer'

const Layout = ({ children }) => {
  return (
    <div className='bg-off-white'>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
