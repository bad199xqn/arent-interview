import { LazyLoadImage } from "react-lazy-load-image-component";
import { LazyImageProps } from "./types";
import DefaultImage from "../../assets/images/default-image.png"

export function LazyImage(props: LazyImageProps) {
  const {width, height, src} = props
  return (
      <LazyLoadImage
        width={width}
        height={height}
        src={src}
        placeholderSrc={DefaultImage}
      />
  )
}