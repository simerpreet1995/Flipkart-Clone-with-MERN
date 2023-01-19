


// components
import Navbar from "./Navbar";
import Banner from "./Banner";
import { Box,styled } from "@mui/system";


const Component = styled(Box)`
    box-sizing: border-box;
    padding: 20px 10px;
    background: #f2f2f2;
    margin-top: 0;
`

const Home = () =>{
    return(
        // we can also use <Box/> component here but Fragments and empty brackets angle are faster 
        <> 
            <Navbar/>

            <Component>
            <Banner/>
            </Component>
        </>
    )
}

export default Home; 