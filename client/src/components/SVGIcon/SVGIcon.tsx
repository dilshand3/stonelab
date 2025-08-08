import React, { FC } from 'react'

interface IsvgIcon {
  path: string;
  viewBox: string;
  height: string;
  width: string;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

const SVGIcon: FC<IsvgIcon> = ({
  path,
  viewBox,
  height,
  width,
  color,
  className,
  ariaLabel
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      height={height}
      width={width}
      color={color}
      className={className}
      aria-label={ariaLabel}
    >
      <path fillRule="evenodd" clipRule="evenodd" d={path} fill={color} />
    </svg>
  )
}

export default SVGIcon