import styled from '@emotion/styled';

export const Label = styled.label`
  display: inline-block;
  font-size: 22px;

  margin-bottom: 40px;
`;

export const Input = styled.input`
  display: block;

  margin-top: 20px;

  width: 265px;

  padding: 5px;
  border: 1px solid ${p => p.theme.colors.subText};
  :active,
  :focus-visible {
    border: 1px solid ${p => p.theme.colors.white};
    outline: 1px solid ${p => p.theme.colors.accentText};
  }
`;
