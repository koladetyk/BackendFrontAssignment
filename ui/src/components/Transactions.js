//import statements
//import React, {useState} from 'react';
//import Header from "./Header";
import React, { useState, useEffect } from 'react';
import Header from './header';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import WidgetsIcon from '@mui/icons-material/Widgets';

const Transactions = () => {

    const [transactions, setTransactions] = useState([]);

    // Specify the API endpoint for user data
    const apiUrl1 = 'http://localhost:3001/transactions/history';
    //const apiUrl2 = 'http://localhost:3000/blocks/details/';

    useEffect(() => {
        // Fetch the transaction history
        fetch(apiUrl1)
            .then(response => response.json())
            .then(data => {
                setTransactions(data); // Update state
            })
            .catch(error => console.error('Error fetching transaction history:', error));
    }, []); 

    
    return (
        <div>
            {/* Header component */} 
            <Header 
                title=" Transactions" 
                headerSize="h5" 
                icon={WidgetsIcon}
                />
            
            {/* mui styling */} 
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 900 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                                <TableCell align="center">From</TableCell>
                                <TableCell align="center">To</TableCell>
                                <TableCell align="center">Amount</TableCell>
                                <TableCell align="center">Status</TableCell>
                                <TableCell align="center">Gas Used</TableCell>
                                <TableCell align="center">Receipt Hash</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/* showing backend data with map function */} 
                        {transactions.map((transaction, index) => (
                            <TableRow key={index}>
                                <TableCell align="center">{transaction.source}</TableCell>
                                <TableCell align="center">{transaction.destination}</TableCell>
                                <TableCell align="center">{transaction.amount}</TableCell>
                                <TableCell align="center">{transaction.status}</TableCell>
                                <TableCell align="center">{transaction.gasUsed}</TableCell>
                                <TableCell align="center">{transaction.receiptHash}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>

                 </Table>
            </TableContainer>
        </div>
    );
};

export default Transactions;