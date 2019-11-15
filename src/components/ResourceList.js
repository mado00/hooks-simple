import React from 'react';
import useResources from './useResources';

const ResourceList = ({ resource }) => {
  // console.log({ resource })
  const resources = useResources(resource);

    return (
      <ul>
        <h1>{resource}</h1>
        {resources.map(record => <li key={record.id}>{record.title}</li>)}
      </ul>
    )
}

export default ResourceList;