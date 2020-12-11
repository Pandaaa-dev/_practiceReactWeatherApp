import {TextField, FormControl, InputLabel, OutlinedInput, InputAdornment} from '@material-ui/core'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import './SearchBar.css'
const SearchBar = props => {    

    const icon = (
        <div className='IconContainer'>
        <LocationOnIcon fontSize = 'small' className= 'icon'></LocationOnIcon>
        <span>City</span>
        </div>
    )

    return (
        <>
            <TextField  className = 'Input' id="filled-basic"  label={icon} variant="filled" />
        </>
    )
}

export default SearchBar