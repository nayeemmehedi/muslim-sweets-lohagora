import React from 'react'
import dynamic from 'next/dynamic'

const SlideShow = dynamic(() => import("../Nav_Main/SlideShow"))
const PatisserieProduct = dynamic(() => import('../ServiceDescription/PatisserieProduces'))
const Unique = dynamic(() => import('../ServiceDescription/Unique'))
const OnlineStore = dynamic(() => import('../ServiceDescription/OnlineStore'))
const Testimonial = dynamic(() => import('../ServiceDescription/Testimonial'))

function MainComponent() {
  return (
    <div className=''>
         <SlideShow></SlideShow>
         <PatisserieProduct></PatisserieProduct>
         <Unique></Unique>
         <OnlineStore></OnlineStore>
         <Testimonial></Testimonial>
    </div>
  )
}

export default MainComponent
