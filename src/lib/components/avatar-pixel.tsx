import * as React from 'react';
import { getNumber, getRandomColor } from '../utilities';
import Svg, { Mask, Rect, G } from 'react-native-svg';
import type { AvatarProps } from '../types';

const SvgAsAny = Svg as any;
const MaskAsAny = Mask as any;
const RectAsAny = Rect as any;

const ELEMENTS = 64;
const SIZE = 80;

function generateColors(name: string, colors: string[]) {
  const numFromName = getNumber(name);
  const range = colors && colors.length;

  const elementsProperties = Array.from({ length: ELEMENTS }, (_, i) => ({
    color: getRandomColor(numFromName % (i + 13), colors, range),
  }));

  return elementsProperties;
}

const AvatarPixel = (props: React.PropsWithoutRef<AvatarProps>) => {
  const properties = generateColors(props.name, props.colors);

  return (
    <SvgAsAny
      viewBox={'0 0 ' + SIZE + ' ' + SIZE}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
    >
      <MaskAsAny
        id="mask0"
        mask-type="alpha"
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
      <G mask="url(#mask0)">
        <RectAsAny width={10} height={10} fill={properties[0].color} />
        <RectAsAny x={20} width={10} height={10} fill={properties[1].color} />
        <RectAsAny x={40} width={10} height={10} fill={properties[2].color} />
        <RectAsAny x={60} width={10} height={10} fill={properties[3].color} />
        <RectAsAny x={10} width={10} height={10} fill={properties[4].color} />
        <RectAsAny x={30} width={10} height={10} fill={properties[5].color} />
        <RectAsAny x={50} width={10} height={10} fill={properties[6].color} />
        <RectAsAny x={70} width={10} height={10} fill={properties[7].color} />
        <RectAsAny y={10} width={10} height={10} fill={properties[8].color} />
        <RectAsAny y={20} width={10} height={10} fill={properties[9].color} />
        <RectAsAny y={30} width={10} height={10} fill={properties[10].color} />
        <RectAsAny y={40} width={10} height={10} fill={properties[11].color} />
        <RectAsAny y={50} width={10} height={10} fill={properties[12].color} />
        <RectAsAny y={60} width={10} height={10} fill={properties[13].color} />
        <RectAsAny y={70} width={10} height={10} fill={properties[14].color} />
        <RectAsAny
          x={20}
          y={10}
          width={10}
          height={10}
          fill={properties[15].color}
        />
        <RectAsAny
          x={20}
          y={20}
          width={10}
          height={10}
          fill={properties[16].color}
        />
        <RectAsAny
          x={20}
          y={30}
          width={10}
          height={10}
          fill={properties[17].color}
        />
        <RectAsAny
          x={20}
          y={40}
          width={10}
          height={10}
          fill={properties[18].color}
        />
        <RectAsAny
          x={20}
          y={50}
          width={10}
          height={10}
          fill={properties[19].color}
        />
        <RectAsAny
          x={20}
          y={60}
          width={10}
          height={10}
          fill={properties[20].color}
        />
        <RectAsAny
          x={20}
          y={70}
          width={10}
          height={10}
          fill={properties[21].color}
        />
        <RectAsAny
          x={40}
          y={10}
          width={10}
          height={10}
          fill={properties[22].color}
        />
        <RectAsAny
          x={40}
          y={20}
          width={10}
          height={10}
          fill={properties[23].color}
        />
        <RectAsAny
          x={40}
          y={30}
          width={10}
          height={10}
          fill={properties[24].color}
        />
        <RectAsAny
          x={40}
          y={40}
          width={10}
          height={10}
          fill={properties[25].color}
        />
        <RectAsAny
          x={40}
          y={50}
          width={10}
          height={10}
          fill={properties[26].color}
        />
        <RectAsAny
          x={40}
          y={60}
          width={10}
          height={10}
          fill={properties[27].color}
        />
        <RectAsAny
          x={40}
          y={70}
          width={10}
          height={10}
          fill={properties[28].color}
        />
        <RectAsAny
          x={60}
          y={10}
          width={10}
          height={10}
          fill={properties[29].color}
        />
        <RectAsAny
          x={60}
          y={20}
          width={10}
          height={10}
          fill={properties[30].color}
        />
        <RectAsAny
          x={60}
          y={30}
          width={10}
          height={10}
          fill={properties[31].color}
        />
        <RectAsAny
          x={60}
          y={40}
          width={10}
          height={10}
          fill={properties[32].color}
        />
        <RectAsAny
          x={60}
          y={50}
          width={10}
          height={10}
          fill={properties[33].color}
        />
        <RectAsAny
          x={60}
          y={60}
          width={10}
          height={10}
          fill={properties[34].color}
        />
        <RectAsAny
          x={60}
          y={70}
          width={10}
          height={10}
          fill={properties[35].color}
        />
        <RectAsAny
          x={10}
          y={10}
          width={10}
          height={10}
          fill={properties[36].color}
        />
        <RectAsAny
          x={10}
          y={20}
          width={10}
          height={10}
          fill={properties[37].color}
        />
        <RectAsAny
          x={10}
          y={30}
          width={10}
          height={10}
          fill={properties[38].color}
        />
        <RectAsAny
          x={10}
          y={40}
          width={10}
          height={10}
          fill={properties[39].color}
        />
        <RectAsAny
          x={10}
          y={50}
          width={10}
          height={10}
          fill={properties[40].color}
        />
        <RectAsAny
          x={10}
          y={60}
          width={10}
          height={10}
          fill={properties[41].color}
        />
        <RectAsAny
          x={10}
          y={70}
          width={10}
          height={10}
          fill={properties[42].color}
        />
        <RectAsAny
          x={30}
          y={10}
          width={10}
          height={10}
          fill={properties[43].color}
        />
        <RectAsAny
          x={30}
          y={20}
          width={10}
          height={10}
          fill={properties[44].color}
        />
        <RectAsAny
          x={30}
          y={30}
          width={10}
          height={10}
          fill={properties[45].color}
        />
        <RectAsAny
          x={30}
          y={40}
          width={10}
          height={10}
          fill={properties[46].color}
        />
        <RectAsAny
          x={30}
          y={50}
          width={10}
          height={10}
          fill={properties[47].color}
        />
        <RectAsAny
          x={30}
          y={60}
          width={10}
          height={10}
          fill={properties[48].color}
        />
        <RectAsAny
          x={30}
          y={70}
          width={10}
          height={10}
          fill={properties[49].color}
        />
        <RectAsAny
          x={50}
          y={10}
          width={10}
          height={10}
          fill={properties[50].color}
        />
        <RectAsAny
          x={50}
          y={20}
          width={10}
          height={10}
          fill={properties[51].color}
        />
        <RectAsAny
          x={50}
          y={30}
          width={10}
          height={10}
          fill={properties[52].color}
        />
        <RectAsAny
          x={50}
          y={40}
          width={10}
          height={10}
          fill={properties[53].color}
        />
        <RectAsAny
          x={50}
          y={50}
          width={10}
          height={10}
          fill={properties[54].color}
        />
        <RectAsAny
          x={50}
          y={60}
          width={10}
          height={10}
          fill={properties[55].color}
        />
        <RectAsAny
          x={50}
          y={70}
          width={10}
          height={10}
          fill={properties[56].color}
        />
        <RectAsAny
          x={70}
          y={10}
          width={10}
          height={10}
          fill={properties[57].color}
        />
        <RectAsAny
          x={70}
          y={20}
          width={10}
          height={10}
          fill={properties[58].color}
        />
        <RectAsAny
          x={70}
          y={30}
          width={10}
          height={10}
          fill={properties[59].color}
        />
        <RectAsAny
          x={70}
          y={40}
          width={10}
          height={10}
          fill={properties[60].color}
        />
        <RectAsAny
          x={70}
          y={50}
          width={10}
          height={10}
          fill={properties[61].color}
        />
        <RectAsAny
          x={70}
          y={60}
          width={10}
          height={10}
          fill={properties[62].color}
        />
        <RectAsAny
          x={70}
          y={70}
          width={10}
          height={10}
          fill={properties[63].color}
        />
      </G>
    </SvgAsAny>
  );
};

export default AvatarPixel;
