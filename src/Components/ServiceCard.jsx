
const ServiceCard = ({imgURL, label, subtext}) => {
  return (
    <div className="flex-1 w-full sm:w-[350px] sm:min-w-[350px] rounded-[20px] shadow-3xl px-10 py-16">
        <div className="w-11 h-11 flex justify-center items-center rounded-full bg-coral-red">
            <img src={imgURL} alt={label} height={24} width={24}/>
        </div>
        <h3 className="mt-5 font-palanquin text-3xl font-bold leading-normal">{label}</h3>
        <p className="mt-3 break-words text-lg font-montserrat leading-normal text-slate-gray ">{subtext}</p>
    </div>
  )
}

export default ServiceCard