import { Container, Navbar } from "./styles";
import {AiOutlineRocket} from 'react-icons/ai'

export function Header(){
  return(
    <Container>
      <Navbar>
        <AiOutlineRocket size={40}/>
        <h1>to<span>do</span></h1>
      </Navbar>
    </Container>
  )
}