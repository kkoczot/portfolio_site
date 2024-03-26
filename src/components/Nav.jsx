import { BiHomeAlt, BiUser } from 'react-icons/bi'
import { BsClipboardData, BsBriefcase, BsChatSquare } from 'react-icons/bs'
import { Link } from 'react-scroll';

const Nav = () => {
  return (
    <nav className="fixed flex justify-center bottom-2 lg:bottom-8 max-sm:w-[100vw] overflow-hidden z-50 left-0 right-0">
      <div className="w-full max-w-[460px] max-sm:w-[90%] bg-black/20 h-[96px] backdrop-blur-2xl rounded-full px-5 flex justify-between gap-8 max-sm:gap-5 max-xs:gap-2 items-center text-2xl text-white/50">
        <Link
          to="home"
          activeClass="active"
          smooth
          spy
          offset={-100}
          className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
          <BiHomeAlt />
        </Link>
        <Link
          to="about"
          activeClass="active"
          smooth
          spy
          offset={-100}
          className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
          <BiUser />
        </Link>
        <Link
          to="services"
          activeClass="active"
          smooth
          spy
          offset={-100}
          className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
          <BsClipboardData />
        </Link>
        <Link
          to="work"
          activeClass="active"
          smooth
          spy
          offset={-100}
          className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
          <BsBriefcase />
        </Link>
        <Link
          to="contact"
          activeClass="active"
          smooth
          spy
          offset={-100}
          className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
          <BsChatSquare />
        </Link>
      </div>
    </nav>
  );
};

export default Nav;