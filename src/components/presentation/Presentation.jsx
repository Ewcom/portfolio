import React, { useEffect, useRef } from 'react'
import { init } from 'ityped'
import './presentation.scss'
import lottie from 'lottie-web'
import animation from '../../anim/data.json'
import { KeyboardArrowDown } from '@material-ui/icons';


export const Presentation = () => {

    const animationRef = useRef()

    useEffect(() => {
        lottie.loadAnimation({

            container: animationRef.current,
            animationData: animation,
        })
    }, []);






    const itypedRef = useRef()

    useEffect(() => {
        init(itypedRef.current, {
            showCursor: true,
            backDelay: 900,
            backSpeed: 60,
            strings: ["Developer", "Designer", "Problem Solver","Critical Thinker","Autodidact"],
        });
    }, []);


    return (
        <div className="presentation" id="presentation">
            <div className="wrapper">
                <div className="presentation-block1">
                    <div className="presentation-text">
                        <h2>Hi, i'm</h2>
                        <h1>Emiliano Villalpando</h1>
                        <span ref={itypedRef}></span>
                        <br />
                        <br />
                        <h3>full stack freelance developer <br /> ready to transform your idea into a beatiful site</h3>
                        <br />

                        <a href="#portfolio">PORTFOLIO</a>
                        <a className='cv-button' href="https://drive.google.com/file/d/14HZrmIujDEp5cHJxJEZC6ZT5sArMEyni/view?usp=sharing">CURRICULUM</a>
                        <br />
                        <br />
                    </div>
                </div>
                <div className="presentation-block2">
                    <div className="animation-wrapper">

                        <span ref={animationRef}></span>
                    </div>

                </div>
                <a href="#portfolio" className="arrowContainer">
                    <KeyboardArrowDown className="arrow" />
                </a>

            </div>



        </div>
    )
}
