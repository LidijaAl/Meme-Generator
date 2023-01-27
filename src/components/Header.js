import logo from "../images/trollface.png"


export default function Header() {
    return(
        <header className="header">
            <img src={logo} className="header--image" alt="face" />
            <h2 className="header--title">MemeGenerator</h2>
        </header>
    )
}