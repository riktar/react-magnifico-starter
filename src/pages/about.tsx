import React from 'react';
import {useHistory} from "react-router-dom";
import Button from "../components/atoms/Button";

const About: React.FC = () => {
  const history = useHistory()
  return (
    <>
      <div className='container mx-auto pt-10'>
        <h1 className="text-primary-500">About Magnifico</h1>
        <p>Magnifico is a React Starter for speed up your app prototipation.</p>
        <p><strong>README is coming...</strong></p>
        <div className="mt-10">
          <Button color={'secondary'} variant={'bordered'} onClick={() => history.push('/')}>Home</Button>
        </div>
      </div>
    </>
  );
}

export default About;
