import Button from "../Components/Button"
import { arrowRight } from "../assets/icons"
import { bigShoe1 } from "../assets/images"
import {shoes, statistics} from '../constants/index'
import ShoeCard from "../Components/ShoeCard"
import { useState } from "react"

const Hero = () => {
  const [bigShoeImg, setBigShoeImg]= useState(bigShoe1)
  return (
    <section id='home' className="w-full  p-2 flex justify-center  xl:flex-row flex-col min-h-screen gap-10 max-container">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">Our Summer Collection</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white whitespace-nowrap relative z-10 pr-10">The New Arrivals</span>
          <br/>
          <span className="text-coral-red inline-block mt-3">Nike</span>
          Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm ">Discover stylish Nike arrivals, quality comfort, and innovation for you active life.</p>
        <Button label='shop Now' iconURL={arrowRight}/>
        <div className="flex justify-start items-start w-full flex-wrap mt-20 gap-16">
          {statistics.map((stat, index)=>(
            <div>
              <p className="text-4xl font-palanquin font-bold ">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 relative flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-cover bg-center bg-hero">
        <img
          src={bigShoeImg}
          alt='Big Shoe Image'
          height= {450}
          width={610}
          className="object-contain relative z-10 "/>
          <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
            {shoes.map((shoe)=>(
              <div key={shoe}>
                <ShoeCard 
                  imgURL={shoe}
                  ChangeBigShoeImage = {(shoe)=> setBigShoeImg(shoe)}
                  bigShoeImg = {bigShoeImg}
                />
                </div>
            ))}
          </div>
      </div>
    </section>
  )
}

export default Hero