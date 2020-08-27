import React from 'react';


function Foo(props: { bar: string }) {
    return (
        <>
            <div>{props.bar}</div>
        </>
    );
}

export default Foo;
