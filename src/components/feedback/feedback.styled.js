import styled from "styled-components";

export const Button = styled.button`
&:not(:last-child) {
    margin-right: 10px;
}
background-color: white;
border-radius: 8px;
border: 1.5px solid black;
cursor: pointer;
width: 80px;
height: 25px;
font-size: 13px;
font-weight: 500;
text-transform: capitalize;

&:hover {
  background-color: #6e57f2;
  color: white;  
}`