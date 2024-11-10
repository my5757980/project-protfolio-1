import Image from "next/image";
import pic from "../app/d2433c84342b9f1621d9f42fe70b3385.jpg"
import About from "./components/About/page";
import Contact from "./components/Contact/page";





export default function Home(){
  return(
    <section  >
    <div className='bg-black h-screen p-32  '>
     {/* <h1>Welcome to home page</h1> */}
    
     
     
     <p className='text-white font-bold text-5xl '>Hey i'm</p> <p className="text-red-950 text-4xl">Muhammad Yaseen</p> 
     <Image className='w-[350px] h-80px float-right' src={pic}  alt="Responsive image" ></Image> 
     <h1 className='text-white text-2xl'>Fronted Developer</h1>
     
     <br />
     <h1 className='text-white'>Hey i'm Fronted Developer from pakistan dedicated to delivering beautiful, functional and user-friendly websites that exceed your expectations.</h1>
     
      

    </div>
    

   <About/>


   <Contact />


   
  

   


   

   
   
    
    </section>
  )
}