import React from 'react';
import {useHistory} from "react-router-dom";
import Button from "../components/atoms/Button";

const Home: React.FC = () => {
  const history = useHistory()
  return (
    <>
      <div className="flex flex-col h-screen items-center justify-center content-center">
        <h1 className="text-primary-500">React Magnifico Starter</h1>
        <p>React Hooks + TypeScript + MobX + Tailwind = ️<span role='img' aria-label={'rocket'}>🚀</span></p>

        <div className="mt-10">
          <Button color={'secondary'} variant={'bordered'} onClick={() => history.push('admin')}>Admin UI Example</Button>
        </div>

      </div>

    </>
  );
}

export default Home;
