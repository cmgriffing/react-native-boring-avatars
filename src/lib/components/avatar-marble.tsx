import * as React from 'react'
import { hashCode, getUnit, getRandomColor } from '../utilities'
import Svg, {
  Mask,
  Rect,
  G,
  Filter,
  Defs,
  Path,
  FeFlood,
  FeBlend,
  FeGaussianBlur,
} from 'react-native-svg'
import type { AvatarProps } from '../types'

const ELEMENTS = 3
const SIZE = 80

function generateColors(name: string, colors: string[]) {
  const numFromName = hashCode(name)
  const range = colors && colors.length

  const elementsProperties = Array.from({ length: ELEMENTS }, (_, i) => ({
    color: getRandomColor(numFromName + i, colors, range),
    translateX: getUnit(numFromName * (i + 1), SIZE / 10, 1),
    translateY: getUnit(numFromName * (i + 1), SIZE / 10, 2),
    scale: 1.2 + getUnit(numFromName * (i + 1), SIZE / 20) / 10,
    rotate: getUnit(numFromName * (i + 1), 360, 1),
  }))

  return elementsProperties
}

const AvatarMarble = (props: React.PropsWithoutRef<AvatarProps>) => {
  const { name, colors, square, size, ...otherProps } = props
  const properties = generateColors(name, colors)
  const maskID = React.useId()

  return (
    <Svg
      viewBox={'0 0 ' + SIZE + ' ' + SIZE}
      fill="none"
      role="img"
      width={size}
      height={size}
      {...otherProps}
    >
      <Mask
        id={maskID}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={SIZE}
        height={SIZE}
      >
        <Rect
          width={SIZE}
          height={SIZE}
          rx={square ? undefined : SIZE * 2}
          fill="#FFFFFF"
        />
      </Mask>
      <G mask={`url(#${maskID})` as `url(#${string})`}>
        <Rect width={SIZE} height={SIZE} fill={properties[0].color} />
        <Path
          filter={`url(#filter_${maskID})`}
          d="M32.414 59.35L50.376 70.5H72.5v-71H33.728L26.5 13.381l19.057 27.08L32.414 59.35z"
          fill={properties[1].color}
          transform={
            'translate(' +
            properties[1].translateX +
            ' ' +
            properties[1].translateY +
            ') rotate(' +
            properties[1].rotate +
            ' ' +
            SIZE / 2 +
            ' ' +
            SIZE / 2 +
            ') scale(' +
            properties[2].scale +
            ')'
          }
        />
        <Path
          filter={`url(#filter_${maskID})`}
          // @ts-ignore
          style={{
            mixBlendMode: 'overlay',
          }}
          d="M22.216 24L0 46.75l14.108 38.129L78 86l-3.081-59.276-22.378 4.005 12.972 20.186-23.35 27.395L22.215 24z"
          fill={properties[2].color}
          transform={
            'translate(' +
            properties[2].translateX +
            ' ' +
            properties[2].translateY +
            ') rotate(' +
            properties[2].rotate +
            ' ' +
            SIZE / 2 +
            ' ' +
            SIZE / 2 +
            ') scale(' +
            properties[2].scale +
            ')'
          }
        />
      </G>
      <Defs>
        <Filter
          id={`filter_${maskID}`}
          filterUnits="userSpaceOnUse"
          // @ts-ignore
          colorInterpolationFilters="sRGB"
        >
          <FeFlood floodOpacity={0} result="BackgroundImageFix" />
          <FeBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <FeGaussianBlur stdDeviation={7} result="effect1_foregroundBlur" />
        </Filter>
      </Defs>
    </Svg>
  )
}

export default AvatarMarble
