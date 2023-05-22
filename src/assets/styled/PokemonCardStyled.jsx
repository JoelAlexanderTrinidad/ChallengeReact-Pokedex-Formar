import styled, { css } from 'styled-components';


export const Card = styled.div`
    /* background: linear-gradient(320deg, rgb(174 61 61) 0%, rgb(99 63 231) 80%); */
    background-image: linear-gradient(rgb(219 43 43), rgba(0, 0, 0, 0)), url(/src/assets/images/fire_bg.png);
    background-position: center;
    background-size: cover;
    display: flex;
    width: 80%;
    /* border: 5px solid rgb(248, 199, 3); */
    border-radius: 15px;
    position: relative;
    height: 14rem;
    box-shadow: rgba(0, 0, 0, 0.81) 0px 19px 28px;
    img{
        width: 41%;
        left: 0;
        position: absolute;
        top: -1.5rem;
    }

   
    @media (min-width: 768px) {
        width: 40%;
        img{
            width: 45%;
            left: -25px;
            top: -3.5rem;
        }
    }

    @media (min-width: 1024px) {
        width: 20%;
        margin-top: 5rem;
    }

`

export const ContainerInfo = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400;600;700&display=swap');
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin-left: 40%;
    gap: 10px;
    
    span{
        display: flex;
        gap: 1.5rem;
        font-family:  Geneva, Tahoma, sans-serif;
        align-items: center;
        font-weight: 700;
        color: #cfb4ea;
        text-shadow: rgb(184 42 42) 2px 2px 2px;
        font-size: 14px;
    }
    ul{
        font-family:  Geneva, Tahoma, sans-serif;
        display: flex;
        flex-direction: column;
        color: #cfb4ea;
        text-shadow: rgb(184 42 42) 2px 2px 2px;
        font-weight: 700;
        font-size: 14px;
    }
    li{
        font-family:  Geneva, Tahoma, sans-serif;
        list-style: none;
        padding-left: 1rem;
        color: #cfb4ea;
        text-shadow: rgb(184 42 42) 2px 2px 2px;
        font-weight: 700;
        font-size: 14px;
    }

`


export const CardChild = styled.div`
    width: 100%;
    height: 100%;
`


export const Div = styled.div`
    height: 2rem;
`

export const Button = styled.button`
    background-color: #c72b4e;
    color: #ffffff;
    cursor: pointer;

    ${({ isSelected }) =>
        isSelected &&
        css`
        background-color: #ff0000;
        color: #ffffff;
        `}

    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 500;

    display: flex;
    position: absolute;
    top: -1rem;
    right: 1rem;
    border: 2px solid white;
    width: 6rem;
    justify-content: center;
    padding: .5rem 0;
    border-radius: 15px;
    font-size: 16px;
`

export const Name = styled.div`
    font-size: 25px;
    text-shadow: rgb(42 114 184) 2px 3px 4px;
    text-transform: uppercase;
    color: #ffcb04;

  
`

