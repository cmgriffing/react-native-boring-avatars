import * as React from 'react';
import { createScaleNumber, getNumber, getRandomColor } from '../utilities';
import Svg, { Mask, Rect, G } from 'react-native-svg';
import type { AvatarProps } from '../types';

const SvgAsAny = Svg as any;
const MaskAsAny = Mask as any;
const RectAsAny = Rect as any;

const ELEMENTS = 64;
const SIZE = 80;

const AvatarPixel = (props: React.PropsWithoutRef<AvatarProps>) => {
  const { name, colors, size } = props;

  const scaleNumber = createScaleNumber(SIZE, size);

  const PIXEL_SIZE = +scaleNumber(10);

  const numFromName = getNumber(name);
  const range = colors && colors.length;

  const properties = Array.from({ length: ELEMENTS }, (_, i) => ({
    color: getRandomColor(numFromName % (i + 13), colors, range),
  }));

  return (
    <SvgAsAny
      viewBox={'0 0 ' + size + ' ' + size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
    >
      <MaskAsAny
        id="mask0"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={size}
        height={size}
      >
        <RectAsAny
          width={size}
          height={size}
          rx={props.square ? undefined : size * 2}
          fill="white"
        />
      </MaskAsAny>
      <G mask="url(#mask0)">
        {properties.map((property, index) => {
          const x = index % 8;
          const y = Math.floor(index / 8);
          return (
            <RectAsAny
              key={index}
              x={x * PIXEL_SIZE}
              y={y * PIXEL_SIZE}
              width={PIXEL_SIZE}
              height={PIXEL_SIZE}
              fill={property.color}
            />
          );
        })}
      </G>
    </SvgAsAny>
  );
};

export default AvatarPixel;
