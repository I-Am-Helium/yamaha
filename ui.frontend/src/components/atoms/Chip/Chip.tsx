import { FC } from 'react'
import './Chip.scss'

type ChipModel = {
   label: string
   icon?: string
   iconPosition?: 'left' | 'right'
   size?: 'xl' | 'lg' | 'md' | 'sm'
   variant?: 'fill' | 'outline'
}

const Chip: FC<ChipModel> = ({
   label,
   icon,
   iconPosition = 'left',
   size = 'md',
   variant = 'fill',
}) => {
   return (
      <div
         className={`chip chip--${size} chip--${variant} ${icon ? `chip--${iconPosition}` : ''}`}
      >
         {icon && <i className={icon} />}
         <span>{label}</span>
      </div>
   )
}

export default Chip
