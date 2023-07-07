import { SVGProps } from "react"

export const MenuIcon = ({
  width = 32,
  height = 32,
  color = "#FF963C",
  ...svgOthers
}: SVGProps<SVGSVGElement>) => {
  return (
    <svg width={width} height={height} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgOthers}>
      <rect opacity="0.01" width="32" height="32" fill={color} />
      <path d="M3 8H29" stroke="#FF963C" stroke-width="3" />
      <path d="M3 16H29" stroke="#FF963C" stroke-width="3" />
      <path d="M3 24H29" stroke="#FF963C" stroke-width="3" />
    </svg>
  )
}