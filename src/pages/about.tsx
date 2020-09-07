import React from 'react';
import {useHistory} from "react-router-dom";

const About: React.FC = () => {
  const history = useHistory()
  return (
    <>
      <div className="flex flex-col h-screen items-center justify-center">
        <h1 className="text-primary-500 text-center">Silence for now...</h1>
        <div className="mt-10">
          <button onClick={() => history.push('/')} className="text-secondary-500">Go to Home</button>
        </div>
      </div>

    </>
  );
}

export default About;
