import React, {useState} from "react";
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Button from "../atoms/Button";

interface Props {
  trigger: any,
  menu: any,
  className?: string,
  btnClass?: string,
  style?: any,
}

const Dropdown: React.FC<Props> = ({
                                     ...props
                                   }) => {
  const [open, setOpen] = useState(false)


  return (
    <div className="relative">
      <Button className={classnames(`${props.btnClass}`, {})} onClick={() => setOpen(!open)}>
        {props.trigger}
      </Button>

      <div className={classnames(`origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg`, {
        'block': open,
        'hidden': !open,
      })}>
        {props.menu}
      </div>
    </div>
  )
}

Dropdown.propTypes = {
  className: PropTypes.string,
  btnClass: PropTypes.string,
  style: PropTypes.any,
  trigger: PropTypes.any,
  menu: PropTypes.any,
}

Dropdown.defaultProps = {}

export default Dropdown;
