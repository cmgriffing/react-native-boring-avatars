import React, { PropsWithoutRef } from 'react';
import { getNumber, getRandomColor } from '../utilities';
import Svg, { Mask, Rect, G, Path, Circle } from 'react-native-svg';
import type { AvatarProps } from '../types';

const SvgAsAny = Svg as any;
const MaskAsAny = Mask as any;
const RectAsAny = Rect as any;
const CircleAsAny = Circle as any;
const PathAsAny = Path as any;

const SIZE = 90;
const COLORS = 5;

function generateColors(name: string, colors: string[]) {
  const numFromName = getNumber(name);
  const range = colors && colors.length;
  const colorsShuffle = Array.from({ length: COLORS }, (_, i) =>
    getRandomColor(numFromName + (i + 1), colors, range)
  );
  const iconColors = [];
  iconColors[0] = colorsShuffle[0];
  iconColors[1] = colorsShuffle[1];
  iconColors[2] = colorsShuffle[1];
  iconColors[3] = colorsShuffle[2];
  iconColors[4] = colorsShuffle[2];
  iconColors[5] = colorsShuffle[3];
  iconColors[6] = colorsShuffle[3];
  iconColors[7] = colorsShuffle[0];
  iconColors[8] = colorsShuffle[4];

  return iconColors;
}

const AvatarRing = (props: PropsWithoutRef<AvatarProps>) => {
  const cellColors = generateColors(props.name, props.colors);

  return (
    <SvgAsAny
      viewBox={'0 0 ' + SIZE + ' ' + SIZE}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
    >
      <MaskAsAny
        id="mask__ring"
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={SIZE}
        height={SIZE}
      >
        <RectAsAny
          width={SIZE}
          height={SIZE}
          rx={props.square ? undefined : SIZE * 2}
          fill="white"
        />
      </MaskAsAny>
      <G mask="url(#mask__ring)">
        <PathAsAny d="M0 0h90v45H0z" fill={cellColors[0]} />
        <PathAsAny d="M0 45h90v45H0z" fill={cellColors[1]} />
        <PathAsAny d="M83 45a38 38 0 00-76 0h76z" fill={cellColors[2]} />
        <PathAsAny d="M83 45a38 38 0 01-76 0h76z" fill={cellColors[3]} />
        <PathAsAny d="M77 45a32 32 0 10-64 0h64z" fill={cellColors[4]} />
        <PathAsAny d="M77 45a32 32 0 11-64 0h64z" fill={cellColors[5]} />
        <PathAsAny d="M71 45a26 26 0 00-52 0h52z" fill={cellColors[6]} />
        <PathAsAny d="M71 45a26 26 0 01-52 0h52z" fill={cellColors[7]} />
        <CircleAsAny cx={45} cy={45} r={23} fill={cellColors[8]} />
      </G>
    </SvgAsAny>
  );
};

export default AvatarRing;
