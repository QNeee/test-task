import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const TweetsContainer = styled.div`
  width: 500px;
  background-color: #f2f2f2;
  padding: 20px;
  border-radius: 10px;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const Tweet = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
`;

export const TweetAuthor = styled.h3`
  font-size: 18px;
  margin-bottom: 5px;
`;

export const TweetContent = styled.p`
  font-size: 16px;
`;