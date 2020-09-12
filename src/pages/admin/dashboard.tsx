import React from 'react';
import {ClockOutline, CreditCardOutline, ThumbUpOutline, UserGroupOutline} from "heroicons-react"
import Button from "../../components/ui/atoms/Button";
import StatsCard from "../../components/ui/molecules/StatsCard";
import DataGrid, {columnInterface} from "../../components/ui/molecules/DataGrid";
import Box from "../../components/ui/atoms/Box";

const AdminDashboard: React.FC = () => {

  const ActionCell = ({value, row}: columnInterface) => (
    <div className={'flex justify-end'}>
      <Button onClick={() => {
        console.log(value, row)
      }} size={'sm'} variant={'contained'} color={'success'} className='mr-2' shadow
              rounded>Accept</Button>
      <Button size={'sm'} variant={'contained'} color={'error'} shadow rounded>Delete</Button>
    </div>)

  return (
    <div className="p-10">
      <h4 className="font-bold mb-4">Dashboard</h4>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 mb-4">
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

      <div className={'grid grid-cols-1 gap-4 mb-4'}>
        <Box elevation={'1'} rounded className='bg-white px-5'>
          <DataGrid
            columns={[
              {
                name: 'name',
                title: 'Name' // Precedentemente Codice FW
              },
              {
                name: 'surname',
                title: 'Surname' // Precedentemente Codice FW
              },
              {
                name: 'age',
                title: 'Age' // Precedentemente Codice FW
              },
              {
                name: 'action',
                title: ' ' // Precedentemente Codice FW
              },
            ]}
            providers={[
              {
                for: ['action'],
                formatterComponent: ActionCell
              }
            ]}
            table={{
              columnExtensions: [
                {
                  columnName: 'name',
                  width: 200 // Precedentemente Codice FW
                },
                {
                  columnName: 'surname',
                  width: 200 // Precedentemente Codice FW
                },
                {
                  columnName: 'action',
                  align: 'right',
                  width: 150 // Precedentemente Codice FW
                },
              ]
            }}
            rows={[
              {
                name: 'Riccardo',
                surname: 'Tartaglia',
                age: 31,
              },
              {
                name: 'Riccardo',
                surname: 'Tartaglia',
                age: 31,
              },
              {
                name: 'Riccardo',
                surname: 'Tartaglia',
                age: 31,
              }
            ]}
          />
        </Box>
      </div>

    </div>
  )
}

export default AdminDashboard;
