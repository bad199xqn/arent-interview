import { SVGProps } from "react"

export const CloseIcon = ({
  width = 32,
  height = 32,
  color = "#FF963C",
  ...svgOthers
}: SVGProps<SVGSVGElement>) => {
  return (
    <svg width={width} height={height} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgOthers}>
      <rect opacity="0.01" width="32" height="32" fill={color} />
      <path d="M7 7L26 26" stroke="#FF963C" strokeWidth="3" />
      <path d="M7 26L26 7" stroke="#FF963C" strokeWidth="3" />
    </svg>
  )
}