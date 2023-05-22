import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import logo from '../assets/images/logo.webp'
import { InputSearch, Form, Img, Input, SearchButton} from "../assets/styled/SeachStyled";
import styled from "styled-components";

export const Search = () =>{

    const [searchValue, setSearchValue] = useState('');
    const navigate = useNavigate();

    const onInputChange = (event) => {
        setSearchValue(event.target.value)
    }

    const onSearchSubmit = (event) => {
        event.preventDefault();
        navigate(`/search/${searchValue}`);
        setSearchValue('');
      };

    const StyledLink = styled(Link)`
        display: flex;
    `;


    return(
        <> 
            <Form onSubmit={onSearchSubmit}>
                <StyledLink to="/">
                    <Img src={logo} alt="" />
                </StyledLink>
                <InputSearch>
                    <Input
                            type="text"
                            placeholder="Search Pokemon"
                            value={searchValue}
                            onChange={onInputChange}
                        />
                    <SearchButton type="submit">Search</SearchButton>
                </InputSearch>
               
            </Form>
        </>
    )
}
