import {TextField} from '@material-ui/core'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { useRef , useEffect, useState} from 'react';
// import Autocomplete from './Autocomplete';
import './SearchBar.css'
import './Autocomplete.css'
const SearchBar = props => {    
    // const textRef = useRef()
    const autoRef = useRef()
    const [Offset, setOffset] = useState({
        top: 0, 
        left: 0
    })
    const [array, setArray] = useState([])
    
    const icon = (
        <div className='IconContainer'>
        <LocationOnIcon fontSize = 'small' className= 'icon'></LocationOnIcon>
        <span>City</span>
        </div>
    )


    
    const Autocomplete = (
        <div ref = {autoRef }
          className= 'AutocompleteContainer'
          style = {{...Offset}}
          >
            {array.map((a,i) => {
              return ( <div key={i} className = 'Autocomplete'> {a} </div>)
            })}
        </div>
    )       
    
    let thisFunction = (dv) =>{ 
       array.push(dv.target.value)
       console.log(dv.target.value)
        // console.log(document.getElementsByClassName('Input')[0].offsetLeft)
       array.push(dv.target.value)
       setArray([...array])
        console.log(document.getElementsByClassName('Input').value)
       setOffset({
           top: document.getElementsByClassName('Input')[0].offsetTop + document.getElementsByClassName('Input')[0].clientHeight ,
           left: document.getElementsByClassName('Input')[0].offsetLeft 
       })
       console.log(window.screen.availWidth)
    }

    useEffect(() => {
        console.log('OffsetLeft Changed!')
        const newOffset = {...Offset}
        setOffset({
            top: newOffset.top, 
            left: document.getElementsByClassName('Input')[0].offsetLeft
        })
    }, [ document.getElementsByClassName('Input')[0]])


    
    return (
        <>
            <TextField className = 'Input' onChange = {thisFunction} id="filled-basic"  label={icon} variant="filled" />
            {array.length > 0? (Autocomplete): null}
        </>
    )
}

export default SearchBar