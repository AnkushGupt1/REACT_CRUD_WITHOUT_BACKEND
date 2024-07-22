

import './headers.css'; // Assuming you have a corresponding CSS file for styling
import { useNavigate } from 'react-router-dom';
const Header = () => {

    const navigate=useNavigate();

  return (
    <header className="header">
      <div className="logo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgZr5x5RSiXTYqm1lboxXfYgCPgYsbrqodWg&s" alt="Logo" />
        <span>My Website</span>
      </div>
      <nav className="navbar">
        <ul>
          <li><a onClick={()=>
          navigate("/home")}>HOME</a></li>
                    <li><a onClick={()=>
          navigate("/about")}>ABOUT</a></li>
                    <li><a onClick={()=>
          navigate("/services")}>SERVICE</a></li>
                    <li><a onClick={()=>
          navigate("/contact")}>CONTACT</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
