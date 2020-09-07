import React from 'react';
import CounterShared from "../components/CounterShared";
import {Link} from "react-router-dom";


const About: React.FC = () => {
  return (
    <>
      <div className="flex flex-col h-screen items-center justify-center">
        <h1 className="text-primary-500 text-center">Silence for now...</h1>
        <CounterShared />
        <div className="mt-10"><Link to={"/"}><span className="text-secondary-500">Go to Home</span></Link></div>

      </div>

    </>
  );
}

export default About;
