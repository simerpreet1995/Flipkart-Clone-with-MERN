import styled from "@emotion/styled"
import {Box, Typography, Menu, MenuItem} from "@mui/material"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';


import { useState } from "react";


const Wrapper = styled(Box)`
    margin-top: 3px;
    cursor: pointer;
    
`

const Component = styled(Menu)`
    margin-top: 12px;

`

const Logout = styled(Typography)`
    margin-left: 14px;
    font-size: 12px;
`

const Profile = ({account, setAccount}) => {

    const [open, setOpen] = useState(false)

    const handleClick = (event) =>{
        setOpen(event.currentTarget)
    }

    const handleClose = () =>{
        setOpen(false)
    } 

    const logoutUser = () => {
        setAccount('');
    }

    return (
        <>
        <Wrapper onClick={handleClick}>
            <Typography style={{fontSize: 20}}>{account}</Typography>
        </Wrapper>
        <Component
        id="basic-menu"
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {/* <MenuItem onClick={handleClose}>
            <AccountCircleIcon color={"primary"} fontSize={"small"}/>
            <Typography>My Profile</Typography>
        </MenuItem>

        <MenuItem onClick={handleClose}>
            <AccountCircleIcon color={"primary"} fontSize={"small"}/>
            <Typography>orders</Typography>
        </MenuItem>

        <MenuItem onClick={handleClose}>
            <AccountCircleIcon color={"primary"} fontSize={"small"}/>
            <Typography>My Profile</Typography>
        </MenuItem>

        <MenuItem onClick={handleClose}>
            <AccountCircleIcon color={"primary"} fontSize={"small"}/>
            <Typography>My Profile</Typography>
        </MenuItem>

        <MenuItem onClick={handleClose}>
            <AccountCircleIcon color={"primary"} fontSize={"small"}/>
            <Typography>My Profile</Typography>
        </MenuItem> */}


        <MenuItem onClick={()=>{handleClose(); logoutUser() }} >
            <PowerSettingsNewIcon color={"primary"} fontSize={"small"} />
        <Logout>Logout</Logout>
        </MenuItem>

      </Component>
        </>
    ) 
}


export default Profile