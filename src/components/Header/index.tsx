import logoImg from '../../assets/$.svg'
import { Container, Content } from './styles'

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

export function Header( {onOpenNewTransactionModal} : HeaderProps) {  

    return (
        <Container>
            <Content>
                <div>
                    <img src={logoImg} alt="lr money"/>
                    <h2>LR Money</h2>
                </div>       
                <button type="button" onClick={onOpenNewTransactionModal}>
                    Nova transação
                </button>
                
            </Content>
        </Container> 
    )
}