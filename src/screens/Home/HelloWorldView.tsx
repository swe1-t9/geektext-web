import { createFragmentContainer } from 'react-relay';
// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import { HelloWorldView_helloWorld } from './__generated__/HelloWorldView_helloWorld.graphql';
import React from 'react';

type Props = {
  helloWorld: HelloWorldView_helloWorld;
};

const HelloWorldView: React.FC<Props> = (props: Props) => (
  <div>{props.helloWorld.helloWorld}</div>
);

export default createFragmentContainer(HelloWorldView, {
  helloWorld: graphql`
    fragment HelloWorldView_helloWorld on Query {
      helloWorld: hello_world
    }
  `
});
