import React from "react";
import {observer} from "mobx-react-lite";
import {useStore} from "../models/Store";
import Button from "./atoms/Button";
import Box from "./atoms/Box";

const CounterShared: React.FC = observer(() => {
  const {counter} = useStore();

  return (
    <Box elevation={'2'} className={'bg-gray-100'}>
      <div className="mt-2 flex-row flex justify-between items-center text-base">
        <Button shadow variant={'bordered'} rounded color={'error'} style={{width: 80, height: 80}}
                onClick={counter.decrement}>
          <i className="fa fa-minus"/>
        </Button>
        <div
          className="font-bold text-2xl text-center ml-6 mr-6"
        >
          {counter.count}
        </div>
        <Button shadow variant={'bordered'} rounded color={'success'} style={{width: 80, height: 80}}
                onClick={counter.increment}>
          <i className="fa fa-plus"/>
        </Button>
      </div>
    </Box>
  );
});

export default CounterShared
