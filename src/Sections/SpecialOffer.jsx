import Button from "../Components/Button"
import { offer } from "../assets/images"
import {arrowRight} from '../assets/icons'

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer} width={773} height={687} className="object-contain w-full"/>
      </div>
      <div classsName='flex flex-1 flex-col'>
        <h2 className="font-palanquin text-4xl font-bold lg:max-w-lg">
          <span className="text-coral-red"> Special</span> Offer
        </h2>
        <p className="info-text lg:max-w-lg mt-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut atque esse corporis eveniet illum facilis eaque fugit incidunt voluptates voluptatibus libero, cupiditate earum, vitae suscipit ipsam rem aperiam nemo sunt.</p>
        <p className='info-text mt-6 lg:max-w-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur reprehenderit velit inventore tempore, dignissimos officia commodi accusamus, delectus, optio iste reiciendis quaerat voluptas maiores corrupti ipsum aliquam quos at impedit!</p>
        <div className='mt-11 flex flex-wrap gap-4'>
          <Button label='Shop Now' iconURL= {arrowRight}/>
          <Button label='Learn More' backgroundColor='bg-white' borderColor='border-slate-gray' textColor='text-slate-gray' />
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer