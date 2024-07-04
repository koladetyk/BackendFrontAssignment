//import statements
import React, {useState, useEffect} from 'react';
//import Header from "./Header";
import Header from './header';
import Receipt from './Receipt';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import WidgetsIcon from '@mui/icons-material/Widgets';

const Transfer = (props) => {

    // mock ethereum address ===> move and fetch from backend api
    // Specify the API endpoint for user data
    const apiUrl1 = 'http://localhost:3000/blocks/addresses';
    //const apiUrl2 = 'http://localhost:3000/blocks/details/';
    const apiUrl3 = 'http://localhost:3001/transactions/send';

    //setters for address, amount and reciept 
    const [addresses, setAddresses] = useState([]);
    const [form, setForm] = useState({ source: '', destination: '', amount: '' });
    const [receipt,setShowReceipt] = useState(false);
    const [sampleReceipt,setReceipt] = useState(
        {
            transactionHash : "",
            blockHash : "",
            blockNumber : "",
            from : "",
            to : "",
            amount : "",
            gasUsed: "",
        }
    );

    // useEffect hook ===>
    // fetch the data from the backend API
    // set (useState) the Data to state to rerender 
    useEffect(() => {
        fetch(apiUrl1)
        .then(response => response.json())
        .then(data => setAddresses(data))
    },[])

    //handling when user input
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setForm(prevForm => ({ ...prevForm, [name]: value }));
    };
    

    //handling when user submits
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(apiUrl3, form);
            //setShowReceipt(true);
            
            if (response.data) {
                setReceipt({
                    transactionHash: response.data.receiptHash,
                    blockHash: "0x8ab85b05ee9246f26ba192436ccb72ea86388bb5b44e1d7bf15db13213b0c26e",
                    blockNumber: 45,
                    from: response.data.source,
                    to: response.data.destination,
                    amount: response.data.amount,
                    gasUsed: response.data.gasUsed,
                });
                setShowReceipt(true); // Only show the receipt if we got data back
            }
        } catch (error) {
            console.error('Error submitting transfer', error);
            setShowReceipt(false);
        }
    };
    

     //handling when user cancels
     const handleCancel = () => {

        // pass into setters and set back to default
        setAddresses([]);
        
        setReceipt({
            transactionHash: "",
            blockHash: "",
            blockNumber: "",
            from: "",
            to: "",
            amount: "",
            gasUsed: "",
        });

        //hide reciept 
        setShowReceipt(false);

     };

    return (
        <div>
            {/* Header component */} 
            <Header 
                title=" Transfers" 
                headerSize="h5" 
                icon={WidgetsIcon}
                />
            <form onSubmit={handleSubmit}>
                <label>
                    <label>
                        <br>
                        </br>
                        {/* mui stylng */} 
                        <Box sx={{ minWidth: 120 }}>
                            {/* Source address dropdown */}
                            <FormControl fullWidth>
                                <InputLabel id="source-address-label">From</InputLabel>
                                <Select
                                    labelId="source-address-label"
                                    id="source-address-select"
                                    name="source"
                                    value={form.source}
                                    label="From"
                                    onChange={handleOnChange}
                                >
                                    {addresses.map((address) => (
                                        <MenuItem key={address} value={address}>{address}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Box>
                    </label>
                    
                    <label>
                        <br>
                        </br>
                        {/* mui stylng */} 
                        <Box sx={{ minWidth: 120 }}>
                            {/* Destination address dropdown */}
                            <FormControl fullWidth>
                                <InputLabel id="destination-address-label">To</InputLabel>
                                <Select
                                labelId="destination-address-label"
                                id="destination-address-select"
                                name="destination"
                                value={form.destination}
                                label="To"
                                onChange={handleOnChange}
                                >
                                {addresses.map((address) => (
                                    <MenuItem key={address} value={address}>{address}</MenuItem>
                                ))}
                                </Select>
                            </FormControl>
                        </Box>
                    </label>
                    <br>
                    </br>
                    <label>
                        {/* Amount input */}
                        <TextField 
                            name="amount" 
                            onChange={handleOnChange} 
                            value={form.amount} // Bind to the form state
                            label="Amount" 
                            variant="outlined"
                        />

                        <br>
                        </br>
                    </label>
                    <br>
                    </br>
                    {/* mui stylng */} 
                    <Button variant="contained" color="success" size="large" type="submit">
                        Submit
                    </Button>
                    {/* mui stylng */} 
                    <Button variant="contained" color="error" size="large" onClick={handleCancel}>
                         Cancel
                    </Button>
                </label>
            </form>

            {/* checking reciept and using sampleReceipt to display props  */} 
            {receipt && (
                <Receipt {...sampleReceipt} />
            )}
        </div>
    );
};

export default Transfer;