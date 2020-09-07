import classnames from 'classnames';
import React from "react";
import PropTypes from 'prop-types'

interface Props {
  rounded?: boolean,
  elevation?: string,
  padding?: string,
  className?: string,
  style?: any,
  children: any
}

const Box: React.FC<Props> = ({
                                elevation = '0',
                                padding = '3',
                                rounded = false,
                                ...props
                              }) => {
  return (
    <div style={{'transition': 'all .15s ease', ...props.style}}
            className={classnames(`${props.className}`, {
              "shadow": elevation === '1',
              "shadow-lg": elevation === '2',
              "shadow-xl": elevation === '3',
              "shadow-2xl": elevation === '4',
              "rounded": rounded,
              "p-0": padding === '0',
              "p-3": padding === '1',
              "p-6": padding === '2',
              "p-10": padding === '3',
              "p-16": padding === '4',

            })}>
      {props.children}
    </div>
  )
}

Box.propTypes = {
  className: PropTypes.string,
  rounded: PropTypes.bool,
  elevation: PropTypes.string,
  padding: PropTypes.string,
  children: PropTypes.any,
  style: PropTypes.any,
}

Box.defaultProps = {}

export default Box;
