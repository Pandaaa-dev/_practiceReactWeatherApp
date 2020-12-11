import {Paper} from '@material-ui/core'

import './Result.css'


const Result = props => {
    const resultComponent = ( <>
        <div className = 'resultContainer'>
                {props.result.map( (res, i) => {
                return(
                    <Paper elevation = {3} className = 'Result' key= {i}>
                    <h1 className='ResultTitle'> {res.Title}</h1>
                    <p className= 'Type'>{res.Type}</p> 
                    <p className= 'Temperature'> {res.Temp}</p> 
                    </Paper> )
                })}
         </div>
        </>
    )

    const ifNoResult = ( <div className = 'noResultContainer' >
        <h1> Sorry!You still havent asked
        for anything yet! </h1> 
        </div>
    )
    return ( <> 
    { props.result.length > 0 ? resultComponent : ifNoResult } 
    </>
    )
}

export default Result