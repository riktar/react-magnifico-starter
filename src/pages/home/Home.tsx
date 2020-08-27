import React from 'react';
import Foo from "../../components/Foo/Foo";


function Home() {
  return (
    <>
      <h1>Welcome</h1>
      <p>Your name is: <Foo bar={'Riccardo'}/></p>
    </>
  );
}

export default Home;
