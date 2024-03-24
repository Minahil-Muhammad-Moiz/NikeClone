import Button from '../Components/Button'
import { shoe8 } from '../assets/images'
const SuperQuality = () => {
  return (
    <section id='about-us' className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container '>
      <div classsName='flex flex-1 flex-col'>
        <h2 className="font-palanquin text-4xl font-bold lg:max-w-lg">
          We Provide You
          <span className="text-coral-red"> Super Quality </span>
          Shoes
        </h2>
        <p className="info-text lg:max-w-lg mt-4">Ensuring Premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality innovation and a touch of elegance.</p>
        <p className='info-text mt-6 lg:max-w-lg'>Our dedication to detail and excellence ensures you satisfaction.</p>
        <div className='mt-11'>
          <Button label='View Details' />
        </div>
      </div>
      <div className='flex flex-1 justify-center items-center'>
        <img src={shoe8} alt='shoe8' height={522} width={570}/>
      </div>
    </section>
  )
}

export default SuperQuality