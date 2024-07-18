import { navLinks } from "../constants"
import { logo,video,name ,close,menu} from "@/assets"
import { Link } from "react-router-dom"
import { styles } from "@/style"
import { useState } from "react"


const Nav =()=> {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)
  return (
    <nav className={`${styles.paddingX} w-full flex items-center  py-2 fixed top-0 bg-transparent  bg-white border-black bg-pattern z-20 `}>
    <div className="w-full flex items-center justify-between max-w-[1600px] mx-auto ">
      <Link
        to="/"
        className="flex items-center gap-2"
        onClick={() => {
          setActive('')
          window.scrollTo(0, 0)
        }}
      >
        <img src={logo} alt="logo" className=" w-10 h-10 sm:w-14 sm:h-14 object-contain rounded-sm " />
        <img src={name} alt="logo" className=" w-40 sm:w-52 ml-6 object-contain  rounded-sm " />
        <span className="bg-black px-4"></span>
        
      </Link>

      <ul className="list-none  font-bold hidden sm:flex flex-row justify-center items-center gap-10">
        {navLinks.map((link) => (
          <li
            key={link.id}
            className={`${active === link.title ? ' text-blue-950' : 'text-black'}
             hover:text-black text-[18px] font-medium cursor-pointer`}
            onClick={() => setActive(link.title)}
          >
            <a href={`${link.id}`} className="">{link.title}</a>
          </li>
        ))}
        <Link to='/login'>
        <button className={`${styles.buttonred}font-semibold text-lg px-4 py-3`}>Log IN</button>
        </Link>
        <li></li>
      </ul>

      <div
        className="sm:hidden flex flex-1 
      justify-end items-center"
      >
        <img src={toggle ? close : menu} alt="menu" className="w-[28px] h-[28px] object-contain cursor-pointer" onClick={() => setToggle(!toggle)} />
        <div
          className={`${!toggle ? 'hidden' : ' flex'} p-6 black-gradient absolute
        top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
        >
          <ul className="list-none flex  justify-end items-start flex-col gap-4">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${active === link.title ? ' bg-black' : 'text-blue-950'}
                  font-poppins font-medium cursor-pointer text-[16px]`}
                onClick={() => {
                  setToggle(!toggle)
                  setActive(link.title)
                }}
              >
                <Link href={`#${link.id}`}>{link.title}</Link>
              </li>
            ))}
          
          </ul>
        </div>
      </div>
    </div>
  </nav>
  )
}

export  default Nav