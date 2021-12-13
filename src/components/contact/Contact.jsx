import { useRef, useEffect } from 'react'
import './contact.scss'
import animation from '../../anim/contact.json'
import lottie from 'lottie-web'
import emailjs from 'emailjs-com'


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

    function handleEmail(e) {

        e.preventDefault();
        emailjs.sendForm('service_uieomhb', 'template_3kp0rx3', e.target, process.env.REACT_APP_EMAILJS_USER_KEY)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

            e.target.reset()
    }


    return (
        <div className="contact" id="contact">
            <div className="wrapper">

                <div className="form">
                    <h1>Contact Me!</h1>
                    <form onSubmit={(e)=>{handleEmail(e)}}>
                        <input type="text" name="email" id="" placeholder="Email" />
                        <textarea name='message' placeholder="Message"></textarea>
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
