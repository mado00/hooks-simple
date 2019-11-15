import React, { useState } from 'react';
import ResourceList from './ResourceList';
import UserList from './UserList';
import Albums from './Albums';
// useState - will allow a functional component to use component-level state

const App = () => {
  // state = {resource: 'posts'}

  // const [this.state.resource, this.setState({resource:'posts'})] = function from React(state={resource:'posts'})
  const [resource, setResource] = useState('posts');
  return (
    <div className="ui container">
      <UserList />
      <Albums />
      <div>
        <button onClick={() => setResource('posts')}>
          Post
        </button>
        <button onClick={() => setResource('todos')}>
          Todos
        </button>
      </div>
        <ResourceList resource={resource} />
    </div> 
  ); 
}

export default App;