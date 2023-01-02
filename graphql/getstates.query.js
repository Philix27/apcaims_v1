import { gql } from "@apollo/client";

const GET_ALL_STATES = gql`
  query {
    getAllStates {
      name
      capital
    }
  }
`;

export default GET_ALL_STATES;
