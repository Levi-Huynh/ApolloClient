import { Query } from 'react-apollo';
import { GET_USERS } from '../utils';


const UsersList = () => (
    <Query query={GET_USERS}>
      {({ loading, error, data }) => {
        if (loading) return 'Loading...';
        if (error) return `Error! ${error.message}`;
        if (data) {
          return <List users={data.users.data} />;
        }
      }}
    </Query>
  );