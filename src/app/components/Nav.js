import React from 'react';
import Link from 'next/link';

const Nav = () => {
  return (

    <div className="col-lg-8 col-md-8 col-sm-12 text-end">
      <nav>
      <ul>
        <li><Link href="/about">About us</Link></li>
         <li><Link href="/product">Product</Link></li>
        <li><Link href="/blog">blog</Link></li>
        <li><Link href="/faq">faq</Link></li>
         <li><Link href="/contact">contact</Link></li>
      </ul>
      </nav>
    </div>


  );
};

export default Nav;
