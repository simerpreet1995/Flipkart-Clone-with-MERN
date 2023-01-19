import { AppBar, Toolbar, styled, Typography } from "@mui/material";
import { Box } from "@mui/system";

// components
import Search from './Search'
import CustomButtons from './CustomButtons'

const StyledHeader = styled(AppBar)`
    background: #2874f0;
    height: 55px;
    display: flex;
    justify-items: center;
    justify-content: center;
    
`
const Component = styled(Box)`
    margin-left: 12%;
    line-height: 0;
    cursor: pointer;

    @media (max-width: 550px) {
    margin: 5px
  } 
`
const Subheading = styled(Typography)`
    font-size: 9px;
    font-style: italic;

    &:hover{
        text-decoration: underline;
    }
`

const Header = () =>{
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';

    const SubURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
    return(
        <StyledHeader>
            <Toolbar style={{height: 50}}>

                <Component>
                    <img src={logoURL} alt="logo" style={{width: 75}} />
                    <Box>
                        <Subheading>
                            Explore
                              <Box component="span" style={{color: '#FFE500'}}> Plus</Box>
                                
                                <img src={SubURL} alt="sub-logo" style={{width: 10, marginTop:1,marginLeft:2}} />
                                
                        </Subheading>
                           
                    </Box>
                </Component>

                <Search/>

                <Box>
                    <CustomButtons></CustomButtons>
                </Box>
            </Toolbar>
        </StyledHeader>
    )
}

export default Header;