import { FC } from 'react';

type DeleteIconProps = {
  onClick: () => void;
}

export const DeleteIcon: FC<DeleteIconProps> = ({ onClick }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path fill="currentColor"
            fillRule="evenodd"
            d="M6,19 C6,20.1 6.9,21 8,21 L16,21 C17.1,21 18,20.1 18,19 L18,7 L6,7 L6,19 Z M19,4 L15.5,4 L14.5,3 L9.5,3 L8.5,4 L5,4 L5,6 L19,6 L19,4 Z"
            onClick={onClick}
      />
    </svg>
  )
}
