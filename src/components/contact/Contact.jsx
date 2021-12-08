import {useRef, useEffect} from 'react'
import './contact.scss'
import animation from '../../anim/contact.json'
import lottie from 'lottie-web'


export const Contact = () => {


    const animationRef = useRef()

    useEffect(() => {
        lottie.loadAnimation({

            container: animationRef.current,
            animationData: animation,
            rendererSettings: {
                filterSize: {
                    width: '600%',
                    height: '600%',
                    x: '-200%',
                    y: '-200%',
                },
            },

        })
    }, []);


    return (
        <div className="contact" id="contact">
            <div className="wrapper">

                <div className="form">
                    <h1>Contact Me!</h1>
                    <form action="">
                        <input type="text" name="" id="" placeholder="Email" />
                        <textarea placeholder="Message"></textarea>
                        <input type="submit" value="SEND" />

                    </form>
                </div>

                <div className="animation">

                    <span ref={animationRef}></span>

                </div>

                <div className="footer">

                    <div className="leftContainer">

                    © 2021 Emiliano Villalpando


                    </div>
                    <div className="rightContainer"></div>


                </div>


            </div>
        </div>
    )
}
