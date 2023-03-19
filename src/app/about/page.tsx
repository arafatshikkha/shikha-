

import Image from 'next/image'
import { Inter } from 'next/font/google'
import Testimonial from '../../components/Testimonial/Testimonial'

const inter = Inter({ subsets: ['latin'] })

export default function About() {
  return (
    <>
    <Testimonial />
    </>
  )
}
