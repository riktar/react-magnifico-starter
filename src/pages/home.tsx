import React from 'react';
import CounterShared from "../components/CounterShared";
import {useHistory} from "react-router-dom";

const Home: React.FC = () => {
  const history = useHistory()
  return (
    <>
      <div className="flex flex-col h-screen items-center justify-center content-center">
        <h1 className="text-primary-500">React Magnifico Starter</h1>
        <p className="text-gray-700">React + TypeScript + MobX + Tailwind = ❤</p>

        <div className="mt-20 text-center">
          <h4>Counter</h4>
          <p>A MobX State Tree example</p>
          <CounterShared/>
        </div>

        <div className="mt-10">
          <button onClick={() => history.push('about')} className="text-secondary-500 ">Go to About page</button>
        </div>

      </div>

    </>
  );
}

export default Home;
