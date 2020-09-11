import React from 'react';
import Navbar from "../organisms/Navbar";
import {useStore} from "../../../models/Store";
import {observer} from "mobx-react-lite";
import Sidebar from "../organisms/Sidebar";

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
          : props.children
        }
      </div>
    </>
  );
})

export default AdminTemplate;
