import styled from '@emotion/styled';
import { theme } from 'styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const Title = styled.h2`
  font-size: 48px;
  color: ${theme.colors.dark};
`;

export const Message = styled.p`
  font-size: ${theme.fontSizes.medium};
  font-weight: 500;
  margin-bottom: 12px;
`;

export const List = styled.ul``;
