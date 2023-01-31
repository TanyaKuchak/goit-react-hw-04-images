import styled from '@emotion/styled';

export const ModalContainer = styled.div`
  /* max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px); */
  background-color: #fff;
  border-radius: 10px;
  position: relative;
  padding: 25px 15px 15px;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightgrey;
  /* background-color: rgba(0, 0, 0, 0.8); */
  z-index: 1200;
`;
export const Span = styled.span`
  color: red;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 14px;
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
`;
