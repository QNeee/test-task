import React from 'react';
import { Container, Title, Description, Button } from './Home.styled';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
    const navigate = useNavigate();

    return (
        <><Container>
            <Title>Welcome to Home Page</Title>
            <Description>
                This is the home page of our website. Enjoy your stay!
            </Description>
            <Button type='button' onClick={() => navigate('/main')}>Get Started</Button>
            <Button style={{ marginTop: '50px' }} type='button' onClick={() => navigate('/tweets')}>Tweets</Button>
        </Container ></>
    );
};


export default Home;