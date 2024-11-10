import Link from "next/link"
import { AiFillGithub } from "react-icons/ai"
import { AiFillLinkedin } from "react-icons/ai"




export default function Contact (){
    return(
        <section id="Contact">
        <div className="bg-black h-screen">
         {/* <h1>welcome to contact page</h1> */}
         <h1 className="text-white ml-[500px] text-7xl pb-12" >Contact</h1>
          <div className="ml-[500px]">
         <p className="text-white">FirstName</p>
         <input type="text" name="firstName"  maxLength={30} size={20}></input>
         <br />
         <br />
         <p className="text-white">LastName</p>
         <input type="text" name="lastName" maxLength={30} size={20}></input>
         <br />
         <br />
         <p className="text-white">E-mail</p>
         <input type="text" name="e-mail" maxLength={30} size={20}></input>
         <br />
         <br />
         <p className="text-white">Message</p>
         <input type="text" name="message "  maxLength={5000} size={40}  ></input>
         <br />
         <br />

         <button className="w-32 h-20 rounded-lg bg-slate-500">
          <a href="mailto:my5757980@gmail.com"> Send Message</a>
            </button>


    

           </div>
         

           
         <div className="flex justify-center ">
          <Link href="https://www.linkedin.com/in/muhammad-yaseen-a053272bb/">
            <p className="text-white text-4xl mr-[500px]"> <AiFillLinkedin/>Linkedin</p>
            </Link>

            <Link href="https://github.com/my5757980">
            <p className="text-white text-4xl "><AiFillGithub/>Github</p>
              </Link>




            
         
         </div> 
     

  

         
        </div>
        </section>
    )
}



