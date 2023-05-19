import React from 'react'
import './services.css'
import S1 from '../../assets/s1.png'
import S2 from '../../assets/s2.png'
import S3 from '../../assets/s3.png'
import S4 from '../../assets/s4.png'
import S5 from '../../assets/s5.png'
import S6 from '../../assets/s6.png'

const Services = () => {
  return (
    <div className='article-container'>
      <article className='article__item'>
        <img className="article__item-image" src={S1} alt="picture" />
        <h3>Logos</h3>
        <div className="article__item-text">
          <p>Create a distinct logo designed to express and represent your brand identity.</p>
        </div>
      </article>
      <article className='article__item'>
        <img className="article__item-image"src={S2} alt="picture" />        <h3>Blog Writing</h3>
        <div className="article__item-text">
          <p>Write SEO enriched blog posts as long or short articles on any topic of your choice.</p>
        </div>
      </article>
      <article className='article__item'>
        <img className="article__item-image"src={S3} alt="picture" />
        <h3>Animated Videos</h3>
        <div className="article__item-text">
          <p>Bring animated characters to life to keep your viewers engaged and entertained.</p>
        </div>
      </article>
      <article className='article__item'>
        <img className="article__item-image"src={S4} alt="picture" />
        <h3>Product</h3>
        <div className="article__item-text">
          <p>Introduce your product to potential customers in a clear and creative video.</p>
        </div>
      </article>
      <article className='article__item'>
        <img className="article__item-image"src={S5} alt="picture" />
        <h3>Copywriting</h3>
        <div className="article__item-text">
          <p>Write compelling copies to boost your product, brand, service, or company.</p>
        </div>
      </article>
      <article className='article__item'>
        <img className="article__item-image"src={S6} alt="picture" />
        <h3>Social Media Apps</h3>
        <div className="article__item-text">
          <p>Boost sales and awareness with tailor made ads from experts.</p>
        </div>
      </article>
    </div>
  )
}

export default Services