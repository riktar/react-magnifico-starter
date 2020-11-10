import React from 'react';
import {useHistory} from "react-router-dom";
import CustomButton from "../components/ui/atoms/CustomButton";

const Home: React.FC = () => {
  const history = useHistory()
  return (
    <>
      <div className="flex flex-col h-screen items-center justify-center content-center">
        <h1 className="text-primary-500">React Magnifico Starter</h1>
        <p>React Hooks + TypeScript + MobX + Tailwind = ️<span role='img' aria-label={'rocket'}>🚀</span></p>

        <div className="mt-10">
          <CustomButton color={'secondary'} variant={'bordered'} onClick={() => history.push('admin')}>Admin UI Example</CustomButton>
        </div>

      </div>

    </>
  );
}

export default Home;
