import logo from './logo.svg';
import './App.css';

// components
import Header from './components/header/Header';
import Home from './components/home/Home'
import { Box } from '@mui/system';

import DataProvider from './context/DataProvider';

function App() {
  return (
   <DataProvider>
    <Header></Header>

    <Box style={{marginTop: "54px"}}>
    <Home></Home>

    </Box>
   </DataProvider>
  );
}

export default App;
