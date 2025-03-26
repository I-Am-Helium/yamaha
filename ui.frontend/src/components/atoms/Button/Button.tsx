import React from 'react'

export enum ButtonVariant {
   Primary = 'primary',
   Secondary = 'secondary',
   Link = 'link',
}

export enum ButtonSize {
   Large = 'btn-large',
   Medium = 'btn-medium',
   Small = 'btn-small',
}

type ButtonProps = {
   label: string
   onClick?: () => void
   variant?: ButtonVariant
   size?: ButtonSize
   disabled?: boolean
   icon?: string
}

const Button: React.FC<ButtonProps> = ({
   label,
   onClick,
   variant = ButtonVariant.Primary,
   size = ButtonSize.Large,
   disabled = false,
   icon,
}) => {
   return (
      <div className={`yamaha-btn ${variant} ${size}`}>
         <button className="cmp-button" onClick={onClick} disabled={disabled}>
            <span className="cmp-button__text">{label}</span>
            {icon && <i className={`${icon} cmp-button__icon`} />}
         </button>
      </div>
   )
}

export default Button
