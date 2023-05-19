import React from 'react'
import Header from './component/header/Header'
import Info from './component/info/Info'
import Video from './component/video/Video'
import Content from './component/content/Content'
import Details from './component/details/Details'
import Services from './component/services/Services'
import Newsletter from './component/newsletter/Newsletter'
import Footer from './component/footer/Footer'


const App = () => {
  return (
    <div className='holder'>
      <Header />
      <Info />
      <Video />
      <Details />
      <Content />
      <Services/>
      <Newsletter />
       <Footer/>
    </div>
  )
}

export default App