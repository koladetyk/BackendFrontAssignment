import React, { useState, useEffect } from "react"
import AddressSelector from "./addressSelector";
import Header from './header';
import BlockDetails from "./blockDetails";
import WidgetsIcon from '@mui/icons-material/Widgets';

function Blocks() {


    // mock ethereum address ===> move and fetch from backend api
    // Specify the API endpoint for user data
    const apiUrl1 = 'http://localhost:3000/blocks/addresses';
    const apiUrl2 = 'http://localhost:3000/blocks/details/';
    

   //setters for address balance and gasused
   const [addresses,setAddress] = useState([]);

   const [block,setBlock] = useState(
        {
            balance: 0,
            gasUsed: 0,
        }
   );


    // useEffect hook ===>
    // fetch the data from the backend API
    // set (useState) the Data to state to rerender 
   useEffect(() => {
        fetch(apiUrl1)
        .then(response => response.json())
        .then(data => setAddress(data))
    },[])

     // Function to fetch block details
    const fetchBlock = (add) => {
        console.log("Fetching block for address:", add);
        fetch(`${apiUrl2}${add}`)
        .then(response => response.json())
        .then(data => setBlock(data))
    };

   //handling when user selects
   //const handleOnChange = (event) => {
    const handleOnChange = (foundAddress) => {
        
        console.log("Selected address:", foundAddress); 
        fetchBlock(foundAddress);

   };

    return(
       <>
            <Header 
                title="Blocks" 
                headerSize="h5" 
                icon={WidgetsIcon}
                />
            <AddressSelector 
                InputLabel="Ethereum Block" 
                LabelId="ethereum-block-select-label" 
                handleAction={ handleOnChange }
                addresses={addresses}
                />
           
            <div class="container">
                <BlockDetails {...block} />
            </div>
       </>
    )

}

export default Blocks;