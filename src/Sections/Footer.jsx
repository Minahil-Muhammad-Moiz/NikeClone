import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => {
  return (
    <footer className='max-container '>
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col ">
        <div className="flex flex-col items-start">
          <a href='/'>
            <img src={footerLogo}
            width={150} height={46} alt='Nike Logo'/>
          </a>
          <p className="text-base leading-7 mt-6 font-montserrat text-white-400 sm:max-w-sm">Get the shoes ready for the new term at your nearest nike store. Find Your Perfect Size In Store. Get Reward.</p>
          <div className="flex items-center mt-8 gap-5 ">
            {socialMedia.map((icon)=>(
              <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full ">
                <img src={icon.src}
                alt={icon.alt}
                width={24}
                height={24}/>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-between gap-20 lg:gap-10 flex-wrap flex-1">
          {footerLinks.map((section)=>(
            <div key={section}>
              <h4 className="text-white font-normal font-montserrat text-2xl leading-normal mb-6">{section.title}</h4>
              <ul >
                {section.links.map((link)=>(
                  <li className=" mt-3 text-white-400 font-montserrat text-base leading-noraml hover:text-slate-gray cursor-pointer" key={link.name}>
                    <a>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between text-white-400  mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img src={copyrightSign}
          alt='Copy Right Sign'
          width= {20}
          height= {20}
          className="rounded-full m-0"/>
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className=" font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  )
}

export default Footer