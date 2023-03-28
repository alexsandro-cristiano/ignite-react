import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}

body, input, textarea, button{
  font-family: 'Inter', sans-serif;
  color: ${props => props.theme['gray-100']};
  background-color: ${props => props.theme['gray-600']};
  font-weight: 400;
  line-height: 140%;
}

h1,h2,h3,h4,h5{
  font-weight: 400;
}
`;
