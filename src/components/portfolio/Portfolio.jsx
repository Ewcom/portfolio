
import { useRef, useEffect } from 'react'
import './portfolio.scss'
import eefitIMG from './photos/eefit.png'
import infitnessIMG from './photos/infitess.png'
import lottie from 'lottie-web'
import animation from '../../anim/portfolio.json'

export const Portfolio = () => {


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
        <div className="portfolio" id="portfolio">
            <div className="wrapper">
                <div className="portfolio-animation">
                    <div className="animation-wrapper">

                        <span ref={animationRef}></span>
                    </div>
                </div>
                <div className="portfolio-section">
                    <h1>PORTFOLIO</h1>

                    <div className="portfolio-main">

                        <div className="portfolio-item">
                            <a href="https://villalfit.herokuapp.com/"> <img src={eefitIMG} alt="" /></a>

                            <div className="item-desc">
                                eefit (Web App)

                                <hr />

                                <div className="tec">

                                    <p> HTML5 </p>
                                    <p> SASS </p>
                                    <p> Javascript</p>
                                    <p> React</p>
                                    <p> JWT</p>
                                    <p> APIs</p>
                                    <p> Node.js</p>
                                    <p> Express</p>
                                    <p> MongoDB</p>

                                </div>


                            </div>

                        </div>

                        <div className="portfolio-item">
                            <a href="https://infitness2021.herokuapp.com/"> <img src={infitnessIMG} alt="" /></a>

                            <div className="item-desc">
                                Infitness (Landing Page)

                                <hr />

                                <div className="tec">

                                    <p> HTML5 </p>
                                    <p> CSS3 </p>
                                    <p> Javascript ES6 </p>
                                    <p> Responsive Design</p>

                                </div>
                            </div>



                        </div>






                        <div className="stats-container">

                        </div>

                    </div>


                </div>
            </div>

        </div>
    )
}
