import styled from 'styled-components/native';

export const Container = styled.View`
  width: 115%;
  height: 190px;

  background-color: ${({ theme }) => theme.colors.attention};

  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  padding: 32px 24px;
`;

export const ContentImage = styled.View`
  opacity: 0.1;
  width: 180px;
  height: 180px;
  transform: rotate(45deg);
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 15px;
  padding-bottom: 5px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  font-size: 45px;
  color: ${({ theme }) => theme.colors.shape};
`;
