import arrowDownImage from "/src/assets/images/icon-arrow-down.svg";
import Hamburger from "../assets/images/icon-hamburger.svg";
import Nav from "./nav";
const Header = () => {
  return (
    <header className="Header">
      <Nav />
      <img src={Hamburger} alt="" className="ham"></img>
      <h1>we are creative</h1>
      <img src={arrowDownImage} alt="" />
    </header>
  );
};
export default Header;
