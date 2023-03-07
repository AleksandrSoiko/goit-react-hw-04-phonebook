import styled from 'styled-components';

export const Item = styled.li`
  width: 300px;
  display: flex;
  gap: 10px;
  justify-content: space-between;
  padding: 5px;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  &:nth-child(even) {
    background-color: #e6e6fa;
  }
`;

export const Contact = styled.span``;

export const DeleteBtn = styled.button`
  background-color: transparent;
  border: 1px solid grey;
`;
