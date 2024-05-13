import oakLogo from '../assets/oaksprings2.png'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import {AnimatePresence, motion} from 'framer-motion'
import { useState, useEffect, useRef } from 'react';
import Blur from './Blur';

const Navbar = ({mobile, setBgBlur, bgBlur, setModal, modal, setPrevent}) => {

    
    let [asideBar, setAsideBar] = useState(false)
    const asideRef = useRef(null)

    const navMove = {
        hidden:{
            transform: 'translateY(-100%)',
            transition:{
                type: 'tween', duration: 0.5
            }
        },
        visible: {
            transform: 'translateY(0)',
            transition:{
                type: 'tween', duration: 0.5
            }
        }
        
    }

    const asideBarMove = {
        hidden:{
            transform: 'translateX(-100%)', opacity: 0
        },
        visible:{
            transform: 'translateX(0)', opacity: 1,
            transition:{type: 'tween', duration: 0.3, ease: 'easeOut', staggerChildren: 0.07 , when: 'beforeChildren'}
        },
        leave:{
            transform: 'translateX(-100%)',
            transition:{type: 'tween', duration: 0.3, ease: 'easeOut'}
        }
    }

    const mobileLinksMove = {
        hidden:{
            transform: 'translateY(100px)', opacity: 0
        },
        visible:{
            transform: 'translateY(0)', opacity: 1,
            transition:{type: 'tween', duration: 0.3, ease: 'easeOut'}
        }
    }

    const pcLinksMove = {
        hidden: {},
        visible: {}
    }

    useEffect(()=>{
        if(asideBar){
            
            setTimeout(()=>{
                document.addEventListener('click', asideToggle)
            },1000)
            
            
        }
        return ()=>{
            document.removeEventListener('click', asideToggle)
        }
    },[asideBar])


    const asideToggle = (event)=>{
        if(asideRef.current && !asideRef.current.contains(event.target)){
            setAsideBar(false)
            setBgBlur(false)
            setPrevent(false)
            document.removeEventListener('click', asideToggle)
        }
    }


    const navLinks = [
        {id: 0, link: 'HOME', path: '#home'},
        {id: 1, link: 'ABOUT', path: '#about'},
        {id: 2, link: 'FEATURES', path: '#features'},
        {id: 3, link: 'PROPERTY VIEWINGS', path: '#views'},
        {id: 4, link: 'PAYMENT PLAN', path: '#payment-plan'},
        {id: 5, link: 'CONTACTS', path: '#contacts'}
        ]

    const navLinkItems = navLinks.map((item)=>{
        return(
            <motion.a href={item.path} key={item.id} variants={mobile? mobileLinksMove:pcLinksMove} 
            className='lg:hover:bg-[#edbd6b] lg:hover:rounded-[5px] pt-[5px] pb-[5px] grid place-content-center 
            lg:border-b-[1px] lg:border-t-[1px] border-black bg-[white] lg:bg-transparent border-l-[10px] border-l-[#463920] lg:border-l-[0px]'
            onClick={()=>{setAsideBar(false); setPrevent(false)}}>
                <li>
                {item.link}
                </li>
            </motion.a>)
    })


    return ( 
            <motion.nav variants={navMove} initial={'hidden'} animate={'visible'} exit={'hidden'} style={{boxShadow: '-1px 9px 8px -4px rgba(0,0,0,0.1)'}}
            className="h-[8vh] lg:h-[12vh] w-[100%] bg-[#fbfbfb] flex justify-between fixed z-[79] ">

            <a href='/'><img src={oakLogo} className='h-[8vh] lg:h-[12vh] bg-white shrink-0' alt="Logo" /></a>

            <div className='flex justify-around items-center grow'>
                {!mobile && (<ul className=' flex justify-between w-[70%]'>
                    {navLinkItems}
                </ul>)}
                
                {!mobile && (<button className='w-[200px] h-[8vh] border-[1px] border-[#cea55d] rounded-[10px]
                hover:bg-[#edbd6b] hover:font-bold hover:text-white transition-all duration-[0.5]' 
                onClick={()=>{setBgBlur(true); setModal(true)}}>
                    BOOK INSPECTION
                </button>)}

                {mobile && <div className='grow grid place-content-center' onClick={()=>{setAsideBar(true); setBgBlur(true); setPrevent(true)}}>
                    <MenuRoundedIcon style={{ color: 'black', fontSize: '50px'}}/>
                    </div>}
            </div>
            <AnimatePresence>
                {(asideBar || modal) && bgBlur &&<Blur/>}
            </AnimatePresence>
            
            <AnimatePresence>
            {asideBar && 
                (
                    <motion.aside variants={asideBarMove} initial={'hidden'} animate={'visible'} ref={asideRef} exit={'leave'}
                    className='h-[100vh] w-[75%] bg-[#edbd6b] absolute z-[81] flex items-center justify-center rounded-r-[20px]'>
                        <ul className='h-[50%] w-[70%] flex flex-col justify-around text-center'>
                            {navLinkItems}
                        </ul>
                        <span className='absolute left-0 bottom-0 w-[100%] text-center text-white'>Developed by Legitto</span>
                    </motion.aside>
                
                )
            }
            </AnimatePresence>
            </motion.nav>
        
     );
}
 
export default Navbar;