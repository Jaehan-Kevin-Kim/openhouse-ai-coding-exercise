import styled from "@emotion/styled";
import { Card } from "antd";

export const CardContainer = styled.div`
  position: relative;
`;

export const CardImage = styled.img`
  object-fit: cover;
  /* width: 300px; */
  height: 230px;
`;

export const CardDescription = styled.span`
  color: #dd6a15;
  font-weight: 600;
`;

export const CardComponent = styled(Card)`
  text-align: center;

  &:hover {
    opacity: 0.3;
  }
`;
