import Dropdown from "./Dropdown";
import {DotsHorizontal} from "heroicons-react";
import Box from "../atoms/Box";
import React from "react";
import PropTypes from "prop-types";

interface Props {
  actions?: any
  icon?: any
  className?: string
}

const MoreMenu: React.FC<Props> = ({actions, icon = null, className}) => {
  return (
    <Dropdown
      btnClass={"hover:text-secondary-500 border-2 border-transparent p-1"}
      dropClass={className ? className : "w-48"}
      trigger={icon ? icon : <DotsHorizontal/>}
      menu={
        <Box className="rounded-md bg-white p-3">
          {actions.map((action: any) => action)}
        </Box>
      }/>
  )
}

MoreMenu.propTypes = {
  actions: PropTypes.array,
  icon: PropTypes.any,
  className: PropTypes.string
}

MoreMenu.defaultProps = {}

export default MoreMenu
