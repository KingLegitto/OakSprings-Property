import {motion} from 'framer-motion'

const MailAlert = ({mailVerdict, setConfirm}) => {
   
    
    setTimeout(()=>{
        setConfirm(false)
    }, 3000)
    
    return ( 
        <motion.div initial={{transform: 'translate(-50%,-100%)', opacity: 0}} animate={{transform: 'translate(-50%,0%)', opacity: 1}} 
        transition={{type: 'tween', duration: 0.3}} exit={{transform: 'translate(-50%,-100%)', opacity: 0, transition:{type: 'tween', duration: 0.2}}} className="w-[90%] lg:w-[40%] h-[auto] rounded-b-[20px] border-[white] border-b-[5px] border-x-[5px] bg-[#cea55d] z-[81] fixed top-[0]
        left-[50%] p-[20px] text-center text-[white]">
            {mailVerdict && (<p>Mail send was <span className='text-[#43db8f] font-bold'>SUCCESSFUL</span><br/>
            Thank you</p>)}
            
            {!mailVerdict && (<p>Mail was <span className='text-[red] font-bold'>NOT SENT</span> <br/>
            Please try again</p>)}

        </motion.div>
     );
}
 
export default MailAlert;