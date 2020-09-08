import React from 'react';
import Navbar from "../components/organisms/Navbar";
import {useStore} from "../models/Store";
import {observer} from "mobx-react-lite";
import Sidebar from "../components/organisms/Sidebar";
import Button from "../components/atoms/Button";

const Admin: React.FC = observer(() => {
  const {layout} = useStore()
  return (
    <>
      <Sidebar/>
      <div className="transition-all ease-in-out duration-150 relative"
           style={{paddingLeft: layout.calculate()}}>
        <Navbar/>

        <div className="flex p-3">
          <Button className="text-white" variant={'contained'} color={'primary'}>Ciao</Button>
        </div>
      </div>
    </>
  );
})

export default Admin;
