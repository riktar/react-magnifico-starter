import React from "react";
import PropTypes from 'prop-types'
import {useStore} from "../../../models/Store";
import {observer} from "mobx-react-lite";
import CustomButton from "../atoms/CustomButton";
import {ClockOutline, CreditCardOutline, HomeOutline, UsersOutline} from "heroicons-react";
import {Badge} from "@windmill/react-ui";

interface Props {
  className?: string,
  style?: any,
}


const Sidebar: React.FC<Props> = observer(() => {
  const {layout} = useStore()

  const menuItems = [
    <>
      <HomeOutline/>{layout.sidebar.open ? <span className="ml-3">Home</span> : null}
    </>,
    <>
      <ClockOutline/>{layout.sidebar.open ? <span className="ml-3">History</span> : null}
    </>,
    <>
      <CreditCardOutline/>{layout.sidebar.open ? <span className="ml-3">Credit Card</span> : null}
    </>,
    <>
      <UsersOutline/>{layout.sidebar.open ? <span className="ml-3">Users</span> : null}
    </>,
  ]

  return (
    <div
      className="transition-all ease-in-out duration-150 h-full fixed z-40 left-0 inset-y-0 bg-gradient-to-t from-primary-500 to-primary-700 overflow-hidden text-white"
      style={{width: layout.calculate()}}>
      <div>
        <div className="flex relative items-center px-3 my-3">
          {
            layout.sidebar.open
              ?
              <div className='flex items-center justify-center text-center flex-1'>
                <span className="font-bold text-3xl mr-2">Magnifico</span>
                <Badge type={"success"}>Beta</Badge>
              </div>
              : <h4 className="text-center font-bold flex-1">M</h4>
          }
        </div>
        <div className="flex flex-col relative px-3">
          {layout.sidebar.open ? <h6 className='text-xs font-bold my-3 pl-3'>GENERAL</h6> : null}
          {menuItems.map((item, key) => <CustomButton key={key} size={'sm'} className='hover:bg-primary-800 mb-2' rounded
                                                      classNameContent={`p-2 ${(!layout.sidebar.open) ? ' justify-center' : ''}`}>{item}
          </CustomButton>)}
          <hr className='my-5'/>
          {layout.sidebar.open ? <h6 className='text-xs p-3 font-bold'>OTHER MENU</h6> : null}
          {menuItems.map((item, key) => <CustomButton key={key} size={'sm'} className='hover:bg-primary-800 mb-2' rounded
                                                      classNameContent={`p-2 ${(!layout.sidebar.open) ? ' justify-center' : ''}`}>{item}
          </CustomButton>)}
        </div>

      </div>
    </div>
  )
})

Sidebar.propTypes = {
  className: PropTypes.string,
  style: PropTypes.any,
}

Sidebar.defaultProps = {}

export default Sidebar;
