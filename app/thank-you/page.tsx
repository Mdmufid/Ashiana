import { Metadata } from 'next';
import React from 'react'


export const metadata: Metadata = {
  title: "Thank You | Ashiana Interiors Kolkata",
  description:
    "Thank you for contacting us we will get back to you soon",
  alternates: {
    canonical: "/thank-you",
  },
};


export default function page() {
  return (
    <section className='h-screen flexCenter flex-col gap-3'>
         <h2 className='text-5xl font-semibold'>Thank You</h2>
         <p>We will get back to you soon</p>
    </section>
  )
}
