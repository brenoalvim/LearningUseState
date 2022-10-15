import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
  scroll-behavior: smooth;
}
   body{
    margin: 0;
    padding: 0;
    background-color: var(--brand-color); 
  }
  :root {
    --brand-color: #0f172a;
  }

`
