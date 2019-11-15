import { useState, useEffect } from 'react';
import axios from 'axios';

  // useEffect - Allow a functional component to use "lifcycle methods" - combined componentDidMount and componentDidUpdate

const useResources = resource => {
  const [resources, setResources] = useState([]);

  // ex) useEffect(() => {}, [])
  // pass [] - allow function callede only one time
  // pass [same vallue] - allow function called one time
  // pass [different vallue] - allow function called two times
  // pass [{same object}] - allow function called two times (b/c object is different(everytime created newly object))
  // not pass anything - allow function calld every time until you make stop
  useEffect(
    () => {
      (async resource => {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/${resource}`
        );

        setResources(response.data);
      })(resource);
    },
    [resource]
  );
  return resources;
};

export default useResources;