import {motion} from 'framer-motion'
import { useRef,useEffect, useState} from 'react';
import emailjs from '@emailjs/browser';


const Modal = ({modal, setModal, setBgBlur, setConfirm, setMVerdict}) => {
    const modalRef = useRef(null)
    const formRef = useRef();

    let [waitText, setWaitText] = useState('Send')
    useEffect(()=>{
        if(modal){
            
            setTimeout(()=>{
                document.addEventListener('click', modalToggle)
            },1000)
        }
        
    }, [modal])
    
    const modalToggle = (event)=>{
        
        if(modalRef.current && !modalRef.current.contains(event.target)){
            
            setModal(false)
            setBgBlur(false)
            
            document.removeEventListener('click', modalToggle)
        }
    }
    const sendEmail = (e) => {
        e.preventDefault();
        setWaitText('Sending...')
    
        emailjs.sendForm('service_ph9w5kg', 'template_d52oxqm', formRef.current, 'Oq5EdazBts3hbIRj2')
          .then(() => {
                setMVerdict(true);
                setModal(false)
                setBgBlur(false)
                setConfirm(true);
          }, () => {
                setWaitText('Send')
                setMVerdict(false);
                setConfirm(true);
          });
      };
    return ( 
        <motion.div ref={modalRef} initial={{transform: 'translate(-50%,100%)', opacity: 0}} animate={{transform: 'translate(-50%,-50%)', opacity: 1}} 
        transition={{type: 'spring', stiffness: 100}} exit={{transform: 'translate(-50%,100%)', transition:{type: 'tween', duration: 0.2}}} className="w-[90%] lg:w-[40%] h-[auto] rounded-[20px] border-[white] border-[2px] bg-[#cea55d] z-[81] fixed top-[50%] 
        left-[50%] p-[20px] ">
            <form method="get" className=' w-[100%] flex justify-around flex-wrap' ref={formRef} onSubmit={sendEmail}>
                <label htmlFor="name" className='w-[47%]'>Name</label>
                <label htmlFor="name" className='w-[47%]'>Email</label>
                <input id='name' type="text" className='w-[47%] h-[7vh] rounded-[10px] px-[10px]' name="name" required/>
                <input type="email" id="" className='w-[47%] h-[7vh] rounded-[10px] px-[10px]' name="email" required/>
                <label htmlFor="name" className='w-[47%] mt-[5vh]'>Phone No.</label>
                <label htmlFor="name" className='w-[47%] mt-[5vh]'>Schedule a date</label>
                <input type="number" name="number" id="" className='w-[47%] h-[7vh] rounded-[10px] px-[10px]' required/>
                <select name="date" id="" className='w-[47%] h-[7vh] rounded-[10px] px-[10px]'>
                    <option value="Monday 10:00am">Monday 10:00am</option>
                    <option value="Tuesday 10:00am">Tuesday 10:00am</option>
                    <option value="Saturday 10:00am">Saturday 10:00am</option>
                </select>
                <label htmlFor="message" className='w-[100%] mt-[5vh]'>Send a message</label>
                <textarea name="message" id="message" cols="30" rows="10" className='w-[100%] rounded-[10px] p-[10px] h-[20vh]'></textarea>
                
                <input type="submit" value={waitText} className='w-[200px] h-[8vh] mt-[5vh] rounded-[10px] grid place-content-center
                      bg-[white]  hover:font-bold text-[#cea55d] transition-all duration-[0.5] text-[20px]'/>
            </form>
        </motion.div>
     );
}
 
export default Modal;