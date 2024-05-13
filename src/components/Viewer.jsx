import {motion} from 'framer-motion'
import { useRef,useEffect} from 'react';



const Viewer = ({viewer, setViewer, setBgBlur, targetImg}) => {

    const viewerRef = useRef(null)
    useEffect(()=>{
        if(viewer){
            
            setTimeout(()=>{
                
                document.addEventListener('click', viewerToggle)
            },1000)
        }
        
    }, [viewer])
    
    const viewerToggle = (event)=>{
        // alert('Modal')
        if(viewerRef.current && !viewerRef.current.contains(event.target)){
            
            setViewer(false)
            setBgBlur(false)
            
            document.removeEventListener('click', viewerToggle)
        }
    }
    return ( 
        <motion.img ref={viewerRef} initial={{transform: 'translate(-50%,100%)', opacity: 0}} animate={{transform: 'translate(-50%,-50%)', opacity: 1}} src={targetImg} alt='IMAGE'
        transition={{type: 'spring', stiffness: 100}} exit={{transform: 'translate(-50%,100%)', transition:{type: 'tween', duration: 0.2}}} className="w-[100%] lg:w-[60%] h-[70%] lg:h-[90%] object-cover rounded-[10px] border-[2px] z-[81] fixed top-[50%] 
        left-[50%]"/>
     );
}
 
export default Viewer;