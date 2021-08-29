import React from 'react';

import { fetchUserProfileData } from './utils/fetchApi';
import { Resource } from './types/resource';
import { wrapPromise } from './utils/wrapPromise';

import './App.css';
import { UserProfileList } from './components/UserProfileList/UserProfileList';

const resource: Resource = {
  1: wrapPromise(fetchUserProfileData(1)),
  2: wrapPromise(fetchUserProfileData(2)),
  3: wrapPromise(fetchUserProfileData(3))
}

function App() {
  return (
    <div className="App">
      <UserProfileList resource={resource} />
    </div>
  );
}

export default App;
