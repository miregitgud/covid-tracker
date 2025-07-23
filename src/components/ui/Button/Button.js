import styled, { css } from "styled-components";

const Button = styled.button`
padding: 0.8rem 2rem;
border: none;
border-radius: 10px;
color: white;
background-color: #4361ee;
cursor: pointer;

/* menangkap props untuk properti styling*/

background-color: ${(props) =>
    props.theme.buttonColor[props.variant] || props.theme.buttonColor["primary"]};

/* props full */
${function(props) {
    return props.full && css`
    width: 100%;
    display: block;
    `
}}

/* props untuk mengatur size */
${(props) =>
    props.theme.buttonSize[props.size] || props.theme.buttonSize["md"]}
`;


export default Button;