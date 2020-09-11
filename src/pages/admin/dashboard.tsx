import React from 'react';
import {useHistory} from "react-router-dom";
import {ClockOutline, CreditCardOutline, ThumbUpOutline, UserGroupOutline} from "heroicons-react"
import Button from "../../components/ui/atoms/Button";
import StatsCard from "../../components/ui/molecules/StatsCard";

const AdminDashboard: React.FC = () => {
  const history = useHistory()
  return (
    <div className="p-10">
      <h4 className="font-bold mb-3">Dashboard</h4>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4">
        <StatsCard
          color={'primary'}
          title={<>Account Balance</>}
          value={<>35.670 €</>}
          icon={<CreditCardOutline className='text-white h-8 w-8'/>}
          footer={<Button color={'primary'} size={'sm'}>View All</Button>}
        />
        <StatsCard
          color={'primary'}
          title={<>Users Signed</>}
          value={<>1.034</>}
          icon={<UserGroupOutline className='text-white h-8 w-8'/>}
          footer={<Button color={'primary'} size={'sm'}>View All</Button>}
        />
        <StatsCard
          color={'red'}
          title={<>Time Lost</>}
          value={<>1h 34m</>}
          icon={<ClockOutline className='text-white h-8 w-8'/>}
          footer={<>
            <Button color={'primary'} size={'sm'}>View All</Button>
            <Button color={'error'} className='ml-3' size={'sm'}>Recovery</Button>
          </>}
        />
        <StatsCard
          color={'green'}
          title={<>Task Done</>}
          value={<>10</>}
          icon={<ThumbUpOutline className='text-white h-8 w-8'/>}
          footer={<Button color={'primary'} size={'sm'}>View All</Button>}
        />
      </div>

    </div>
  );
}

export default AdminDashboard;
