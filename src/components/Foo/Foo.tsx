import React from 'react';

interface Props {
  bar: string;
}

const Foo: React.FC<Props> = ({bar}: Props) => {
  return (
    <>
      <span>{bar}</span>
    </>
  );
}

export default Foo;
