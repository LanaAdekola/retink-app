import React from 'react'
import Header from './component/header/Header'
import Info from './component/info/Info'
import Video from './component/video/Video'
import Content from './component/content/Content'
import Details from './component/details/Details'
import Services from './component/services/Services'
import Newsletter from './component/newsletter/Newsletter'
import Contact from './component/contact/Contact'
import Footer from './component/footer/Footer'


const App = () => {
  return (
    <div>
      <Header />
      <Info />
      <Video />
      <Content />
      <Details />
      <Services/>
      <Newsletter />
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App