import React from 'react'
import Navbar from '../Navbar/Navbar'
import Main from '../Main/Main'
import Hero from '../Hero/Hero'
import Cards from '../Cards/Cards'
import Articles from '../Articles/Articles'
import Footer from '../Footer/Footer'

const Layout = () => {
  return (
    <>
    <Navbar />
    <Main>
      <Hero />
      <Cards />
      <Articles />
    </Main>
    <Footer />
    </>
  )
}

export default Layout