import { Card, CardActions, styled } from "@mui/material";

export const StyledCard = styled(Card)`
  border: none;
  border-radius: 15px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  width: 100%;
  max-width: 32rem;
  height: 32rem;
`;

export const StyledCardActions = styled(CardActions)`
  .editButton:hover {
    color: #a4d0a4;
  }
  .deleteButton:hover {
    color: #db005b;
  }
  button {
    margin-left: auto;
    color: gray;
    transition: color 0.5s ease;
  }
`;
