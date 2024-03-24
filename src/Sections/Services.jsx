import {services} from '../constants/index'
import ServiceCard from '../Components/ServiceCard'
const Services = () => {
  return (
    <section id='services'  className='max-container flex flex-wrap justify-center gap-9'>
      {services.map((service)=>(
        <ServiceCard key= {service.label} {...service}/>
      ))}
    </section>
  )
}

export default Services