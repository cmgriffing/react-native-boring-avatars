import * as React from 'react';
import {
  getNumber,
  getUnit,
  getRandomColor,
  getBoolean,
  createScaleNumber,
} from '../utilities';
import Svg, { Mask, Rect, G, Circle, Line } from 'react-native-svg';
import type { PropsWithoutRef } from 'react';
import type { AvatarProps } from '../types';

const ELEMENTS = 4;
const SIZE = 80;

const SvgAsAny = Svg as any;
const MaskAsAny = Mask as any;
const RectAsAny = Rect as any;
const LineAsAny = Line as any;
const CircleAsAny = Circle as any;

const AvatarBauhaus = (props: PropsWithoutRef<AvatarProps>) => {
  const { name, colors, size } = props;
  const numFromName = getNumber(name);
  const range = colors && colors.length;
  const scaleNumber = createScaleNumber(SIZE, size);

  const SECOND_RECT_TRANSLATE_X = +scaleNumber(60);
  const SECOND_RECT_TRANSLATE_Y = +scaleNumber(20);
  const SECOND_RECT_HEIGHT_MODIFIER = +scaleNumber(8);

  const LINE_STROKE_WIDTH = +scaleNumber(5);

  const properties = Array.from({ length: ELEMENTS }, (_, i) => {
    const translateModifier = +scaleNumber(i + 17);
    return {
      color: getRandomColor(numFromName + i, colors, range),
      translateX: getUnit(
        numFromName * +scaleNumber(i + 1),
        size / 2 - translateModifier,
        1
      ),
      translateY: getUnit(
        numFromName * +scaleNumber(i + 1),
        size / 2 - translateModifier,
        2
      ),
      rotate: getUnit(numFromName * (i + 1), 360),
      isSquare: getBoolean(numFromName, 2),
    };
  });

  return (
    <SvgAsAny
      viewBox={'0 0 ' + size + ' ' + size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
    >
      <MaskAsAny
        id="mask__bauhaus"
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
      <G mask="url(#mask__bauhaus)">
        <RectAsAny width={size} height={size} fill={properties[0].color} />
        <RectAsAny
          x={(size - SECOND_RECT_TRANSLATE_X) / 2}
          y={(size - SECOND_RECT_TRANSLATE_Y) / 2}
          width={size}
          height={
            properties[1].isSquare ? size : size / SECOND_RECT_HEIGHT_MODIFIER
          }
          fill={properties[1].color}
          transform={
            'translate(' +
            properties[1].translateX +
            ' ' +
            properties[1].translateY +
            ') rotate(' +
            properties[1].rotate +
            ' ' +
            size / 2 +
            ' ' +
            size / 2 +
            ')'
          }
        />
        <CircleAsAny
          cx={size / 2}
          cy={size / 2}
          fill={properties[2].color}
          r={size / 5}
          transform={
            'translate(' +
            properties[2].translateX +
            ' ' +
            properties[2].translateY +
            ')'
          }
        />
        <LineAsAny
          x1={0}
          y1={size / 2}
          x2={size}
          y2={size / 2}
          strokeWidth={LINE_STROKE_WIDTH}
          stroke={properties[3].color}
          transform={
            'translate(' +
            properties[3].translateX +
            ' ' +
            properties[3].translateY +
            ') rotate(' +
            properties[3].rotate +
            ' ' +
            size / 2 +
            ' ' +
            size / 2 +
            ')'
          }
        />
      </G>
    </SvgAsAny>
  );
};

export default AvatarBauhaus;
