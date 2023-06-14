import { Container, Button, UserCardContainer, P, ImageContainer, BoyImg, LineImg, LogoImg } from "./UserCard.styled";
import logo from '../../images/Vector.svg'
import downLogo from '../../images/DownLogo.svg'
import boy from '../../images/Boy.svg'
import line from '../../images/Line.svg'
import { IData } from "../../types";
const UserCard = () => {
    const data: IData[] = [
        {
            user: "bebra",
            tweets: 132322,
            folowers: 153232,
            avatar: boy,
            id: "2",
        },
        {
            user: "deda",
            tweets: 12,
            folowers: 15,
            avatar: boy,
            id: "3",
        },
        {
            user: "bebra",
            tweets: 12,
            folowers: 15,
            avatar: boy,
            id: "4",
        },
        {
            user: "bebra",
            tweets: 12,
            folowers: 15,
            avatar: boy,
            id: "5",
        }
    ];
    return <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {data.length > 0 ? data.map(item => <Container key={item.id}>
            <UserCardContainer>
                <LogoImg src={logo} alt="logo" />
                <img src={downLogo} alt="downlogo" />
                <ImageContainer>
                    <BoyImg src={item.avatar} alt="boy" />
                    <LineImg src={line} alt="line" />
                </ImageContainer>
                <P>{item.tweets} Tweets</P>
                <P>{item.folowers} followers</P>
                <Button type="button">Follow</Button>
            </UserCardContainer>
        </Container>) : null}
    </div>

    // <Container>
    //     <UserCardContainer>
    //         <LogoImg src={logo} alt="logo" />

    //         <img src={downLogo} alt="downlogo" />
    //         {data.length > 0 ? data.map(item => <Container>
    //             <ImageContainer>
    //                 <BoyImg src={boy} alt="boy" />
    //                 <LineImg src={line} alt="line" />
    //             </ImageContainer>
    //         </Container>) : null}


    //     </UserCardContainer>
    // </Container>
}

export default UserCard;