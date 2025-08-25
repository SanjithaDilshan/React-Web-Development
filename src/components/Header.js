import './header.css';
import Logo from "../assets/—Pngtree—school logo design template vector_9170120.png";


export const Header = () => {
  return (
    <header>
      <img className='logo' src={Logo} alt="" />
      <a href="/">Home</a>
    </header>
  )
}

export default Header

