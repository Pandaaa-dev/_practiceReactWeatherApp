import './Hero.css'
import { Button } from '@material-ui/core';


const Hero = props => {    

    return (
        <>
            <div className='Hero'>
                <div className='Backdrop'>
                {props.children}    
                </div>
            </div>
        </>
    )
}


export default Hero