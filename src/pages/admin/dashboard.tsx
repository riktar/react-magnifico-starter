import React from 'react';
import {useHistory} from "react-router-dom";
import Box from "../../components/atoms/Box";
import {UserOutline, CreditCardOutline} from "heroicons-react"
import Button from "../../components/atoms/Button";

const AdminDashboard: React.FC = () => {
  const history = useHistory()
  return (
    <div className="p-10">
      <h4 className="font-bold mb-3">Dashboard</h4>
      <div className="grid md:grid-cols-4 sm:grid-cols-1 gap-4">
        <Box rounded type={'paper'} elevation={'1'} padding={'2'}>
          <div className='flex'>
            <div className='flex w-2/6 justify-center'>
              <CreditCardOutline className='w-16 h-16 text-gray-500'/>
            </div>
            <div className='ml-3 w-4/6 relative'>
              <h5 className='text-gray-500 font-bold'>Account Balance</h5>
              <p>1,000,000$</p>
            </div>
          </div>
          <Button className='w-full mt-3 font-bold' size='sm' color={'primary'} classNameContent='justify-center'>VIEW ALL</Button>
        </Box>
        <Box rounded type={'paper'} elevation={'1'} padding={'2'}>
          <div className='flex'>
            <div className='flex w-2/6 justify-center'>
              <CreditCardOutline className='w-16 h-16 text-gray-500'/>
            </div>
            <div className='ml-3 w-4/6 relative'>
              <h5 className='text-gray-500 font-bold'>Account Balance</h5>
              <p>1,000,000$</p>
            </div>
          </div>
          <Button className='w-full mt-3 font-bold' size='sm' classNameContent='justify-center'>VIEW ALL</Button>
        </Box>
        <Box rounded type={'paper'} elevation={'1'} padding={'2'}>
          <div className='flex'>
            <div className='flex w-2/6 justify-center'>
              <CreditCardOutline className='w-16 h-16 text-gray-500'/>
            </div>
            <div className='ml-3 w-4/6 relative'>
              <h5 className='text-gray-500 font-bold'>Account Balance</h5>
              <p>1,000,000$</p>
            </div>
          </div>
          <Button className='w-full mt-3 font-bold' size='sm' classNameContent='justify-center'>VIEW ALL</Button>
        </Box>
        <Box rounded type={'paper'} elevation={'1'} padding={'2'}>
          <div className='flex'>
            <div className='flex w-2/6 justify-center'>
              <CreditCardOutline className='w-16 h-16 text-gray-500'/>
            </div>
            <div className='ml-3 w-4/6 relative'>
              <h5 className='text-gray-500 font-bold'>Account Balance</h5>
              <p>1,000,000$</p>
            </div>
          </div>
          <Button className='w-full mt-3 font-bold' size='sm' classNameContent='justify-center'>VIEW ALL</Button>
        </Box>
      </div>

    </div>
  );
}

export default AdminDashboard;
