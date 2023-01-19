import { InputBase, Box, styled } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const SearchContainer = styled(Box)`
    background-color: #fff;
    width: 38%;
    border-radius: 2px;
    margin-left: 10px;
    display: flex;
    height: 30px;

`
const InputSearchBase = styled(InputBase)`
    padding-left: 10px;
    width: 100%;
    font-size: 13px;
`

const SearchIconWrapper = styled(Box)`
    color: #2874f0;
    padding: 0 5px;
    margin: 2px;
    cursor: pointer;
`

const Search = () => {
  return (
    <SearchContainer>
      <InputSearchBase placeholder='Search for products,brands and more'>
      </InputSearchBase>
      <SearchIconWrapper>
        <SearchIcon style={{height:"28px"}}></SearchIcon>
      </SearchIconWrapper>

    </SearchContainer>
  );
};

export default Search;
