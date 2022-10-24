import styled from '@emotion/styled';

export const Form = styled.form`
  padding: 15px;
  width: 400px;
  color: ${p => p.theme.colors.textTitle};
  font-size: 18px;
  font-weight: 500;
  border: 1px solid ${p => p.theme.colors.subText};
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 20px;
`;
export const Input = styled.input`
  display: block;
  width: 250px;
  margin-top: 20px;
  padding: 5px;
  border: 1px solid ${p => p.theme.colors.subText};
  :active,
  :focus-visible {
    border: 1px solid ${p => p.theme.colors.white};
    outline: 1px solid ${p => p.theme.colors.accentText};
  }
`;

export const Button = styled.button`
  cursor: pointer;
  display: inline-block;
  padding: 8px;
  width: 150px;
  border: none;
  border-radius: 5px;
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.buttonSubmit};
  font-size: 17px;
  :hover {
    background-color: ${p => p.theme.hoverColors.buttonSubmit};
  }
`;
