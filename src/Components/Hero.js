import Intro from './Intro'
import './Hero.css'


const Hero = props => {    

    return (
        <>
            <div className='Hero'>
                <div className='Backdrop'>
                <Intro />       
                {props.children}    
                </div>
            </div>
        </>
    )
}


export default Hero