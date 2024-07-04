import React, { useState } from "react"
import { Select, MenuItem, InputLabel, FormControl } from '@mui/material';

const AddressSelector = (props) => {

    const [selectedAddress, setSelectedAddress] = useState(null);

    const handleOnChange = (e) => {
       
        //props.onChange(e.target.value);
        ///changed it from event to value cause of errors
        const selectedValue = e.target.value; 
        console.log(selectedValue); 
        props.handleAction(selectedValue); 
    }

    console.log(props.addresses)
   
    return <>
        <FormControl fullWidth>
            <InputLabel id={props.LabelId}>{props.InputLabel}</InputLabel>
            <Select
                labelId={props.LabelId}
                value={selectedAddress}
                label={props.InputLabel}
                onChange={handleOnChange}
            >
                {props.addresses?.map((address) => (
                    <MenuItem key={address} value={address}>{address}</MenuItem>
                ))}
            </Select>
        </FormControl>
    </>
}

export default AddressSelector;