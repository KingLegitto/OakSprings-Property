import { motion } from "framer-motion";
import oakLogo from '../assets/oaksprings2.png'


const Preloader = () => {
    return ( 
        <>

            <motion.div exit={{opacity: 0}} transition={{duration: 1.5}} className="w-[100%] h-[100vh] fixed bg-white z-[100]">
                <img src={oakLogo} alt="oaksprings Logo" 
                className="w-[80%] md:w-[50%] lg:w-[20%] aspect-auto absolute top-[50%] 
                left-[50%] translate-x-[-50%] translate-y-[-50%] object-cover object-center"/>
                <div className="spinner w-[200%] md:w-[80%] fixed z-[10] aspect-square rounded-[50%] border-[50px]  
                border-[#cea55d3e] border-dotted top-[50%] left-[50%]">

                </div>
            </motion.div>
        </>
     );
}
 
export default Preloader;