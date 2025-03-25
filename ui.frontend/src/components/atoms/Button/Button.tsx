import React from 'react'

enum ButtonVariant {
   Primary = 'primary',
   Secondary = 'secondary',
   Link = 'link',
}

enum ButtonSize {
   Large = 'large',
   Medium = 'medium',
   Small = 'small',
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
   size,
   disabled = false,
   icon,
}) => {
   return (
      <div className="yamaha-btn">
         <button
            className={`cmp-button ${variant} ${size}`}
            onClick={onClick}
            disabled={disabled}
         >
            <span className="cmp-button__text">{label}</span>
            {icon && <i className={`${icon} cmp-button__icon`} />}
         </button>
      </div>
   )
}

export default Button
