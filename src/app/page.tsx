

import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '../components/hero/Hero'
import Testimonial from '../components/Testimonial/Testimonial'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Hero />
    </>
  )
}
