import Paper from "@material-ui/core/Paper";
import styled from "styled-components";

export const Wrapper = styled(Paper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0.5rem;
  color: white;
  height: 160px;
  max-width: 100%;

  &.MuiPaper-root {
    background-color: #e0e0e0;
  }
`;

export const Title = styled.div`
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

export const Quantity = styled.div``;
