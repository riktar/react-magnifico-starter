import React from "react";
import PropTypes from 'prop-types'
import {useStore} from "../../models/Store";
import {observer} from "mobx-react-lite";

interface Props {
  className?: string,
  style?: any,
}

const Sidebar: React.FC<Props> = observer(({...props}) => {
  const {layout} = useStore()
  return (
    <div
      className="transition-all ease-in-out duration-150 h-full absolute z-10 left-0 inset-y-0 bg-gradient-to-t from-primary-500 to-primary-600 overflow-hidden text-white"
      style={{width: layout.calculate()}}>
      <div className="p-3">
        <div className="flex relative items-center">
          {
            layout.sidebar.open
            ? <h4 className="text-center font-bold flex-1">Magnifico</h4>
            : <h4 className="text-center font-bold flex-1">M</h4>
          }
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
