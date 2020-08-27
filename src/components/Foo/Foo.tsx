import React from 'react';


function Foo(props: { bar: string }) {
  return (
    <>
      <span>{props.bar}</span>
    </>
  );
}

export default Foo;
