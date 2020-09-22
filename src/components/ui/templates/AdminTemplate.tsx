import React from 'react';
import Navbar from "../organisms/Navbar";
import {useStore} from "../../../models/Store";
import {observer} from "mobx-react-lite";
import Sidebar from "../organisms/Sidebar";
import Box from "../atoms/Box";

const AdminTemplate: React.FC = observer(({...props}) => {
  const {layout} = useStore()
  return (
    <>
      <Sidebar/>
      <div className="transition-all ease-in-out duration-150 relative"
           style={{paddingLeft: layout.calculate()}}>
        <Navbar/>

        {window.innerWidth < 700 && layout.sidebar.open
          ? null
          : <main style={{minHeight: 'calc(100vh - 128px)', marginTop: 64}}>{props.children}</main>
        }
        <Box elevation={'1'} type={'paper'} padding={'2'} className='flex items-center justify-end'>
          <small>2020 &copy;</small> <small className="ml-2 font-bold">Magnifico</small>
        </Box>
      </div>
    </>
  );
})

export default AdminTemplate;
