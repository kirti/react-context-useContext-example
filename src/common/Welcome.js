import React from 'react'
import User from '../User'
import ThemedTypo  from '../ThemedTypo';

function Welcome() {
  return (
    <div className="Welcome">
         Welcome page rendered after login 
         <h1>How to Use and Implement Context and useContext Hook with example React's Hooks </h1>
          <ThemedTypo>I am styled by theme consumer react api </ThemedTypo>
           <User/>
    </div>
  );
}

export default Welcome;
