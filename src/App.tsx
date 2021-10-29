import React, { useState } from 'react';
import { Container, ContainerAlign, Text, Button } from './components';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <Container align={ContainerAlign.Center}>
      <Text fontSize="40px" color="brown">
        React with GitHooks
      </Text>
      <br/>
      <Text fontSize="24px" color="blue">
        {`Count: ${count}`}
      </Text>
      <br/>
      <Button title="Count Up" onClick={() => setCount(count + 1)} />
    </Container>
  )
};

export default App;
