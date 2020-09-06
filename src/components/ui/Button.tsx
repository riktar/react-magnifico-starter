import classnames from 'classnames';
import React from "react";
import PropTypes from 'prop-types'

interface Props {
  size?: string
  color?: string,
  variant?: string,
  className?: string,
  onClick?: any,
  children: any
}

const Button: React.FC<Props> = ({
                                   size = 'md',
                                   color = 'default',
                                   variant = 'text',
                                   ...props
                                 }) => {
  return (
    <button onClick={props.onClick}
            className={classnames(`box-border outline-none focus:outline-none ${props.className}`, {
              "hover:bg-gray-200 active:bg-gray-300": variant === 'text',
              "text-primary-500": variant === 'text' && color === 'primary',
              "text-secondary-500": variant === 'text' && color === 'secondary',
              "text-green-500": variant === 'text' && color === 'success',
              "text-yellow-500": variant === 'text' && color === 'warning',
              "text-red-500": variant === 'text' && color === 'error',

              "border-2 active:bg-gray-300": variant === 'bordered',
              "border-primary-500 text-primary-500": variant === 'bordered' && color === 'primary',
              "border-secondary-500 text-secondary-500": variant === 'bordered' && color === 'secondary',
              "border-green-500 text-green-500": variant === 'bordered' && color === 'success',
              "border-yellow-500 text-yellow-500": variant === 'bordered' && color === 'warning',
              "border-red-500 text-red-500": variant === 'bordered' && color === 'error',

              "bg-primary-500 active:bg-primary-700": variant === 'contained' && color === 'primary',
              "bg-secondary-500 active:bg-secondary-700": variant === 'contained' && color === 'secondary',
              "bg-gray-300 active:bg-gray-400": variant === 'contained' && color === 'default',
              "bg-green-500 active:bg-green-700": variant === 'contained' && color === 'success',
              "bg-yellow-500 active:bg-yellow-700": variant === 'contained' && color === 'warning',
              "bg-red-500 active:bg-red-700": variant === 'contained' && color === 'error',

              "py-2 px-5 text-base": size === 'md',
              "py-1 px-3 text-xs": size === 'sm',
              "py-2 px-5 text-xl": size === 'lg',
              "py-2 px-5 text-3xl": size === 'xl',
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
  onClick: PropTypes.func,
  children: PropTypes.any
}

Button.defaultProps = {}

export default Button;
