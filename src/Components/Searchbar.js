import {Button, TextField} from '@material-ui/core'
import axios from "axios";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {useEffect, useState} from 'react';
import {useRef} from 'react';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import {api_key} from '../config.json';

import './SearchBar.css'
import './Autocomplete.css'

const SearchBar = props => {    
    const [value, setValue] = useState('')
    const [id, setId] = useState(null)
    const [isSelected, setIsSelected] = useState(false)
    const inputEl = useRef(null)
    const [array, setArray] = useState([])
    const [offset, setOffset] = useState({
        top: 0, 
        left: 0
    })
    const icon = (
        <div className='IconContainer'>
        <LocationOnIcon fontSize = 'small' className= 'icon'></LocationOnIcon>
        <span>City</span>
        </div>
        ) 
    const Autocomplete = () => { 
        if(value.trim() == false) return
        return(<div style = {offset} className= 'AutocompleteContainer'>
            {array.map((ar) => {
            return(
                <div key={ar.city} onClick = {()=> { setValue(`${ar.city}, ${ar.country}`)
                console.log(value)
                setArray([])
                setIsSelected(true)
                setId(ar.id)
                 }} className='Autocomplete'> {ar.city}, {ar.country} </div>
        )})}
        </div>)
       
     }

        const thisFunc = (ev) => {
            // if(!ev.target.value) return 
            // console.log(ev.target.value)
            setValue(ev.target.value)    
            setIsSelected(false)
        }

    useEffect(()=> {
            // console.log(value.split(''))
        if(isSelected) return
        if(value.split('').length <= 1) return
        console.log()
            fetch("https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=" + value.split('')[0], {
	        "method": "GET",
	        "headers": {
		        "x-rapidapi-key": "a08e0e9bd5msh0295a35dd2bfe75p123defjsnb8ad5aeba384",
		        "x-rapidapi-host": "wft-geo-db.p.rapidapi.com"
	        }
    })
    .then(response => {
        return response.json()
    })
    .then ((response) => {
        const newArray = []
        if(!response || response.data == undefined) return
        response.data.forEach((single) => {
            if (single.city.includes(value)) return
            newArray.push(single)
        })
        setArray(newArray)
        console.log(array)
      })
        }, [value])
        
        
    useEffect(() => {
        const input = document.querySelector('.Input')
        const newOffset = {
            top: input.offsetTop + input.clientHeight ,
            left: input.offsetLeft
        }
        setOffset(newOffset)
    }, [array])

    window.addEventListener('resize', () => {
        const input = document.querySelector('.Input')
        // console.log(input)
        const newOffset = {
            top: input.offsetTop + input.clientHeight ,
            left: input.offsetLeft
        }
        setOffset(newOffset)
    })

    const btnHandler = () => {
        if(!isSelected) return 
        if(value.trim() == false) return
        console.log(value)
        fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=" + value + "%2Cuk&id=" + id + "&units=metric", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "a08e0e9bd5msh0295a35dd2bfe75p123defjsnb8ad5aeba384",
		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
	}
    })
    .then(response => {
        return response.json();
    })
    .then (response => {
        console.log(response)
        const Title = response.name;
        const Type = response.weather[0].description;
        const Temperature = response.main.temp
        const newResult = {
            Title, 
            Type,
            Temperature
        }
        // const newArr = {...props.prevArray, newResult}
        const newA = [...props.prevArray]
        newA.push(newResult)
        props.setArray(newA)
        

    })
    .catch(err => {
        console.error(err);
    });




    }
    // useEffect(() => {
    //     const arr = [{Title: 'New', Type: 'Pretty fucked mayn', Temp: '49C'}, {Title: 'New York', Type: 'Pretty fucked mayn', Temp: '49C'}]
    //     props.setArray(arr)
    // }, [])

    return (
        <>
            <TextField autoComplete='off'   ref = {inputEl} onChange = {thisFunc} value = {value}  className = 'Input' id="filled-basic"  label={icon} variant="filled" />
      { isSelected? (<Button
            className="confirm"
            variant="contained"
            color="primary"
            // startIcon={ArrowForwardIcon}
            onClick = {btnHandler}
        >
        See!
      </Button>) : null}
            {array.length > 0 ? Autocomplete() : null}
        </>
    )
}

export default SearchBar