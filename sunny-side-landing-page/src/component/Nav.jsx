import Logo from '/src/assets/images/logo.svg';
const Nav = ()=>{
    return(
        <nav className='nav'>
        <img src={Logo} alt="Sunnyside logo" />

        <ul className='HeaderList'>
          <li><a href="#" className='link1'>About</a></li>
          <li><a href="#" className='link1'>Services</a></li>
          <li><a href="#" className='link1'>Projects</a></li>
          <li><a href="" className='link2'>Contacts</a></li>
        </ul>
      </nav>
    );
} 
export default Nav