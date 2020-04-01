import React from "react";
import styled from "@emotion/styled";

const Mensaje = styled.p`
    background-color: rgb(127, 224, 237);
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
`;

const ResultadoCotizacion = styled.div`
    background-color: rgb(127, 224, 237);
    padding: .5rem;
    border: 1px solid #26C6DA;
    margin-top: 1rem; 
    position: relative;
    
`;

const TextoCotizacion = styled.p`
    color: #00838F;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
    text-align: center;
`;

const Resultado = ({cotizacion}) => {

    return (
        (cotizacion === 0) 
        ? <Mensaje>Elige marca, año y plan de seguro</Mensaje> 
        : ( 
        <ResultadoCotizacion>
            <TextoCotizacion>El total es: {cotizacion}</TextoCotizacion>
        </ResultadoCotizacion>
        )
    )
}

export default Resultado;