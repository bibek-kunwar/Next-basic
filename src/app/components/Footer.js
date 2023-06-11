import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-4 col-sm-12 logo-side">
              <Link href="/" className="footer-logo">
                    <Image src="/biscuits-logo.png" alt="my footer image" width={150} height={40} />
              </Link>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, cupiditate. Laudantium odio quas ad unde doloribus quasi numquam reiciendis ipsam. Dicta est repellendus veniam fugiat qui culpa quas eveniet odio?</p>
              <ul className="social-media" >
                <li>  <Link href="/">  <FaInstagram /> </Link></li>
                <li>  <Link href="/">  <FaTwitter /> </Link></li>
                <li>  <Link href="/">  <FaFacebook /> </Link></li>
                <li>  <Link href="/">  <FaInstagram/> </Link></li>
              </ul>
            </div>
            <div className="col-lg-3" >
              <div className="quick-links">
                <h6>qucick links</h6>
                <ul>
                  <li><Link href="/about">About us</Link></li>
                    <li><Link href="/product">Product</Link></li>
                    <li><Link href="/blog">blog</Link></li>
                    <li><Link href="/faq">faq</Link></li>
                    <li><Link href="/contact">contact</Link></li>
                </ul>
            </div>
            </div>
                <div className="col-lg-4 col-md-4 col-sm-12 text-end">
              <div className="newsletter-wrapper">
                 <h6>Subscribe to our Newsletter</h6>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.dolor sit amet consectetur adipisicing elit.</p>
                <form action="" className="newsletter-form">
                  <input type="email" placeholder="Email Address"></input>
                  <button className="btn">Subscribe</button>
                </form>
              </div>
              <p>Company</p>
                    <p>Address</p>
               </div>
          </div>
          <div className="row">
            <div className="col-12 text-center copy-right-text">
               <p>Copyright 2023 all right reserve</p>
            </div>
          </div>
        </div>
    </footer>
    </>
  )
}

export default Footer