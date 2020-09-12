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
  classNameContent?: string,
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
    <button onClick={props.onClick} style={{...props.style}}
            className={classnames(`outline-none focus:outline-none transition duration-150 ease-in-out text-center ${props.className ?? ''}`, {
              "": variant === 'text',
              "hover:text-primary-500": variant === 'text' && color === 'primary',
              "hover:text-secondary-500": variant === 'text' && color === 'secondary',
              "hover:text-green-500": variant === 'text' && color === 'success',
              "hover:text-yellow-500": variant === 'text' && color === 'warning',
              "hover:text-red-500": variant === 'text' && color === 'error',

              "leading-5": variant === 'bordered' || variant === 'contained',

              "border-solid border": variant === 'bordered',
              "border-primary-500 text-primary-500 active:bg-primary-200": variant === 'bordered' && color === 'primary',
              "border-secondary-500 text-secondary-500 active:bg-secondary-200": variant === 'bordered' && color === 'secondary',
              "border-green-500 text-green-500 active:bg-green-200": variant === 'bordered' && color === 'success',
              "border-yellow-500 text-yellow-500 active:bg-yellow-200": variant === 'bordered' && color === 'warning',
              "border-red-500 text-red-500 active:bg-red-200": variant === 'bordered' && color === 'error',

              "bg-primary-500 active:bg-primary-700": variant === 'contained' && color === 'primary',
              "bg-secondary-500 active:bg-secondary-700": variant === 'contained' && color === 'secondary',
              "bg-gray-300 active:bg-gray-400": variant === 'contained' && color === 'default',
              "bg-green-500 active:bg-green-700 text-white": variant === 'contained' && color === 'success',
              "bg-yellow-500 active:bg-yellow-700 ": variant === 'contained' && color === 'warning',
              "bg-red-500 active:bg-red-700 text-white": variant === 'contained' && color === 'error',

              "shadow hover:shadow-lg": shadow,
              "rounded-md": rounded,

              "text-base px-3 py-2": size === 'md',
              "text-sm px-2 py-1": size === 'sm',
              "text-xs px-2 py-1": size === 'xs',
              "text-xl px-3 py-2": size === 'lg',
              "text-3xl px-3 py-2": size === 'xl',
            })}>
      <div className={classnames(`flex items-center ${props.classNameContent ?? ''}`, {})}>{props.children}</div>
    </button>
  )
}

Button.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  variant: PropTypes.string,
  className: PropTypes.string,
  classNameContent: PropTypes.string,
  rounded: PropTypes.bool,
  shadow: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.any,
  style: PropTypes.any,
}

Button.defaultProps = {}

export default Button;
