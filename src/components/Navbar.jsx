import { styles } from '../styles';
import { logo } from '../assets';
import { Link } from 'react-scroll';
const Navbar = () => {
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to="home" smooth className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] text-bold cursor-pointer flex">
            Kacper &nbsp; <span className="sm:block hidden">Koczot</span>
          </p>
        </Link>
      </div>
    </nav >
  )
}

export default Navbar;