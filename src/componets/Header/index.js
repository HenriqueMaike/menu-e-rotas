import { Link } from "react-router-dom";
import './style.css'

function HeaderApp(){
    return(
        <header>
            <h2>Header</h2>
        <div className="menu">
            <Link to="/">HOME</Link>
            <Link to="/sobre">SOBRE</Link>
            <Link to="/contato">CONTATO</Link>
        </div>

        </header>
    );
}

export default HeaderApp;