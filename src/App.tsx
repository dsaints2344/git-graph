import React from 'react';
import './App.css';
import { Gitgraph, TemplateName } from '@gitgraph/react';



function App() {
  return (
    <Gitgraph options={{
      template:  TemplateName.BlackArrow,
      reverseArrow: false
    }}>
      {(gitgraph) => {
        const master = gitgraph.branch("master");
        master.commit("Initial commit").tag("v1.0")


        const develop = gitgraph.branch("develop")
        develop.commit("initial commit")

        const features = gitgraph.branch('feature')
        features.commit('Setting up component')

        develop.merge(features, 'merge feature')

        master.merge(develop, "new release").tag("v1.0.1")

        const releases = gitgraph.branch("release")
        releases.merge(master, "new release ready").tag("v1.0.1").tag('First release')


        
      }}
    </Gitgraph>
  );
}

export default App;
