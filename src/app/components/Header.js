import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Nav from './Nav'

const Header = () => {
  return (
    <>
      <header className="main-header" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="500"  >
        <div className="cointainer">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12">
                 <Link href="/">
                    <Image src="/biscuits-logo.png" alt="my logo image" width={150} height={40}/>
              </Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
            </div>

             <Nav/>


          </div>
        </div>

    </header>
    </>
  )
}

export default Header