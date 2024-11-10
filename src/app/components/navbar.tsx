import Link from "next/link"
export default function Navbar(){
    return(
        <section>
        <div>
        <nav className='bg-black h-28 '>
        <p className='text-red-900  text-5xl font-thin italic font-serif '>Portfolio</p>
        <ul className='list-none  justify-center gap-9 flex  text-white  ' >
      <Link className='hover:bg-gray-500 hover:underline' href="/">Home</Link>
      <br />
      <Link className='hover:bg-gray-500 hover:underline'  href="#About">About</Link>
      <br />
      <Link className='hover:bg-gray-500 hover:underline '  href="#Contact">Contact</Link>
      
        </ul>
        </nav>
        </div>
        </section>
    )
}