import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Card } from "../../components/Card"
import { UserInfo } from "../../components/UserInfo"
import { Container, Column, Title, TitleHighLight } from "./styles"

const Feed = () => {

    return (<>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
                <TitleHighLight># RANKING 5 TOP DA SEMANA</TitleHighLight>
                <UserInfo percentual={80} nome="Antonio Feitosa" image="https://avatars.githubusercontent.com/u/99521360?s=48&v=4" />
                <UserInfo percentual={27} nome="Antonio Feitosa" image="https://avatars.githubusercontent.com/u/99521360?s=48&v=4" />
                <UserInfo percentual={80} nome="Antonio Feitosa" image="https://avatars.githubusercontent.com/u/99521360?s=48&v=4" />
                <UserInfo percentual={89} nome="Antonio Feitosa" image="https://avatars.githubusercontent.com/u/99521360?s=48&v=4" />
                
            </Column>
        </Container>
    </>)
}

export { Feed }