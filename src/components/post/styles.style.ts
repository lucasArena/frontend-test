import styled from 'styled-components';

import Button from '../../components/button/index.component';
import Textarea from '../textarea/index.component';

export const Container = styled.div`
  background-color: ${({theme}) => theme.colors.background};
  padding: 16px 16px 0 16px;

  & + div {
    margin-top: 10px;
  }

  @media (min-width: 760px) {
    border-radius: 10px;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 8px;
  
  img {
    width: 42px;
    height: 42px;
    border-radius: 50%;

    margin-right: 10px;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    margin-top: 10px;
  }

  @media (min-width: 760px) {
    flex-direction: row;
  }
`;

export const ImageContainer = styled.div`
  display: flex;  
  margin-top: 10px;
  margin-right: 20px;

  img {
    width: 140px;
    height: 140px;
  }
`;

export const ContentContainer = styled.div`
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > button {
    display: flex;
    align-items: center;    

    padding: 10px;

    svg {
      margin-right: 10px;
    }
  
    min-width: 40px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  margin: 15px 0;
  padding: 5px 0;
  border-top: 1px solid ${({theme}) => theme.colors.background};
  border-bottom: 1px solid ${({theme}) => theme.colors.background};
`;

export const CommentsFeed = styled.div`
  width: 100%;
  margin-top: 14px;
`;

export const NewCommentContainer = styled.div`
  display: flex;
  flex-direction: column;

  border-top: 1px solid ${({theme}) => theme.colors.background};
  padding: 10px 0;

  @media (min-width: 760px) {
    flex-direction: row;
  }
`;

export const CommentTextarea = styled(Textarea)`
  padding: 8px;
`;

export const CommentButton = styled(Button)`
  margin-left: 6px;
`;
