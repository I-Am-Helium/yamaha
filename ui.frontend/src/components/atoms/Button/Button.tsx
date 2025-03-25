import React from 'react'

type ButtonProps = {
   label: string
   onClick?: () => void
   variant?: 'primary' | 'secondary' | 'link'
   disabled?: boolean
   icon?: string
}

const Button: React.FC<ButtonProps> = ({
   label,
   onClick,
   variant = 'primary',
   disabled = false,
   icon,
}) => {
   return (
      <div className="yamaha-btn">
         <button
            className={`cmp-button ${variant}`}
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
