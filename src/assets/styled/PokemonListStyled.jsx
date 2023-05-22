import styled from "styled-components";

export const PokemonsContainer = styled.div`
    margin-top: 6rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 4rem;
    @media (min-width: 1024px) {
        gap: 2rem;
    }
`


export const RemoveButton = styled.button`
    display: flex;
    position: absolute;
    position: fixed;
    right: 1rem;
    padding: 10px;
    border: 2px solid white;
    border-radius: 20px;
    font-size: 14px;
    bottom: 2rem;
    background-color: #ef1414;
    color: #ffffff;
    font-family: monospace;
    cursor: pointer;
`

export const LoadMoreButton = styled.button`
    margin-bottom: 2rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 700;
    border: none;
    border-radius: 16px;
    cursor: pointer;

    background-color: #f1f1f1;
    color: #333333;
    padding: 0.5rem 1rem;
    font-size: 16px;
    transition: background-color 0.3s ease, color 0.3s ease;

    &:hover {
    background-color: #4062d4;
    color: #ffffff;
}
`
export const ContainerButton = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`