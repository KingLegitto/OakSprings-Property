import cadRender1 from '../assets/3D-FACAD-6-1.jpg'
import cadRender2 from '../assets/3D-FACAD-3-1-scaled.jpg'
import cadRender3 from '../assets/3D-FACAD-7-scaled.jpg'
import pic1 from '../assets/WhatsApp-Image-2023-04-08-at-10.13.35-PM.jpeg'
import pic2 from '../assets/WhatsApp-Image-2023-04-08-at-10.13.38-PM-1.jpeg'
import pic3 from '../assets/WhatsApp-Image-2023-04-08-at-10.13.39-PM-2.jpeg'
import pic4 from '../assets/WhatsApp-Image-2023-04-08-at-10.13.40-PM-563x768.jpeg'
import pic5 from '../assets/WhatsApp-Image-2023-04-08-at-10.13.42-PM-1-768x768.jpeg'
import pic6 from '../assets/WhatsApp-Image-2023-04-08-at-10.13.45-PM-768x768.jpeg'
import pic7 from '../assets/WhatsApp-Image-2023-04-10-at-3.10.30-PM-768x768.jpeg'
import { useState,useEffect, useRef } from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import Blur from './Blur';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { ArrowBackIos, ArrowForwardIos, Bathtub, Email, Garage, Hotel, SquareFoot, WhatsApp } from '@mui/icons-material'

