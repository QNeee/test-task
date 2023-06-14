import React from 'react';
import { Container, TweetsContainer, Title, Tweet, TweetAuthor, TweetContent } from './Tweets.styled';
import { Button } from '../Home/Home.styled';
import { useNavigate } from 'react-router-dom';


const Tweets: React.FC = () => {
    const navigate = useNavigate();
    return (
        <Container>
            <Button type='button' onClick={() => navigate('/')}>
                Back
            </Button>
            <TweetsContainer>
                <Title>Tweets</Title>
                <Tweet>
                    <TweetAuthor>John Doe</TweetAuthor>
                    <TweetContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</TweetContent>
                </Tweet>
                <Tweet>
                    <TweetAuthor>Jane Smith</TweetAuthor>
                    <TweetContent>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</TweetContent>
                </Tweet>
            </TweetsContainer>
        </Container>
    );
};

export default Tweets;