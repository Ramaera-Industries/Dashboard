import React from 'react'
import styled from 'styled-components'

const Button = (props) => {

    const StyledButton = styled.button`
        color: ${ props.color ? props.color : "#FFFFFF" };
        font-size:${ props.fontSize ? props.fontSize : "17px" } ;
        font-weight: ${ props.fw ? props.fw : "700" } ;
        line-height: ${ props.noLineHeight ? "1" : "25.5px"} ;
        letter-spacing: ${props.ls ? props.ls : "0.05em" } ;
        padding: ${props.big ? "1rem 2rem" : "0.3rem 5rem"} ;
        border-radius: ${ props.round ? "50%" : "0.75rem"} ;
        border: ${props.lightBorder ? "1.2px solid #FFFFFF" : "none"};
        cursor: pointer;
        min-width: ${props.width ? props.width : "7rem"};
        background: ${props.bg ? props.bg : "linear-gradient(90deg, #F9D423 0%, #E65C00 100%)"};
        height: ${props.height ? props.height : ''};
        margin: ${ props.margin ? props.margin : '' };
    `

    return (
        <StyledButton type="button" >
            {props.Text? props.Text : "Default Button"}
        </StyledButton>
    )
    }
export default Button;