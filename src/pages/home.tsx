import React from 'react';
import Foo from "../components/Foo/Foo";

const Home: React.FC = () => {
  return (
    <>
      <div className="flex flex-col h-screen items-center justify-center">
        <h1 className="text-5xl text-primary-500 text-center">Magnifico React Starter</h1>
        <p className="text-gray-700">React + TypeScript + MobX + Tailwind = <strong><Foo bar={'❤️'}/></strong></p>
      </div>
    </>
  );
}

export default Home;