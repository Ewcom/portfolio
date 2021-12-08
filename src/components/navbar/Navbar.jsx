import './navbar.scss'

export const Navbar = (props) => {
    return (
      <div className={"navbar " + (props.isMenuOpen && "active")}>

        <span className="name"> </span>

        <div className="hamburger" onClick={()=>props.setIsMenuOpen(!props.isMenuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
            </div>

      </div>
    )
}
