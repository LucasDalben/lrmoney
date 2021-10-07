import logoImg from '../../assets/$.svg'
import { Container, Content } from './styles'

export function Header() {  
    return (
        <Container>
            <Content>
                <div>
                    <img src={logoImg} alt="lr money"/>
                    <h2>LR Money</h2>
                </div>       
                <button type="button">
                    Nova transação
                </button>
            </Content>
        </Container> 
    )
}