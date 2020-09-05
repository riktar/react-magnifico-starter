import React from "react";
import {observer} from "mobx-react-lite";
import {useStore} from "../models/Store";


const CounterShared: React.FC = observer(() => {
  const {counter} = useStore();

  return (
    <div className="mt-20 flex-col">
      <p className="font-bold text-2xl text-center">Counter</p>
      <p
        style={{fontVariant: "tabular-nums"}}
        className="font-bold text-2xl text-center"
      >
        {counter.count}
      </p>
      <div className="mt-2 flex-row flex justify-between">
        <button className="p-1 pl-2 pr-2 border" onClick={counter.decrement}>-</button>
        <button className="p-1 pl-2 pr-2 border" onClick={counter.increment}>+</button>
      </div>
    </div>
  );
});

export default CounterShared
