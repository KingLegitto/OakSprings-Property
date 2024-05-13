import {motion} from 'framer-motion'

const Blur = () => {
    return ( 
        <motion.div initial={{backdropFilter: 'blur(0px)',background: 'rgba(0, 0, 0, 0)'}} animate={{backdropFilter: 'blur(10px)',background: 'rgba(0, 0, 0, 0.1)'}}
        transition={{type: 'tween', duration: 1, delay: 0.7}} exit={{backdropFilter: 'blur(0px)',background: 'rgba(0, 0, 0, 0)', transition:{type: 'tween', duration: 0.7,}}} 
        className="w-[100%] h-[100vh] modal fixed top-0 bottom-0 z-[80]">
            
        </motion.div>
     );
}
 
export default Blur;