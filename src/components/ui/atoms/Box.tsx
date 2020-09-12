import classnames from 'classnames';
import React from "react";
import PropTypes from 'prop-types'

interface Props {
  rounded?: boolean,
  border?: boolean,
  elevation?: string,
  padding?: string,
  type?: string,
  gradient?: string,
  className?: string,
  style?: any,
  children: any
}

const Box: React.FC<Props> = ({
                                elevation = '0',
                                padding = '0',
                                rounded = false,
                                border = false,
                                type = 'none',
                                gradient = 'none',
                                ...props
                              }) => {
  return (
    <div
            className={classnames(`${props.className ?? ''} overflow-auto`, {
              "bg-red-100 border-red-400 text-red-600": type === 'error',
              "bg-yellow-100 border-yellow-400 text-yellow-600": type === 'warning',
              "bg-green-100 border-green-400 text-green-600": type === 'success',
              "bg-gray-100 border-gray-400": type === 'default',
              "bg-primary-100 border-primary-600 text-primary-600": type === 'primary',
              "bg-secondary-100 border-secondary-600 text-secondary-600": type === 'secondary',
              "bg-white": type === 'paper',

              "bg-gradient-to-br from-primary-600 to-primary-500 text-white": gradient === 'primary',
              "bg-gradient-to-br from-secondary-600 to-secondary-500 text-white": gradient === 'secondary',
              "bg-gradient-to-br from-red-600 to-red-500 text-white": gradient === 'error',
              "bg-gradient-to-br from-green-600 to-green-500 text-white": gradient === 'success',
              "bg-gradient-to-br from-yellow-600 to-yellow-500 text-white": gradient === 'warning',

              "shadow": elevation === '1',
              "shadow-lg": elevation === '2',
              "shadow-xl": elevation === '3',
              "shadow-2xl": elevation === '4',
              "rounded-lg": rounded,
              "border": border,
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
  border: PropTypes.bool,
  elevation: PropTypes.string,
  gradient: PropTypes.string,
  padding: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.any,
  style: PropTypes.any,
}

Box.defaultProps = {}

export default Box;
