import React from 'react';
import './App.css';
import { Gitgraph } from '@gitgraph/react';

function App() {
  return (
    <Gitgraph>
      {(gitgraph) => {
        const master = gitgraph.branch("master");
        master.commit("Initial commit")
      }}
    </Gitgraph>
  );
}

export default App;
