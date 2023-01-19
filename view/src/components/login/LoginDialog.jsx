import { Button, TextField, Typography,styled, Box, Dialog } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useState, useContext } from 'react';
import { authenticateSignup, authenticateLogin } from '../../service/api';
import { DataContext } from '../../context/DataProvider';


const Component = styled(Box)`
height: 70vh;
width: 100%;
max-width: 600px;
display: flex;
overflow: hidden;

@media (min-width: 768px) {
    width: 65vw;
  }
  

  @media (max-width: 550px) {
    flex-direction: column;
    width: 100%;
  }  
  
`




const Typography1 = styled(Typography)`
    font-size: 24px;
    color: #fff;
    padding: 15px;
    margin-top: 10px;
`

const Typography2 = styled(Typography)`
      font-size: 14px;
    color: #fff;
    padding: 0px 15px;
    margin-top: 5px;
    
    @media (max-width: 550px) {
    font-size: 10px;
    line-height: 0;
    
  }  
`



const Image = styled(Box)`
    background: #2874f0 url('https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png') center 85% no-repeat;
    background-size: 180px;
    height: 100%;
    width: 200px;
    padding: 5px;

    @media (max-width: 550px) {
    height: 100vh;
    width: 100%;

    background-size: 100px;
    background-position: center 100%;

  }  
`


const Wrapper = styled(Box)`
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: space-between;
    padding: 25px 35px;
    flex: 1;

`

const LoginButton = styled(Button)`
    text-transform: none;
    background: #FB641B;
    color: #fff;
    border-radius: 2px;
    height: 48px;
    width: 100%;
    font-weight: 600;

    &:hover {
        background-color: #FB641B;
    }
`


const RequestOTP = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    border-radius: 2px;
    height: 38px;
    width: 100%;
    box-shadow: 0 2px 5px 4px #f1eeeee5;
`

const Text = styled(Typography)`
    font-size: 9px;
    color: #878787;
`

const CreateAccount = styled(Typography)`
    font-size: 10px;
    font-weight: 600;
    cursor: pointer;
    color: #2874f0;
    
`

const CloseButtonWrapper = styled(Box)`
    position: absolute;
    top: 0px;
    right: 0;
    /* background-color: blue; */
    cursor: pointer;
`

const Error = styled(Typography)`
    font-size: 10px;
    color: #ff6161;
    line-height: 0;
    margin-top: 10px;
    font-weight: 600;
`

const accountInitialValues = {
    login : {
        view : 'login',
        heading: "Login",
        subHeading: "Get access to your Orders, Wishlist and Recommendations"
    },
    signup: {
        view : 'signup',
        heading: "Looks like you're new here!",
        subHeading: "Sign up with your mobile number to get started"
    }
}

const signupInitialValues = {
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    phone: "",
}

const loginInitialValues = {
    username: "",
    password: ""
}

const LoginDialog = ({open ,setOpen}) => {

    const[account, toggleAccount] = useState(accountInitialValues.login)

   

    const [signup, setSignup] = useState(signupInitialValues)
    const [login, setLogin] = useState(loginInitialValues)
    const [error, setError] = useState(false)
    const {setAccount} = useContext(DataContext)


    const handleClose = () => {
        setOpen(false);
        toggleAccount(accountInitialValues.login)
    }

    const toggleSignup = () => {
        toggleAccount(accountInitialValues.signup)
    }

    const onInputChange = (e) =>{
        setSignup({...signup, [e.target.name]: e.target.value})
        // console.log(signup)
    }

    const signupUser = async () => {
        let response = await authenticateSignup(signup);
        if (!response) return;
        handleClose();
        setAccount(signup.firstname)
        
    }

    const onValueChange = (e) =>{
        setLogin({...login, [e.target.name]: e.target.value})
    }

    const loginUser = async () => {
         let response =  await authenticateLogin(login);
         console.log(response)
         if(response.status === 200){
            handleClose();
            setAccount(response.data.data.firstname)
         } else {
            setError(true);
         }
    }

    return (
       
       <Dialog open={open} onClose={handleClose} style={{position: "relative",overflowX: "hidden"
       }}>

        <Component>
       
        <Image>
        <Typography1 >{account.heading}</Typography1>
      
        <Typography2 >{account.subHeading}</Typography2>
        </Image>
      
      {
        account.view === 'login' ?
            <Wrapper>
            <TextField variant='standard'
            onChange={(e)=> onValueChange(e)}
            name="username"
            label="Enter Username"></TextField>
            
            {/* to show error for validation */}
           { error && <Error>Please enter valid username and password</Error>}

            <TextField variant='standard'
            onChange={(e)=> onValueChange(e)}
            name="password"
            label="Enter Password"></TextField>
            <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>

            <LoginButton onClick={()=>loginUser()}>Login</LoginButton>

            <Typography style={{textAlign: "center"}}>OR</Typography>
            <RequestOTP>Request OTP</RequestOTP>
            <CreateAccount 
            onClick={()=> toggleSignup()}
            style={{textAlign: "center"}}
            >New to Flipkart? Create an account</CreateAccount>
        </Wrapper>

        :

            <Wrapper>
            <TextField variant='standard'
            onChange={(e)=>onInputChange(e)}
            name="firstname"
            label="Enter First Name"></TextField>

            <TextField variant='standard' 
            onChange={(e)=>onInputChange(e)}
            name="lastname"
            label="Enter Last Name"></TextField>

            <TextField variant='standard' 
            onChange={(e)=>onInputChange(e)}
            name="username"
            label="Enter User Name"></TextField>

            <TextField variant='standard'
            onChange={(e)=>onInputChange(e)}
            name="email"
            label="Enter Email"></TextField>

            <TextField variant='standard'
            onChange={(e)=>onInputChange(e)}
            name="password"
            label="Enter Password"></TextField>

            <TextField variant='standard'
            onChange={(e)=>onInputChange(e)}
            name="phone"
            label="Enter Phone Number"></TextField>

           
            <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
            <LoginButton onClick={()=> signupUser()}>Continue</LoginButton>
            <CreateAccount 
            onClick={()=>toggleAccount(accountInitialValues.login)}
            style={{textAlign: "center"}}
            >Existing User? Log in</CreateAccount>
        </Wrapper>
      }

        <CloseButtonWrapper>
       <IconButton
             edge="start"
           
             onClick={handleClose}
             aria-label="close"
          >
           <CloseIcon/>
           </IconButton>
       </CloseButtonWrapper>

        </Component>

       </Dialog>
      

       
    
    )
}

export default LoginDialog;
