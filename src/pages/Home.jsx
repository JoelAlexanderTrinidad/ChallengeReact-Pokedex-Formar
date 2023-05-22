import {PokemonList} from "../components/PokemonList"
import { Search } from "../components/Search"
import '../index.css'
import styled from 'styled-components'

const Body = styled.div`
    background-color: #1f262bc8;
`

const ImgBg = styled.div`
    position: absolute;
    background-image: url('/src/assets/images/Mr.-Rime-Pokemon-PNG.gif');
    width: 20rem;
    height: 20rem;
    background-size: cover;
    background-position: center;
    z-index: -1;
    top: 2rem;
    left: 2rem;
    /* right: 5rem; */

    @media (min-width: 768px) {
        width: 30rem;
        height: 30rem;
    }

    @media (min-width: 1024px) {
        width: 45rem;
        height: 45rem;
    }
`

export const Home = () => {
    return(
        <Body>
            <ImgBg>

            </ImgBg>
            <Search />
            <PokemonList />
        </Body>
    )
}