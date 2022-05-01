import styled from "@emotion/styled/macro";

export const StyledButton = styled.button<{color: string}>`
  /* Property 1=Создать, hover=true */
  outline: none;
  border: none;
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: center;
  padding: 10px 30px;
  height: 40px;
  left: 20px;
  top: 15px;

  background: ${props => props.color};
  border-radius: 25px;
  
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;

  color: #FFFFFF;
  
  cursor: pointer;
`;
