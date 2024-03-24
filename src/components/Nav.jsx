import { BiHomeAlt, BiUser } from 'react-icons/bi'
import { BsClipboardData, BsBriefcase, BsChatSquare } from 'react-icons/bs'
import { Link } from 'react-scroll';


const Nav = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 overflow-hidden z-50 left-[50%] translate-x-[-50%]">
      <div className="container mx-auto">
        <div className="w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between gap-10 items-center text-2xl text-white/50">
          <Link to="home" activeClass="active" smooth spy offset={-100} className="cursor-pointer max-xs:w-[40px] max-xs:h-[40px] w-[60px] h-[60px] flex items-center justify-center">
            <BiHomeAlt />
          </Link>
          <Link to="about" activeClass="active" smooth spy offset={-100} className="cursor-pointer max-xs:w-[40px] max-xs:h-[40px] w-[60px] h-[60px] flex items-center justify-center">
            <BiUser />
          </Link>
          <Link to="services" activeClass="active" smooth spy offset={-100} className="cursor-pointer max-xs:w-[40px] max-xs:h-[40px] w-[60px] h-[60px] flex items-center justify-center">
            <BsClipboardData />
          </Link>
          <Link to="work" activeClass="active" smooth spy offset={-100} className="cursor-pointer max-xs:w-[40px] max-xs:h-[40px] w-[60px] h-[60px] flex items-center justify-center">
            <BsBriefcase />
          </Link>
          <Link to="contact" activeClass="active" smooth spy offset={-100} className="cursor-pointer max-xs:w-[40px] max-xs:h-[40px] w-[60px] h-[60px] flex items-center justify-center">
            <BsChatSquare />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;