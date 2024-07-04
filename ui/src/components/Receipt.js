//import statements
import React, {Component} from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

class Receipt extends Component {
    render() {
        //props
        const { transactionHash, blockHash, blockNumber,
             from, to , amount, gasUsed } 
             = this.props;

             //handling case of incorrect input
             if(to === "" || from === "" || amount === "") {
                //error message returned
                return <div 
                    style={{ padding: 16, backgroundColor: '#FF0000' }}
                    >Please enter all details!
                </div>;
            // handling case for correct input
            } else {
                //mui to style table
                return <TableContainer component={Paper}>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Transaction Hash</TableCell>
                      <TableCell>Block Hash</TableCell>
                      <TableCell>Block Number</TableCell>
                      <TableCell>From</TableCell>
                      <TableCell>To</TableCell>
                      <TableCell>Amount</TableCell>
                      <TableCell>Gas Used</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                   {/* showing values */} 
                    <TableRow>
                      <TableCell>{transactionHash}</TableCell>
                      <TableCell>{blockHash}</TableCell>
                      <TableCell>{blockNumber}</TableCell>
                      <TableCell>{from}</TableCell>
                      <TableCell>{to}</TableCell>
                      <TableCell>{amount}</TableCell>
                      <TableCell>{gasUsed}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            }
        
        }
}

export default Receipt;