import { Routes } from '@/constants/enums'
import React from 'react'
import MainHeading from '../main-heading/MainHeading'

function About() {
  return (
    <section className='section-gap text-center' id={Routes.ABOUT}>
      <MainHeading
        titleChildren={
          <span className="inline-block">
            About{" "}
            <span className="bg-gradient-to-r from-primary to-primary/10 bg-clip-text text-transparent">
              Us
            </span>
          </span>
        }
        subtitle="We are more than multiple service"
      />
      <div className='text-accent max-w-md mx-auto mt-4 flex flex-col gap-4'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In, quis mollitia! Id quibusdam voluptatum, sint libero architecto pariatur rem, neque eius cumque iure saepe, perspiciatis doloremque iste. Deleniti, tempore enim?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In, quis mollitia! Id quibusdam voluptatum, sint libero architecto pariatur rem, neque eius cumque iure saepe, perspiciatis doloremque iste. Deleniti, tempore enim?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In, quis mollitia! Id quibusdam voluptatum, sint libero architecto pariatur rem, neque eius cumque iure saepe, perspiciatis doloremque iste. Deleniti, tempore enim?
        </p>
      </div>
    </section>
    )
}

export default About
