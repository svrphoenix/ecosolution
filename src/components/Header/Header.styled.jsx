import { styled } from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 36px;
  padding-bottom: 36px;
  gap: 11px;

  width: 100%;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  /* background-color: #f3f5fa; */
`;

export const BtnWrapper = styled.div`
  display: flex;
  gap: 12px;
`;
