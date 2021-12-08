import "./menu.scss"

export const Menu = (props) => {
    

    function menuClickHandler(){

        props.setIsMenuOpen(false)
    }

    return (
        <div className={"menu "+(props.isMenuOpen && "active")} >
            <div className="wrapper">
                    
                <ul>

                    <a onClick={() =>{menuClickHandler()}} href="#presentation"><li>Presentation</li></a>
                    <a onClick={() =>{menuClickHandler()}} href="#portfolio"><li>Portfolio</li></a>
                    <a onClick={() =>{menuClickHandler()}} href="#contact"><li>Contact Me</li></a>
                </ul>

            </div>
        </div>
    )
}
