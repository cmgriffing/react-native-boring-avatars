import React, { PropsWithoutRef } from 'react';
import {
  createScaleNumber,
  createScaleStringNumbers,
  getNumber,
  getRandomColor,
} from '../utilities';
import Svg, { Mask, Rect, G, Path, Circle } from 'react-native-svg';
import type { AvatarProps } from '../types';

const SvgAsAny = Svg as any;
const MaskAsAny = Mask as any;
const RectAsAny = Rect as any;
const CircleAsAny = Circle as any;
const PathAsAny = Path as any;

const SIZE = 90;
const COLORS = 5;

const AvatarRing = (props: PropsWithoutRef<AvatarProps>) => {
  const { colors, name, size } = props;

  const scaleNumber = createScaleNumber(SIZE, size);
  const scaleStringNumbers = createScaleStringNumbers(scaleNumber);

  const numFromName = getNumber(name);
  const range = colors && colors.length;
  const colorsShuffle = Array.from({ length: COLORS }, (_, i) =>
    getRandomColor(numFromName + (i + 1), colors, range)
  );
  const cellColors = [];
  cellColors[0] = colorsShuffle[0];
  cellColors[1] = colorsShuffle[1];
  cellColors[2] = colorsShuffle[1];
  cellColors[3] = colorsShuffle[2];
  cellColors[4] = colorsShuffle[2];
  cellColors[5] = colorsShuffle[3];
  cellColors[6] = colorsShuffle[3];
  cellColors[7] = colorsShuffle[0];
  cellColors[8] = colorsShuffle[4];

  return (
    <SvgAsAny
      viewBox={'0 0 ' + size + ' ' + size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
    >
      <MaskAsAny
        id="mask__ring"
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
      <G mask="url(#mask__ring)">
        <PathAsAny
          d={scaleStringNumbers('M0 0h90v45H0z')}
          fill={cellColors[0]}
        />
        <PathAsAny
          d={scaleStringNumbers('M0 45h90v45H0z', [])}
          fill={cellColors[1]}
        />
        <PathAsAny
          d={scaleStringNumbers('M83 45a38 38 0 00-76 0h76z', ['38'])}
          // d={`M${scaleNumber(83)} ${scaleNumber(45)}a38 38 0 00-${scaleNumber(
          //   76
          // )} 0h${scaleNumber(76)}z`}
          fill={cellColors[2]}
        />
        <PathAsAny
          d={scaleStringNumbers('M83 45a38 38 0 01-76 0h76z', ['38', '01'])}
          fill={cellColors[3]}
        />
        <PathAsAny
          d={scaleStringNumbers('M77 45a32 32 0 10-64 0h64z', ['32', '10'])}
          fill={cellColors[4]}
        />
        <PathAsAny
          d={scaleStringNumbers('M77 45a32 32 0 11-64 0h64z', ['32', '11'])}
          fill={cellColors[5]}
        />
        <PathAsAny
          d={scaleStringNumbers('M71 45a26 26 0 00-52 0h52z', ['26'])}
          fill={cellColors[6]}
        />
        <PathAsAny
          d={scaleStringNumbers('M71 45a26 26 0 01-52 0h52z', ['26', '01'])}
          fill={cellColors[7]}
        />
        <CircleAsAny
          cx={+scaleNumber(45)}
          cy={+scaleNumber(45)}
          r={+scaleNumber(23)}
          fill={cellColors[8]}
        />
      </G>
    </SvgAsAny>
  );
};

export default AvatarRing;
