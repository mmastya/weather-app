import React from 'react'

interface ItemsProps {
  children: React.ReactNode,
}

export const Item = ({ children }: ItemsProps) => {
  return (
    <div className="item">
      {children}
    </div>
  )
}
