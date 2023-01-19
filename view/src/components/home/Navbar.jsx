import { Typography } from "@mui/material"
import { Box,styled } from "@mui/system"

import { navData } from "../../constants/data"

const Component = styled(Box)`
    display: flex;
    justify-content: space-evenly;
    padding: 40px;
    line-height: 1;
    cursor: pointer;
    flex-wrap: wrap;

    @media (max-width: 550px) {
        padding: 20px;
  } 

`

const Container = styled(Box)`
    text-align: center;

`

const Text = styled(Typography)`
    font-size: 14px;
    font-weight: 600;
    font-family: inherit;
`

const Navbar = () =>{
    return(
      <Component>
        {
            navData.map((data, idx)=>(
                <Container key={idx}>
                    <img src={data.url} alt="nav images" style={{width:64}}/>
                    <Text  style={{marginLeft: 5}}>{data.text}</Text>
                </Container>
            ))
        }
      </Component>
    )
}

export default Navbar