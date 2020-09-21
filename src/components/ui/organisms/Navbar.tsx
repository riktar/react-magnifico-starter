import React from "react";
import PropTypes from "prop-types";
import Button from "../atoms/Button";
import Dropdown from "../molecules/Dropdown";
import {BellOutline, Menu, UserOutline} from "heroicons-react"
import Box from "../atoms/Box";
import {useStore} from "../../../models/Store";

const Navbar: React.FC = () => {
  const {layout} = useStore()
  return (
    <nav className="w-100 shadow bg-white fixed z-40 top-0" style={{width: `calc( 100% - ${layout.calculate()}px )`}}>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">

          <div className="absolute inset-y-0 left-0 ml-5 flex items-center sm:hidden">
            <Button
              onClick={() => layout.toggleSidebar()}
              className="inline-flex items-center justify-center hover:text-secondary-500"
              aria-label="Main menu" aria-expanded="false">
              <Menu/>
            </Button>
          </div>

          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:block">
              <div className="flex">
                <Button
                  color={'secondary'}
                  className="mr-10"
                  onClick={() => layout.toggleSidebar()}
                >
                  <Menu/>
                </Button>
                <Button
                  color={'secondary'}
                  className="mr-10">Dashboard</Button>
                <Button
                  color={'secondary'}
                  className="mr-10">Team</Button>
                <Button
                  color={'secondary'}
                  className="mr-10">Project</Button>
                <Button
                  color={'secondary'}>Calendar</Button>
              </div>
            </div>
          </div>

          {window.innerWidth < 700 && layout.sidebar.open
            ? null
            :
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <Button
                color={'secondary'}
                className="border-2 border-transparent p-1"
                aria-label="Notifications">
                <BellOutline/>
              </Button>

              <div className="ml-3 relative">
                <Dropdown
                  btnClass={"hover:text-secondary-500 border-2 border-transparent p-1"}
                  dropClass={"w-48 origin-top-right right-0"}
                  trigger={<UserOutline/>}
                  menu={
                    <Box className="rounded-md bg-white" elevation={'1'}>
                      <Button className='py-2 px-4 w-full' color={'secondary'}>Sign out</Button>
                    </Box>
                  }/>
              </div>
            </div>
          }

        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  color: PropTypes.string,
  shadow: PropTypes.bool,
  className: PropTypes.string,
}

Navbar.defaultProps = {}

export default Navbar
