import React, {useEffect} from 'react';
import {
  ClockOutline,
  CreditCardOutline,
  SearchOutline,
  ThumbUpOutline,
  TrashOutline,
  UserGroupOutline
} from "heroicons-react"
import Button from "../../components/ui/atoms/Button";
import StatsCard from "../../components/ui/molecules/StatsCard";
import DataGrid, {providerInterface} from "../../components/ui/molecules/DataGrid";
import Box from "../../components/ui/atoms/Box";
import {useStore} from "../../models/Store";
import {observer} from "mobx-react-lite";
import MoreMenu from "../../components/ui/molecules/MoreMenu";

const AdminDashboard: React.FC = observer(() => {
  const {app: {dashboard}} = useStore()

  useEffect(() => {
    dashboard.fetchUsers()
  }, [dashboard])

  const ActionCell = ({value, row}: providerInterface) => (
    <MoreMenu
      actions={[
        <Button onClick={() => {
          console.log(value, row)
        }} key={'detail'} className='w-full mb-3' color={'secondary'}>
          <SearchOutline className='mr-5'/>
          <span>Detail very long</span>
        </Button>,
        <Button key={'detail'} className='w-full' color={'error'}>
          <TrashOutline className='mr-5'/>
          <span>Remove</span>
        </Button>,
      ]}/>
  )

  return (
    <>
      <Box elevation={'1'} type={'paper'} padding={'2'} className='flex items-center'>
        <h5 className="font-bold pr-5 border-r mr-5">Dashboard</h5>
        <span>A short description</span>
        <div className='md:flex hidden'>
          <Button size={'xs'} color={'success'} variant={'bordered'} className='ml-3'>Rapid Action</Button>
          <Button size={'xs'} color={'error'} variant={'bordered'} className='ml-3'>Another rapid action</Button>
        </div>
      </Box>
      <div className="p-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 mb-4">
          <StatsCard
            color={'primary'}
            title={<>Account Balance</>}
            value={<>35.670 €</>}
            icon={<CreditCardOutline className='text-white h-8 w-8'/>}
            footer={<Button color={'primary'} size={'sm'}>View All</Button>}
          />
          <StatsCard
            color={'blue'}
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
          <Box elevation={'1'} rounded className='bg-white p-5'>
            <DataGrid
              paging={{
                defaultCurrentPage: 0,
                defaultPageSize: 8
              }}
              loading={dashboard.users.loading}
              columns={[
                {
                  name: 'action',
                  title: ' ' // Precedentemente Codice FW
                },
                {
                  name: 'name',
                  title: 'Name'
                },
                {
                  name: 'email',
                  title: 'Email'
                },
                {
                  name: 'phone',
                  title: 'Phone'
                },
                {
                  name: 'website',
                  title: 'Website'
                },

              ]}
              search
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
                    width: 250
                  },
                  {
                    columnName: 'email',
                    width: 250
                  },
                  {
                    columnName: 'phone',
                    width: 250
                  },
                  {
                    columnName: 'website',
                  },
                  {
                    columnName: 'action',
                    width: 70
                  },
                ]
              }}
              rows={dashboard.users.data}
            />
          </Box>
        </div>
      </div>
    </>
  )
})

export default AdminDashboard;
