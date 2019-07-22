import { QueryRenderer } from 'react-relay';
// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import React from 'react';

import { environment } from '../../graphql/relay';
import ProfileView from './ProfileView';
import { ProfileQueryResponse } from './__generated__/ProfileQuery.graphql';
import Loading from '../../shared/Loading';

const ProfileQuery = graphql`
  query ProfileQuery {
    viewer {
      ...ProfileView_user
    }
  }
`;

const Profile: React.FC = () => (
  <QueryRenderer
    environment={environment}
    query={ProfileQuery}
    variables={{}}
    render={({ props, error }) => {
      if (error) return <div>{error.message}</div>;
      else if (props) {
        return <ProfileView user={(props as ProfileQueryResponse).viewer} />;
      } else return <Loading />;
    }}
  />
);

export default Profile;
