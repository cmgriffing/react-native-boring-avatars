import * as React from 'react';
import { getNumber, getRandomColor } from '../utilities';
import Svg, {
  Mask,
  Rect,
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';
import type { AvatarProps } from '../types';
import type { PropsWithoutRef } from 'react';

const SvgAsAny = Svg as any;
const MaskAsAny = Mask as any;
const RectAsAny = Rect as any;
const StopAsAny = Stop as any;
const PathAsAny = Path as any;

const ELEMENTS = 4;
const SIZE = 80;

function generateColors(name: string, colors: string[]) {
  const numFromName = getNumber(name);
  const range = colors && colors.length;

  const elementsProperties = Array.from({ length: ELEMENTS }, (_, i) => ({
    color: getRandomColor(numFromName + i, colors, range),
  }));

  return elementsProperties;
}

const AvatarSunset = (props: PropsWithoutRef<AvatarProps>) => {
  const properties = generateColors(props.name, props.colors);
  const name = props.name.replace(/\s/g, '');

  return (
    <SvgAsAny
      viewBox={'0 0 ' + SIZE + ' ' + SIZE}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
    >
      <MaskAsAny
        id="mask__sunset"
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
      <G mask="url(#mask__sunset)">
        <PathAsAny
          fill={'url(#gradient_paint0_linear_' + name + ')'}
          d="M0 0h80v40H0z"
        />
        <PathAsAny
          fill={'url(#gradient_paint1_linear_' + name + ')'}
          d="M0 40h80v40H0z"
        />
      </G>
      <Defs>
        <LinearGradient
          id={'gradient_paint0_linear_' + name}
          x1={SIZE / 2}
          y1={0}
          x2={SIZE / 2}
          y2={SIZE / 2}
          gradientUnits="userSpaceOnUse"
        >
          <StopAsAny stopColor={properties[0].color} />
          <StopAsAny offset={1} stopColor={properties[1].color} />
        </LinearGradient>
        <LinearGradient
          id={'gradient_paint1_linear_' + name}
          x1={SIZE / 2}
          y1={SIZE / 2}
          x2={SIZE / 2}
          y2={SIZE}
          gradientUnits="userSpaceOnUse"
        >
          <StopAsAny stopColor={properties[2].color} />
          <StopAsAny offset={1} stopColor={properties[3].color} />
        </LinearGradient>
      </Defs>
    </SvgAsAny>
  );
};

export default AvatarSunset;