import { gql } from 'apollo-angular';

export const SESSION = gql`
  mutation {
    introduceSession {
      id
      expiresAt
      addresses {
        address
      }
    }
  }
`;

export const GET_EMAILS = gql`
  query Session($id: ID!) {
    session(id: $id) {
      mails {
        fromAddr
        headerSubject
        html
      }
    }
  }
`;
