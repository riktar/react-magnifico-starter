import React, {useEffect, useRef, useState} from "react";
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Button from "../atoms/Button";

interface Props {
  trigger: any,
  menu: any,
  className?: string,
  btnClass?: string,
  dropClass?: string,
  style?: any,
}

const Dropdown: React.FC<Props> = ({
                                     ...props
                                   }) => {
  const [open, setOpen] = useState(false)
  const myRef: any = useRef(null);


  useEffect(() => {
    const eventClick = (e: any) => {
      let targetElement = e.target
      do {
        if (targetElement === myRef.current) {
          // click inside
          return
        }
        targetElement = targetElement.parentNode
      } while (targetElement)
      // click outside
      setOpen(false)
    }
    if (open) {
      window.addEventListener('click', eventClick)
    } else {
      window.removeEventListener('click', eventClick)
    }
    // cleanup
    return () => {
      window.removeEventListener('click', eventClick)
    }
  }, [open])


  return (
    <div className="relative" ref={myRef}>
      <Button className={classnames(`${props.btnClass}`, {})} onClick={() => setOpen(!open)}>
        {props.trigger}
      </Button>

      <div className={classnames(`${props.dropClass} absolute z-50 rounded-lg shadow-lg`, {
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
  dropClass: PropTypes.string,
  style: PropTypes.any,
  trigger: PropTypes.any,
  menu: PropTypes.any,
}

Dropdown.defaultProps = {}

export default Dropdown;
