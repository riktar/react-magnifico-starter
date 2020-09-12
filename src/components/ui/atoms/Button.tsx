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

  const decorateButton = () => {
    switch (variant) {
      case 'text': {
        return {
          "hover:text-primary-500": color === 'primary',
          "hover:text-secondary-500": color === 'secondary',
          "hover:text-green-500": color === 'success',
          "hover:text-yellow-500": color === 'warning',
          "hover:text-red-500": color === 'error',
          "text-base": size === 'md',
          "text-sm": size === 'sm',
          "text-xs": size === 'xs',
          "text-xl": size === 'lg',
          "text-3xl": size === 'xl',
        }
      }
      case 'bordered': {
        return {
          "border-solid border": true,
          "border-primary-500 text-primary-500 active:bg-primary-200": color === 'primary',
          "border-secondary-500 text-secondary-500 active:bg-secondary-200": color === 'secondary',
          "border-green-500 text-green-500 active:bg-green-200": color === 'success',
          "border-yellow-500 text-yellow-500 active:bg-yellow-200": color === 'warning',
          "border-red-500 text-red-500 active:bg-red-200": color === 'error',

          "shadow hover:shadow-md": shadow,
          "rounded-lg": rounded,

          "text-base px-3 py-2": size === 'md',
          "text-sm px-2 py-2": size === 'sm',
          "text-xs py-1 px-2": size === 'xs',
          "text-xl px-3 py-2": size === 'lg',
          "text-3xl px-3 py-2": size === 'xl',
        }
      }
      case 'contained': {
        return {
          "bg-primary-500 active:bg-primary-700": color === 'primary',
          "bg-secondary-500 active:bg-secondary-700": color === 'secondary',
          "bg-gray-300 active:bg-gray-400": color === 'default',
          "bg-green-500 active:bg-green-700 text-white": color === 'success',
          "bg-yellow-500 active:bg-yellow-700 ": color === 'warning',
          "bg-red-500 active:bg-red-700 text-white": color === 'error',

          "shadow hover:shadow-md": shadow,
          "rounded-lg": rounded,

          "text-base px-3 py-2": size === 'md',
          "text-sm px-2 py-2": size === 'sm',
          "text-xs py-1 px-2": size === 'xs',
          "text-xl px-3 py-2": size === 'lg',
          "text-3xl px-3 py-2": size === 'xl',
        }
      }
    }
  }

  return (
    <button onClick={props.onClick} style={{...props.style}}
            className={classnames(`outline-none focus:outline-none transition duration-150 ease-in-out text-center ${props.className ?? ''}`, decorateButton())}>
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
