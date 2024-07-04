


import Blocks from './components/blocks'
import {
  BrowserRouter,
  Routes,
  Route,
  Switch
} from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import theme from './themes/theme'; 
import CssBaseline from '@mui/material/CssBaseline';
import Transactions from "./components/Transactions";
import Transfer from "./components/Transfer";
import Navigation from "./components/Navigation";

function App() {


  return (
    <ThemeProvider theme={theme}>
          <CssBaseline /> 
                  <BrowserRouter>
                   <Navigation /> 
                      <Switch>
                        <Route path="/" exact component={Blocks} />
                        <Route path="/transactions" component={Transactions} />
                        <Route path="/transfer" component={Transfer} />
                      </Switch>
                  </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;
