import logo from './logo.svg';
import './App.css';
import {Amplify} from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator, useAuthenticator } from '@aws-amplify/ui-react';
import { View } from '@aws-amplify/ui-react';
import { CustomTitleComponent } from './CustomTitleComponent';
import { Stage } from 'react-konva';
import { RegularPolygon } from 'react-konva';
import { Layer } from 'react-konva';

Amplify.configure(awsconfig);

function App({signOut, user}) {

  return (
    <div className="App">
      <h2>My App Content</h2>
      <button onClick={signOut}>Log Out</button>
      <p>{user && user.signInDetails && user.signInDetails.loginId}</p>
      <Stage width={100} height={100} >
         <Layer>
            <RegularPolygon
                      x={30}
                      y={30}
                      sides={6}
                      radius={15}
                      rotation={30}
                      fill={'blue'}
                  />
         </Layer>
      </Stage>
    </div>
  );
}

export default withAuthenticator(App, true);