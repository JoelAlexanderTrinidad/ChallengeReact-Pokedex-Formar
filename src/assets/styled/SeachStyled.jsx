import styled from "styled-components";

export const InputSearch = styled.div`
    display: flex;
   align-items: center;
   justify-content: center;
   gap: 2rem;
`;

export const Input = styled.input`
  /* Estilos generales del input */
     padding: 10px;
     border: 2px solid #ffffff;
     border-radius: 20px;
     font-size: 13px;
     background-color: transparent;
     color: #ffffff;
     width: 12rem;
     font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
     font-weight: 700;
    
 
     /* Estilos al pasar el mouse por encima */
     &:hover {
       border-color: #cccccc;
     }
 
     /* Estilos al enfocar el input */
     &:focus {
       outline: none;
       border-color: #3498db;
       box-shadow: 0 0 5px #3498db;
     }
     @media (min-width: 768px) {
      width: 18rem;
    }

    @media (min-width: 1024px) {
      width: 32rem;
      font-size: 16px;
    }
    
`;

export const Img = styled.img`
    width: 15rem;
    margin: 0px auto;
    padding: 3rem 0;
    @media (min-width: 768px) {
      width: 26rem;
    }

    @media (min-width: 1024px) {
      width: 20rem;
    }

`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    z-index: 10;
`

export const SearchButton = styled.button`
  /* Estilos generales del botón */
  padding: 10px 20px;
        background-color: #222222;
        color: #ffffff;
        border: 2px solid #ffffff;
        border-radius: 20px;
        font-size: 16px;
        cursor: pointer;
        transition: all 0.3s ease;

        /* Efecto de sombra */
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);

        /* Estilos al pasar el mouse por encima */
        &:hover {
        background-color: #ffffff;
        color: #222222;
        }

        
`;