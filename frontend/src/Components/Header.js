import {Link} from 'react-router-dom';
import '../Css/Header.css';
function Header(){
return(
    <div className="Header1">
    <Link to = "/" className="Header3">Home</Link>
    <Link to = "/About" className="Header3">About</Link>
    <Link to = "/Menu" className="Header3">Menu</Link>
    








    </div>
    );
}export default Header;