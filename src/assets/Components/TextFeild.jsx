import React from 'react'
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';



const TextFeild = (props) => {
    return (
        <>
            <label>{props.label}</label>
            <TextField fullWidth margin="dense" size="small" id="outlined-basic" placeholder={props.PlaceHolder} variant="outlined" />
        </>
    )
}

const PasswordFeild = (props) => {

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


    return (
        <>
            <label>{props.label}</label>
            <FormControl variant="outlined" fullWidth margin="dense">
                <OutlinedInput
                    size="small"
                    placeholder={props.PlaceHolder}
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>
        </>
    )
}

const SelectFeild = (props) => {

    // let ii = ""
    // for (let key of props.val) {
    //     // console.log(key)
    //     ii = `<MenuItem value="${key}">${key} employees</MenuItem>`
    // }
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <>
            <label>{props.label}</label>
            <FormControl fullWidth variant="outlined" margin="dense">
                <Select
                    placeholder="-----"
                    size="small"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    renderValue={age !== "" ? undefined : () => "-- Select --"}
                    value={age}
                    displayEmpty
                    onChange={handleChange}
                >
                    {props.val.map(title => {
                        return <MenuItem value={title}>{title}</MenuItem>
                    })}

                    {/* <MenuItem value="">-- Select --</MenuItem>
                    <MenuItem value=""> employees</MenuItem> */}
                </Select>
            </FormControl>
        </>
    )
}

export {
    TextFeild,
    PasswordFeild,
    SelectFeild
}
