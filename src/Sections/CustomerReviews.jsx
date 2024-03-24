import ReviewCard from "../Components/ReviewCard"
import { reviews } from "../constants"

function CustomerReviews() {
  return (
    <section className='max-conatiner '>
      <h3 className="text-4xl font-palanquin font-bold text-center ">
        What our
        <span className="text-coral-red text-4xl"> Customers </span>
        say?
      </h3>
      <p className="info-text mt-4 max-w-lg m-auto text-center ">Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>
      <div className="mt-4 flex flex-1 justify-evenly items-center gap-14 max-lg:flex-col" >
        {reviews.map((review)=>(
          <ReviewCard 
            key ={review.customerName}
            customerName = {review.customerName}
            rating= {review.rating}
            feedback = {review.feedback}
            imgURL = {review.imgURL}           
          />
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews