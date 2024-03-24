import { star } from "../assets/icons"

const PopularProductCard = ({imgURL, name, price}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
        <img src={imgURL} alt='Product Image' className='w-[280px] h-[280px]'></img>
        <div className="flex justify-start gap-2.5 mt-8">
            <img src={star} alt='rating...' width={24} height={24}/>
            <p className="text-slate-gray font-montserrat leading-normal text-lg">4.5</p>
        </div>
        <h3 className="mt-2 text-2xl leading-normal font-palanquin font-semibold">{name}</h3>
        <p className="mt-2 font-montserrat text-coral-red text-2xl font-semibold leading-normal">{price}</p>
    </div>
  )
}

export default PopularProductCard