const Body = ({mobile, mobBookBtn, setBgBlur, bgBlur, modal, setModal, setViewer, setImage, viewer}) => {
    let [caroIndex, setCaroIndex] = useState(0)
    let [galleryIndex, setGallery] = useState(0)
    let [pricePlan, setPricePlan] = useState(true)
    

    const caroAnimate = {
        hidden:{
            opacity: 0,
            transform: 'scale(1)',
        },
        enter:{
            opacity: 1, transform: 'scale(1.1)',
            transition:{
                type: 'tween', duration: 2, transform: {duration: 9, ease: 'easeIn'},
            }
        },
        leave:{
            opacity: 0,
            transition:{
                type: 'tween', duration: 3
            }
        }
    }

    const bookBtn = {
        hidden:{
            opacity: 0,
            transform: 'translateY(100%)'
        },
        enter:{
            opacity: 1,
            transform: 'translateY(0)', transition:{type: 'tween', duration: 0.5, delay: 0.5}
        },
    }
   
    const caroItems = [
        {id: 0, img: cadRender1, heading: 'Oaksprings Apartments', sub: 'AWOYAYA, LAGOS', color: 'black'},
        {id: 1, img: cadRender2, heading: 'Get Your Dream Home', sub: 'AT AN AFFORDABLE PRICE', color: 'white'},
        {id: 2, img: cadRender3, heading: 'Enjoy Modern Living', sub: 'WITH MODERN FACILITIES', color: 'white'},
    ]
    const caroItemsFltr = caroItems.filter((item)=>(item.id == caroIndex))
    const caroItemsList = caroItemsFltr.map((item)=>{
        return(
            <motion.span key={item.id} className='p-0'>
                <motion.div variants={caroAnimate} initial={'hidden'} animate={'enter'} exit={'leave'} 
                style={{backgroundImage: `url(${item.img})`, backgroundPosition: 'center', zIndex: 5,
                backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}
                className='w-[100%] h-[100%] absolute'>
                    
                </motion.div>

                <motion.div className='w-[100%] h-[100%] bg-black opacity-[0.4] absolute z-[9]' exit={{opacity: 0,transition:{type: 'tween', duration: 0}}}>

                </motion.div>
                <motion.span initial={{opacity: 0,transform: 'translate(-50%,50%)'}} exit={{opacity: 0, transition:{type: 'tween', duration: 0.1}}}
                animate={{opacity: 1, transform: 'translate(-50%,-50%)',}} transition={{type: 'tween', duration: 0.5, delay: 2}}
                style={{lineHeight: 1.1}}
                className='absolute z-10 w-[100%] top-[50%] left-[50%] text-center text-[35px] md:text-[50px] lg:text-[60px] text-white Lora'>
                    {item.heading}
                </motion.span>
                <motion.span initial={{opacity: 0,transform: 'translate(-50%,300%)'}} exit={{opacity: 0, transition:{type: 'tween', duration: 0.1}}}
                animate={{opacity: 1, transform: 'translate(-50%,200%)',}} transition={{type: 'tween', duration: 0.5, delay: 2.5}}
                className='absolute z-10 w-[100%] top-[50%] left-[50%] text-center text-white'>
                    {item.sub}
                </motion.span>

            </motion.span>
            
            )
    })
    useEffect(()=>{
        setTimeout(()=>{

            if(caroIndex >= 2){
                setCaroIndex(0)
                // alert('hii')
            }else{setCaroIndex(caroIndex+1)}
            
            
        }, 8000)
        
        
    },[caroItemsFltr])

    
    const featuresItems = [
        {id:0, heading: 'Wide Interlocked Compound', info: '882 squared meters compound neatly paved with interlocking stone tiles'},
        {id:1, heading: 'Borehole/ Water Treatment Plant', info: 'Stable drinking borehole & water treatment unit'},
        {id:2, heading: 'Standby Generator', info: 'On-demand generator ensuring stable power supply for occupants'},
        {id:3, heading: 'Security', info: 'Securely gated compound manned by able personnel'},
    ]

    const featuresItemsList = featuresItems.map((item)=>{
        return(
            <div key={item.id} className='w-[100%] lg:w-[50%] h-[auto] text-[white] px-[50px] py-[20px] relative mb-3'>
            <h3 className='text-[20px] font-bold pt-[20px]'>{item.heading}</h3>
            <p className='pt-[10px]'>{item.info}</p>
            <CheckBoxIcon className='absolute top-0 translate-y-[100%] left-0 '/>
            </div>
        )
    })
    
    const gallery = [
        {id: 0, img: pic1}, {id: 1, img: pic2},
        {id: 2, img: pic3}, {id: 3, img: pic4},
        {id: 4, img: pic5}, {id: 5, img: pic6}, {id: 6, img: pic7},
    ]

    const galleryFlt = gallery.filter((item)=>(item.id >= (galleryIndex) && item.id <= (galleryIndex + 2)))

    const galleryList = galleryFlt.map((item)=>{
        return(
            <img key={item.id} src={item.img} className='lg:hover:scale-[1.05] w-[100%] lg:w-[33%] 
            h-[100%] transition-transform duration-[0.3s]' style={{objectFit: 'cover', cursor: 'pointer'}} onClick={()=>{setViewer(true); setBgBlur(true); setImage(item.img)}}/>
        )
    })

    const handleGalleryF = ()=>{
        if(galleryIndex < gallery.length-1){
            if(mobile){
                setGallery(galleryIndex+1)
            }else{setGallery(galleryIndex+3)}
            
        }
    }
    const handleGalleryB = ()=>{
        if(galleryIndex > 1){
            if(mobile){
                setGallery(galleryIndex-1)
            }else{setGallery(galleryIndex-3)}
            
        }
    }

    
    return ( 
    <>
{/* /////////////////////////////////////// HERO CAROSEL ////////////////////////////////////////////////////// */}
        <section id='home' className="h-[90vh] md:h-[92vh] lg:h-[97vh] w-[100%] flex relative overflow-hidden">
            <AnimatePresence>
                {caroItemsList}
            </AnimatePresence>
        </section>

        <AnimatePresence>
        {mobBookBtn && mobile && (
        <motion.button variants={bookBtn} initial={'hidden'} animate={'enter'} exit={'hidden'} className='rounded-[50%] w-[80px] h-[80px] bg-[#cea55d] fixed 
        bottom-[10px] right-[10px] z-[50]' style={{border: '2px solid white'}} onClick={()=>{setModal(true); setBgBlur(true)}}>
            <EventAvailableIcon style={{fontSize: '35px', color: 'white'}}/>
        </motion.button>)}
        </AnimatePresence>
{/* //////////////////////////////////// ABOUT SECTION ////////////////////////////////////////////////// */}
        <section id='about'  className='h-[auto] w-[100%] pt-[100px] flex items-center justify-between flex-wrap'>
            {!mobile && (<div style={{backgroundImage: `url(${cadRender1})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover',
            backgroundPosition: 'center'}}
            className='w-[55%] h-[70vh]'>

            </div>)}
            <div className='w-[100%] lg:w-[45%] h-[50vh]'>
                <h1 className='text-[45px] text-[#cea55d] text-center px-[15px] Lora'>About Oaksprings</h1>
                <p style={{hyphens: 'auto'}} className='leading-[40px] text-[22px] text-justify py-[30px] px-[30px] lg:px-[70px]'>The Oaksprings property presents an exquisite 3-storey building structure built upon sophisticated 
                    and uncompromising standard. Elegant design and a solid structure ensure peaceful living at Oaksprings.
                </p>
                
            </div>
            <div className='w-[100%] h-[auto] bg-[#cea55d] mt-[15vh] flex flex-wrap text-white'>
               <div className='w-[100%] lg:w-[25%] h-[35vh] flex justify-center items-center flex-col'>
                    <SquareFoot style={{fontSize: '50px'}}/>
                    <div className='text-[40px]'>882</div>squared meters
               </div>
               <div className='w-[100%] lg:w-[25%] h-[35vh] flex justify-center items-center flex-col'>
                    <Hotel style={{fontSize: '50px'}}/>
                    <div className='text-[40px]'>15</div>bedrooms
               </div>
               <div className='w-[100%] lg:w-[25%] h-[35vh] flex justify-center items-center flex-col'>
                    <Bathtub style={{fontSize: '50px'}}/>
                    <div className='text-[40px]'>10</div>bathrooms
               </div>
               <div className='w-[100%] lg:w-[25%] h-[35vh] flex justify-center items-center flex-col'>
                    <Garage style={{fontSize: '50px'}}/>
                    <div className='text-[40px]'>7</div>cars total parking accomodation
               </div>
            </div>
            

        </section>

        <section id='features' className='w-[100%] h-[auto] pt-[100px] flex items-center justify-between flex-wrap'>
            <div className='w-[100%] lg:w-[45%] h-[50vh]'>
                <h1 className='text-[45px] text-[#cea55d] text-center px-[15px] Lora'>Property Features</h1>
                <p style={{hyphens: 'auto'}} className='leading-[40px] text-[22px] text-justify py-[30px] px-[30px] lg:px-[70px]'>
                    The luxurious residential apartment block is designed to suit a modern lifestyle, and provides a spacious complex environment with everything you need.
                </p>
                
            </div>
            <div className='w-[100%] lg:w-[55%] h-[auto] bg-[#cea55d] p-[30px] flex flex-wrap'>
               {featuresItemsList}
            </div>
        </section>

        <section id='views' className='w-[100%] h-[auto] pt-[100px]'>
            <h1 className='text-[45px] text-[#cea55d] text-center px-[15px] Lora'>Property Viewings</h1>

            <div className='flex flex-wrap w-[100%] h-[70vh] overflow-hidden justify-between relative border-[#cea55d] border-t-[5px] border-b-[5px]'>
                <span className='w-[50px] h-[70%] lg:h-[70px] bg-[#0606062e] lg:bg-[#cea55d] absolute top-[50%] left-0 
                translate-y-[-50%] z-[10] grid place-content-center rounded-r-[30px] text-[white]' onClick={handleGalleryB}>
                    <ArrowBackIos/>
                </span>
                <span className='w-[50px] h-[70%] lg:h-[70px] rounded-l-[30px] bg-[#0606062e] lg:bg-[#cea55d] absolute top-[50%] right-0 
                translate-y-[-50%] z-[10] grid place-content-center text-[white]' onClick={handleGalleryF}>
                    <ArrowForwardIos/>
                </span>
                {galleryList}
            </div>
        </section>

        <section id='payment-plan' className='w-[100%] h-[auto] pt-[100px] px-[0px] lg:px-[100px]'>
            <div className='h-[auto] w-[100%] border-[#cea55d] border-[5px] px-[20px] py-[50px]'>
                <h1 className='text-[45px] text-center px-[15px] Lora leading-[45px]'>Prices & Payment Structure</h1>


                {pricePlan && (<h3 className='font-bold mt-[20px] border-[#cea55d] border-b-[5px] flex justify-center'>
                    <button className='px-[20px] py-[10px] bg-[#cea55d]' onClick={()=>{setPricePlan(true)}}>SHELL  APARTMENT</button>
                    <button className='px-[20px] py-[10px]' onClick={()=>{setPricePlan(false)}}>COMPLETED  APARTMENT</button>
                </h3>)}
                {pricePlan && (<div className='flex flex-wrap h-[auto] pt-[30px] w-[100%] px-[10px]'>
                        <div className='w-[100%] lg:w-[50%] h-[auto] flex flex-col justify-center'>
                            <h1 className='text-[25px] text-center lg:text-left lg:text-[35px] Lora'>SHELL APARTMENT PRICING</h1>
                            <h3 className='text-[20px]'>Flexible payment structure available. Payment within 18 months</h3>
                            <p className='text-[20px] mt-[20px] lg:mt-[50px] font-bold'>
                                VAT : 7.5%  |  Legal Fees : 2.5% <br/>
                                Outright Payment Discount : 3%
                            </p>
                            <a className='mt-[20px] mb-[10px] w-[200px]'  href="" >
                            <button className='bg-[#cea55d] w-[100%] p-[10px] rounded-[5px]'>Download Payment Plan</button>
                            </a>
                        </div>
                        <div className='w-[100%] lg:w-[50%] h-[auto] flex flex-col justify-center items-center '>
                            <h3 className='text-[25px] text-left lg:text-center'>Outright Payment In A Single Instalment Attract A Discount Of 3%</h3>
                            <h3 className='text-center font-bold mt-[20px] flex w-[100%] justify-center'>
                                <div className='px-[5px] lg:px-[20px] text-[22px] lg:text-[25px] border-[#cea55d] border-[2px]'>ONE BEDROOM<br/>₦15,000,000</div>
                                <div className='px-[5px] lg:px-[20px] text-[22px] lg:text-[25px] bg-[#cea55d]'>THREE BEDROOM<br/>₦31,000,000</div>
                            </h3>
                        </div>
                </div>)}

                {!pricePlan && (<h3 className='font-bold mt-[20px] border-[#cea55d] border-b-[5px] flex justify-center'>
                    <button className='px-[20px] py-[10px]' onClick={()=>{setPricePlan(true)}}>SHELL  APARTMENT</button>
                    <button className='px-[20px] py-[10px] bg-[#cea55d]' onClick={()=>{setPricePlan(false)}}>COMPLETED  APARTMENT</button>
                </h3>)}
                {!pricePlan && (<div className='flex flex-wrap h-[auto] pt-[30px] w-[100%] px-[10px]'>
                        <div className='w-[100%] lg:w-[50%] h-[auto] flex flex-col justify-center'>
                            <h1 className='text-[25px] text-center lg:text-left lg:text-[35px] Lora'>COMPLETE APARTMENT PRICING</h1>
                            <h3 className='text-[20px]'>Flexible payment structure available. Payment within 18 months</h3>
                            <p className='text-[20px] mt-[20px] lg:mt-[50px] font-bold'>
                                VAT : 7.5%  |  Legal Fees : 2.5% <br/>
                                Outright Payment Discount : 3%
                            </p>
                            <a className='mt-[20px] mb-[10px] w-[200px]'  href="" >
                            <button className='bg-[#cea55d] w-[100%] p-[10px] rounded-[5px]'>Download Payment Plan</button>
                            </a>
                        </div>
                        <div className='w-[100%] lg:w-[50%] h-[auto] flex flex-col justify-center items-center '>
                            <h3 className='text-[25px] text-left lg:text-center'>Outright Payment In A Single Instalment Attract A Discount Of 3%</h3>
                            <h3 className='text-center font-bold mt-[20px] flex w-[100%] justify-center'>
                                <div className='px-[5px] lg:px-[20px] text-[22px] lg:text-[25px] border-[#cea55d] border-[2px]'>ONE BEDROOM<br/>₦19,000,000</div>
                                <div className='px-[5px] lg:px-[20px] text-[22px] lg:text-[25px] bg-[#cea55d]'>THREE BEDROOM<br/>₦40,000,000</div>
                            </h3>
                        </div>
                </div>)}
            </div>
        </section>


        <section id='contacts' className='h-[auto] w-[100%] py-[100px]'>
            <h1 className='text-[45px] text-center px-[15px] Lora mb-[30px] text-[#cea55d]'>Book An Inspection!</h1>
            <div className='w-[100%] h-[auto] flex flex-wrap bg-[#cea55d] text-[white] py-[15px]'>
                <div className='w-[100%] lg:w-[50%] h-[auto] lg:h-[50vh] pb-[30px]'>
                    
                    <p className='leading-[40px] text-[23px] py-[30px] px-[30px] lg:px-[70px] flex text-justify'>
                            
                            If you have the time you can schedule an inspection TODAY! Or for further enquires,
                            feel free to reach out to us with the contacts provided.<br/>
      
                    </p>
                    <span className='w-[100%] flex justify-center'>
                        <button className='w-[200px] h-[8vh] border-[1px] border-white rounded-[10px]
                        hover:bg-[white] hover:font-bold hover:text-[#cea55d] transition-all duration-[0.5]' 
                        onClick={()=>{setBgBlur(true); setModal(true)}}>
                            BOOK INSPECTION
                        </button>
                    </span>
                
                </div>
                <div className='w-[100%] lg:w-[50%] h-[auto] lg:h-[50vh] border-[white] border-dashed border-t-[3px] lg:border-t-[0px] lg:border-l-[3px] p-[30px] flex flex-col lg:justify-around'>
                    <span className='text-center mb-[20px]'>
                        <Email style={{fontSize: '30px', color: 'white'}}/><br/>
                        ibeene@gmail.com
                    </span>
                    <span className='text-center mb-[20px]'>
                        <Email style={{fontSize: '30px', color: 'white'}}/><br/>
                        ibeene@yahoo.com
                    </span>
                    <span className='text-center'>
                        <WhatsApp style={{fontSize: '30px', color: 'white'}}/><br/>
                        +234 8033098918
                    </span>
                </div>
            </div>
            
        </section>

        <footer className='h-[30vh] w-[100%] bg-[#2b2b2b] text-center grid place-content-center text-white font-bold'>
            Copyrights © 2023 Oaksprings Properties. All rights reserved | Developed by Legitto
        </footer>
        <AnimatePresence>
                {(modal || viewer) && bgBlur &&<Blur/>}
        </AnimatePresence>
    </> 
    );
}
 
export default Body;