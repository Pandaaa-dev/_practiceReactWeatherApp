import {Paper} from '@material-ui/core'
import { useEffect, useState } from 'react'

import './Result.css'


const Result = props => {
    const [array, setArray] = useState([])
    const resultComponent = () => {
        if(array.length == 0) return
       return ( <>
        <div className = 'resultContainer'>
                {array.map( (res, i) => {
                    console.log('THIS IS ME')    
                return(
                    <Paper elevation = {3} className = 'Result' key= {i}>
                    <h1 className='ResultTitle'> {res.Title}</h1>
                    <p className= 'Type'>{res.Type}</p> 
                    <p className= 'Temperature'> {res.Temperature}</p> 
                    </Paper> )
                })}
         </div>
        </>
    )
    } 
    useEffect(() => {
    console.log(props.result)
    setArray(props.result)
    }, [props.result])

    const ifNoResult = ( <div className = 'noResultContainer' >
        <h1> Sorry!You still havent asked
        for anything yet! </h1> 
        </div>
    )
    return ( <> 
    { array.length != 0 ? resultComponent() : ifNoResult } 
    </>
    )
}

export default Result