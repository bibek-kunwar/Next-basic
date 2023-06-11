import Image from 'next/image'
import styles from './page.module.css'
import Sliderpage from './components/Sliderpage'
import Login from './components/Login'


export default function Home() {
  return (
    <>
      <Sliderpage />
      <Login/>
    </>
  )
}
