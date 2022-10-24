import styled from '@emotion/styled';

export const ListItem = styled.li`
  display: flex;
  margin-bottom: 15px;
  :last-child {
    margin-bottom: 0;
  }
`;
export const Name = styled.span`
  color: ${p => p.theme.colors.subText};
  font-size: 18px;
  margin-right: 20px;
  font-weight: 500;
`;
export const Number = styled.span`
  color: ${p => p.theme.colors.textTitle};
  font-size: 18px;
  font-weight: 700;
  margin-right: 40px;
`;

export const DeleteButton = styled.button`
  cursor: pointer;
  display: inline-block;
  padding: 5px;
  width: 80px;
  border: none;
  border-radius: 5px;
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.buttonDelete};
  font-size: 14px;
  :hover {
    background-color: ${p => p.theme.hoverColors.buttonDelete};
  }
`;
