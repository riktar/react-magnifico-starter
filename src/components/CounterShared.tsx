import React from "react";
import {observer} from "mobx-react-lite";
import {useStore} from "../models/Store";
import Button from "./atoms/Button";

const CounterShared: React.FC = observer(() => {
  const {counter} = useStore();

  return (
    <div className="mt-2 flex-row flex justify-between items-center text-base">
      <Button variant={'bordered'} rounded color={'error'} style={{width: 80, height: 80}} onClick={counter.decrement}>
        -
      </Button>
      <p
        style={{fontVariant: "tabular-nums"}}
        className="font-bold text-2xl text-center ml-6 mr-6"
      >
        {counter.count}
      </p>
      <Button variant={'bordered'} rounded color={'success'} style={{width: 80, height: 80}}
              onClick={counter.increment}>
        +
      </Button>
    </div>
  );
});

export default CounterShared
