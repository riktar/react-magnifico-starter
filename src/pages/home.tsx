import React from 'react';
import CounterShared from "../components/example/CounterShared";
import {useHistory} from "react-router-dom";
import {useStore} from "../models/Store";
import Button from "../components/atoms/Button";

const Home: React.FC = () => {
  const history = useHistory()
  const {counter} = useStore()
  return (
    <>
      <div className="flex flex-col h-screen items-center justify-center content-center">
        <h1 className="text-primary-500">React Magnifico Starter</h1>
        <p>React + TypeScript + MobX + Tailwind = ❤</p>

        <div className="mt-10">
          <button onClick={() => history.push('about')} className="text-secondary-500 ">Go to About page</button>
        </div>

      </div>

    </>
  );
}

export default Home;
