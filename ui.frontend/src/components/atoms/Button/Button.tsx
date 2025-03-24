import React from 'react'

type ButtonProps = {
   label: string
   onClick?: () => void
   variant?: 'primary' | 'secondary' | 'danger'
   disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({
   label,
   onClick,
   variant = 'primary',
   disabled = false,
}) => {
   return (
      <button
         className={`yamaha-btn ${variant}`}
         onClick={onClick}
         disabled={disabled}
      >
         {label}
      </button>
   )
}

export default Button
