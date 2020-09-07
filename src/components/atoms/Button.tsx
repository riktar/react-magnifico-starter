import classnames from 'classnames';
import React from "react";
import PropTypes from 'prop-types'

interface Props {
  size?: string
  color?: string,
  variant?: string,
  rounded?: boolean,
  shadow?: boolean,
  className?: string,
  onClick?: any,
  style?: any,
  children: any
}

const Button: React.FC<Props> = ({
                                   size = 'md',
                                   color = 'default',
                                   variant = 'text',
                                   shadow = false,
                                   rounded = false,
                                   ...props
                                 }) => {
  return (
    <button onClick={props.onClick} style={{'transition': 'all .15s ease', ...props.style}}
            className={classnames(`font-bold outline-none focus:outline-none ${props.className}`, {
              "hover:underline": variant === 'text',
              "text-primary-500": variant === 'text' && color === 'primary',
              "text-secondary-500": variant === 'text' && color === 'secondary',
              "text-green-500": variant === 'text' && color === 'success',
              "text-yellow-500": variant === 'text' && color === 'warning',
              "text-red-500": variant === 'text' && color === 'error',

              "py-3 px-6": variant === 'bordered' || variant === 'contained',

              "border-solid border": variant === 'bordered',
              "border-primary-500 text-primary-500 active:bg-primary-200": variant === 'bordered' && color === 'primary',
              "border-secondary-500 text-secondary-500 active:bg-secondary-200": variant === 'bordered' && color === 'secondary',
              "border-green-500 text-green-500 active:bg-green-200": variant === 'bordered' && color === 'success',
              "border-yellow-500 text-yellow-500 active:bg-yellow-200": variant === 'bordered' && color === 'warning',
              "border-red-500 text-red-500 active:bg-red-200": variant === 'bordered' && color === 'error',

              "bg-primary-500 active:bg-primary-700": variant === 'contained' && color === 'primary',
              "bg-secondary-500 active:bg-secondary-700": variant === 'contained' && color === 'secondary',
              "bg-gray-300 active:bg-gray-400": variant === 'contained' && color === 'default',
              "bg-green-500 active:bg-green-700": variant === 'contained' && color === 'success',
              "bg-yellow-500 active:bg-yellow-700": variant === 'contained' && color === 'warning',
              "bg-red-500 active:bg-red-700": variant === 'contained' && color === 'error',

              "shadow hover:shadow-lg": shadow,
              "rounded": rounded,

              "text-base": size === 'md',
              "text-xs": size === 'sm',
              "text-xl": size === 'lg',
              "text-3xl": size === 'xl',
            })}>
      {props.children}
    </button>
  )
}

Button.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  variant: PropTypes.string,
  className: PropTypes.string,
  rounded: PropTypes.bool,
  shadow: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.any,
  style: PropTypes.any,
}

Button.defaultProps = {}

export default Button;
