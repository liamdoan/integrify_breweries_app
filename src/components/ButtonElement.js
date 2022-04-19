import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
margin: 10px 1rem;
padding: 10px 15px;
align-self: center;
text-align: center;
width: ${({main}) => (main ? "50%" : "70%")};
text-decoration: none;
border-radius: 15px;
background: linear-gradient(
    to bottom right,
    rgba(114, 129, 140, 0.8),
    rgb(37, 42, 45)
  );
box-shadow: 7px 7px 10px black, inset 0px 0px 6px rgba(109, 123, 133, 0.5);
color: #b8b091;
transition: 0.2s ease-in-out;

  &:hover {
    transform: translateY(3px);
    transition: 0.2s ease-in-out;
  }
}
`