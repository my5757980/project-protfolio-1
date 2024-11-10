import Image from "next/image"
import pic from "../About/3D_Illustration_Of_A_Girl_Sitting_In_Front_Of_An_Online_Task_Board_That_Has_Been_Completed_transparent_emp_800.webp"
 export default function  About(){
    
    
    return(
        <section id="About">
        <div className="bg-black h-screen ">
            {/* <h1>Welcome to about page</h1> */}
            
            <Image className="w-96 center ml-96 " src={pic} alt="Responsive image"></Image>
            <p className="text-3xl font-bold text-white text-center" >About Me</p>
            <h1 className="text-white text-center">Hello! My name is Muhammad Yaseen and i am from karachi, pakistan professional Developer Engineering Technical skills HTML CSS JAVASCRIPT TYPESCRIPT NEXTJS TAILWIND CSS Education Intermediate Engineering and 3 years CIT diploma  . </h1>


            
         
     
        </div>
        </section>
        
        
    )
}
