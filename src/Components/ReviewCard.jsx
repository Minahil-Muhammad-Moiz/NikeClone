import { star } from "../assets/icons"

const ReviewCard = ({rating, feedback, imgURL, customerName}) => {
  return (
    <div className="flex justify-center items-center flex-col">
        <img src={imgURL}
        alt = 'Customer'
        className="rounded-full object-cover w-[120px] h-[120px]"/>
        <p className="mt-6 text-center info-text max-w-sm">{feedback}</p>
        <div className="flex justify-center gap-2.5 items-center mt-4">
            <img
            src= {star}
            alt='star'
            width={24}
            height={24}
            className='m-0 object-contain'/>
            <p className="text-xl text-slate-gray font-montserrat">{rating}</p>
        </div>
        <h3 className='mt-1 font-palanquin text-3xl font-bold text-center'>{customerName}</h3>
    </div>
  )
}

export default ReviewCard