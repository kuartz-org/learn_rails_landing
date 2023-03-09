import Head from 'next/head'

import { Author } from '@/components/Author'
import { Footer } from '@/components/Footer'
import { FreeChapters } from '@/components/FreeChapters'
import { Hero } from '@/components/Hero'
import { Introduction } from '@/components/Introduction'
import { NavBar } from '@/components/NavBar'
import { Pricing } from '@/components/Pricing'
import { Resources } from '@/components/Resources'
import { Screencasts } from '@/components/Screencasts'
import { TableOfContents } from '@/components/TableOfContents'
import { Testimonial } from '@/components/Testimonial'
import { Testimonials } from '@/components/Testimonials'
import avatarImage1 from '@/images/avatars/avatar-1.png'
import avatarImage2 from '@/images/avatars/avatar-2.png'

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Empower yourself with developer skills.
        </title>
        <meta
          name="description"
          content="A video course that teaches you how to build your own web application from scratch. "
        />
      </Head>
      <Hero />
      {/* <Introduction />
      <NavBar />
      <TableOfContents />
      <Testimonial
        id="testimonial-from-tommy-stroman"
        author={{
          name: 'Tommy Stroman',
          role: 'Front-end developer',
          image: avatarImage1,
        }}
      >
        <p>
          “Thanks to the Ruby on Rails learning course, I am now empowered with the skills and knowledge to
          build beautiful, functional web applications with ease and confidence!”
        </p>
      </Testimonial>
      <Screencasts />
      <Testimonial
        id="testimonial-from-gerardo-stark"
        author={{
          name: 'Gerardo Stark',
          role: 'Creator of Pandemicons',
          image: avatarImage2,
        }}
      >
        <p>
          “I’ve tried to create my own icons in the past but quickly got
          frustrated and gave up. Now I sell my own custom icon sets online.”
        </p>
      </Testimonial>
      <Resources />
      <FreeChapters />
      <Pricing />
      <Testimonials />
      <Author /> */}
      <Footer />
    </>
  )
}
