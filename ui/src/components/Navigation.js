//import statements
import React from 'react';
import { Tabs, Tab } from '@mui/material';
import { useLocation, useHistory } from 'react-router-dom';

const Navigation = () => {
    //history instance for naviagtion and location for URL
  const history = useHistory();
  const location = useLocation();

  //pushing value into history after routechange
  const handleRouteChange = (event, newValue) => {
    history.push(newValue);
  };

  //Tab labels
  return (
    <Tabs value={location.pathname} onChange={handleRouteChange}>
      <Tab label="Blocks" value="/" />
      <Tab label="Transactions" value="/transactions" />
      <Tab label="Transfer" value="/transfer" />
    </Tabs>
  );
};

export default Navigation;