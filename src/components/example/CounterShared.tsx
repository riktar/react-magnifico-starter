import React from "react";
import {observer} from "mobx-react-lite";
import {useStore} from "../../models/Store";
import Button from "../atoms/Button";
import Box from "../atoms/Box";

const CounterShared: React.FC = observer(() => {
  const {counter} = useStore();

  return (
    <Box elevation={'2'} padding={'3'} type={'default'}>
      <div className="mt-2 flex-row flex justify-between items-center text-base">
        <Button shadow variant={'bordered'} rounded color={'error'}
                onClick={counter.decrement}>
          <div className='flex items-center'>
            <div>
              <i className="fa fa-minus"/>
            </div>
          </div>
        </Button>
        <div
          className="font-bold text-2xl text-center ml-6 mr-6"
        >
          {counter.count}
        </div>
        <Button shadow variant={'bordered'} rounded color={'success'}
                onClick={counter.increment}>
          <div className='flex items-center'>
            <div>
              <i className="fa fa-plus"/>
            </div>
          </div>
        </Button>
      </div>
    </Box>
  );
});

export default CounterShared
