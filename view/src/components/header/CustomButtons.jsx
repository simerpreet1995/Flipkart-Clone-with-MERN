import { useContext, useState } from "react";

import { Box, Button,Typography,styled } from "@mui/material"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { DataContext } from "../../context/DataProvider";

// componnets
import LoginDialog from "../login/LoginDialog";
import Profile from "./Profile";

const Wrapper = styled(Box)`
    display: flex;
    justify-content: center;
    justify-items: center;
    align-items: center;
    width: 100%;
    margin: 0 14px;
    font-size: 14px;
    gap: 15px;
    
`
const ShoppingWrapper = styled(Box)`
    display: flex;
    cursor: pointer;
`

const LoginButton = styled(Button)`
    color: #2874f0;
    background: #FFFFFF;
    text-transform: none;
    padding: 5px 4px;
    border-radius: 2px;
    box-shadow: none;
    font-weight: 600;
    height: 32px;
    &:hover{
        background: #fff;
    }
`

const MoreWrapper = styled(Box)`
    display: flex;
    cursor: pointer;

    @media (max-width: 550px) {
    display: none;
    
  }  
`
const BecomeSeller = styled(Typography)`
      @media (max-width: 550px) {
    display: none;
    
  } 

`

const CustomButtons = () =>{
    const [open, setOpen]=useState(false)

    const {account, setAccount} = useContext(DataContext);

    const openDialog = () => {
        setOpen(true);
    }

    
    return (
        <Wrapper>

        {
            account ? <Profile account={account} setAccount={setAccount}/>
            :
            <LoginButton variant="contained" onClick={()=> openDialog()} style={{padding: "0 25px"}}>Login</LoginButton>

        }

            
            <BecomeSeller >Become a seller</BecomeSeller>

            <MoreWrapper >
                <Typography>More</Typography>
                <KeyboardArrowDownIcon fontSize="medium"/>
            </MoreWrapper >

            <ShoppingWrapper>
            <ShoppingCartIcon style={{width: 20}}/>
                <Typography >cart</Typography>
            </ShoppingWrapper>
            <LoginDialog open={open} setOpen={setOpen}/>
        </Wrapper>
    )
}

export default CustomButtons