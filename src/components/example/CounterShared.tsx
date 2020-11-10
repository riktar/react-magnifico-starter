import React from "react";
import {observer} from "mobx-react-lite";
import {useStore} from "../../models/Store";
import CustomButton from "../ui/atoms/CustomButton";
import Box from "../ui/atoms/Box";

const CounterShared: React.FC = observer(() => {
  const {counter} = useStore();

  return (
    <Box elevation={'2'} padding={'3'} type={'default'}>
      <div className="mt-2 flex-row flex justify-between items-center text-base">
        <CustomButton shadow variant={'bordered'} rounded color={'error'}
                      onClick={counter.decrement}>
          <div className='flex items-center'>
            <div>
              <i className="fa fa-minus"/>
            </div>
          </div>
        </CustomButton>
        <div
          className="font-bold text-2xl text-center ml-6 mr-6"
        >
          {counter.count}
        </div>
        <CustomButton shadow variant={'bordered'} rounded color={'success'}
                      onClick={counter.increment}>
          <div className='flex items-center'>
            <div>
              <i className="fa fa-plus"/>
            </div>
          </div>
        </CustomButton>
      </div>
    </Box>
  );
});

export default CounterShared
