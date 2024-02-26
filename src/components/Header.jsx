import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function Header() {
    return <>
        <header>
            <div className="logo">
                <h1>VoiseNVerse</h1>
            </div>
            <nav className="nav-items">
                <ul>
                    <li className='active'>Home</li>
                    <li>Podcast</li>
                    <li>Blogs</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
            <div className="search">
            <FontAwesomeIcon className="icon-cart" icon={faSearch} />
            </div>
        </header>
    </>
}

export default Header;