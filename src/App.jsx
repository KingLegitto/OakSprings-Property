import { AnimatePresence } from "framer-motion";
import Body from "./components/Body";
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
import Modal from "./components/Modal";
import Viewer from "./components/Viewer";
import MailAlert from "./components/MailAlert";
import Preloader from "./components/Preloader";


const App = () => {
  let [mobile, setMobile] = useState(false)
  let tablet
  let phone
  let [mobBookBtn, setMobBookBtn] = useState(false)
  let [navVisible, setNavVisible] = useState(false)
  let [bgBlur, setBgBlur] = useState(false)
  let [modal, setModal] = useState(false)
  let [prevent, setPrevent] = useState(false)
  let [viewer, setViewer] = useState(false)
  let [targetImg, setImage] = useState(null)
  let [mailConfirm, setConfirm] = useState(false)
  let [mailVerdict, setMVerdict] = useState(null)
  let [preloader, setPreloader] = useState(true)
  

  const handleSize = ()=>{
    if(innerWidth <= 1000){
      setMobile(true)
  
      if(innerWidth > 425 && innerWidth <= 1000 ){
        tablet = true
      }
      if(innerWidth <= 425){
        phone = true
      }
    }else{setMobile(false)}
  }
  
  useEffect(handleSize, [mobile])
  
  useEffect(()=>{
    window.addEventListener('resize',handleSize)


    document.addEventListener('scroll', ()=>{
      
      let bodyScroll = document.querySelector('#home').getBoundingClientRect().top
      
        if(bodyScroll > -50){
          setNavVisible(false)
          setMobBookBtn(false)
          }
          if(bodyScroll < -30){
                  setNavVisible(true)
                  setMobBookBtn(true)
          }
      })
  return()=>{window.removeEventListener('resize', handleSize)}
  },[])
  
  

    
  
  return ( 
  <div onLoad={()=>{setPreloader(false)}}>
  <AnimatePresence>
    {preloader && <Preloader/>}
  </AnimatePresence>
  


  <AnimatePresence>
  {(navVisible || prevent) && <Navbar mobile={mobile} phone={phone} bgBlur={bgBlur} setBgBlur={setBgBlur} setModal={setModal} modal={modal} setPrevent={setPrevent}/>}
  </AnimatePresence>

  <Body mobile={mobile} mobBookBtn={mobBookBtn} bgBlur={bgBlur} setBgBlur={setBgBlur} modal={modal} setModal={setModal} viewer={viewer} setViewer={setViewer} setImage={setImage}/>

  <AnimatePresence>
  {modal && <Modal setBgBlur={setBgBlur} modal={modal} setModal={setModal} setConfirm={setConfirm} setMVerdict={setMVerdict}/>}
  </AnimatePresence>

  <AnimatePresence>
  {viewer && <Viewer setBgBlur={setBgBlur} viewer={viewer} setViewer={setViewer} targetImg={targetImg}/>}
  </AnimatePresence>
  
  <AnimatePresence>
    {mailConfirm && <MailAlert mailVerdict={mailVerdict} setConfirm={setConfirm}/>}
  </AnimatePresence>
  </div> );
}
 
export default App;