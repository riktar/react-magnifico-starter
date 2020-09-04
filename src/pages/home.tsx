import React from 'react';
import CounterShared from "../components/CounterShared";
import {Link} from "react-router-dom";


const Home: React.FC = () => {
  return (
    <>
      <div className="flex flex-col h-screen items-center justify-center">
        <h1 className="text-5xl text-primary-500 text-center">React Magnifico Starter</h1>
        <p className="text-gray-700">React + TypeScript + MobX + Tailwind = ❤</p>
        <CounterShared />

        <div className="mt-10"><Link to={"about"}><span className="text-secondary-500">Go to About page</span></Link></div>

      </div>

    </>
  );
}

export default Home;
