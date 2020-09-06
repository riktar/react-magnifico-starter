import React from "react";
import {observer} from "mobx-react-lite";
import {useStore} from "../models/Store";
import Button from "./ui/Button";

const CounterShared: React.FC = observer(() => {
  const {counter} = useStore();

  return (
    <div className="mt-20 flex-col">
      <p className="font-bold text-2xl text-center">Counter</p>

      <div className="mt-2 flex-row flex justify-between items-center text-base">
        <Button variant={'bordered'} color={'error'} onClick={counter.decrement}>
          -
        </Button>
        <p
          style={{fontVariant: "tabular-nums"}}
          className="font-bold text-2xl text-center ml-2 mr-2"
        >
          {counter.count}
        </p>
        <Button variant={'bordered'} color={'success'} onClick={counter.increment}>
          +
        </Button>
      </div>
    </div>
  );
});

export default CounterShared
