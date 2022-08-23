import React, { PropsWithoutRef } from 'react';
import {
  getNumber,
  getUnit,
  getBoolean,
  getRandomColor,
  getContrast,
  createScaleNumber,
} from '../utilities';
import Svg, { Mask, Rect, G, Path } from 'react-native-svg';
import type { AvatarProps } from '../types';

const SvgAsAny = Svg as any;
const MaskAsAny = Mask as any;
const RectAsAny = Rect as any;
const PathAsAny = Path as any;

const AvatarBeam = (props: PropsWithoutRef<AvatarProps>) => {
  const { name, colors, size } = props;

  const numFromName = getNumber(name);
  const range = colors && colors.length;

  const scaleNumber = createScaleNumber(36, size);

  const wrapperColor = getRandomColor(numFromName, colors, range);

  const faceColor = getContrast(wrapperColor);
  const backgroundColor = getRandomColor(numFromName + 13, colors, range);
  const wrapperRotate = getUnit(numFromName, 360);
  const isMouthOpen = getBoolean(numFromName, 2);
  const isCircle = getBoolean(numFromName, 1);
  const faceRotate = getUnit(numFromName, 10, 3);

  const EYE_Y = scaleNumber(14);
  const EYE_LEFT_X = scaleNumber(14);
  const EYE_RIGHT_X = scaleNumber(20);
  const EYE_WIDTH = scaleNumber(1.5);
  const EYE_HEIGHT = scaleNumber(2);
  const EYE_RADIUS_X = scaleNumber(1);

  const headBorderRadiusScaler = +scaleNumber(6);
  const HEAD_BORDER_RADIUS = isCircle ? size : size / headBorderRadiusScaler;

  const preTranslateRange = +scaleNumber(10);
  const translateThreshold = +scaleNumber(5);
  const translateScaler = +scaleNumber(9);

  const preTranslateX = getUnit(numFromName, preTranslateRange, 1);
  const wrapperTranslateX =
    preTranslateX < translateThreshold
      ? preTranslateX + size / translateScaler
      : preTranslateX;
  const preTranslateY = getUnit(numFromName, preTranslateRange, 2);
  const wrapperTranslateY =
    preTranslateY < translateThreshold
      ? preTranslateY + size / translateScaler
      : preTranslateY;

  const wrapperScaleScaler = +scaleNumber(12);
  const wrapperScaleDivider = +scaleNumber(10);

  const wrapperScale =
    1 + getUnit(numFromName, size / wrapperScaleScaler) / wrapperScaleDivider;

  const eyeSpreadRange = +scaleNumber(5);
  const eyeSpread = getUnit(numFromName, eyeSpreadRange);

  const mouthSpreadRange = +scaleNumber(3);
  const mouthSpread = getUnit(numFromName, mouthSpreadRange);

  const faceTranslateScaler = +scaleNumber(6);

  const faceTranslateXRange = +scaleNumber(8);
  const faceTranslateX =
    wrapperTranslateX > size / faceTranslateScaler
      ? wrapperTranslateX / 2
      : getUnit(numFromName, faceTranslateXRange, 1);

  const faceTranslateYRange = 7;
  const faceTranslateY =
    wrapperTranslateY > size / faceTranslateScaler
      ? wrapperTranslateY / 2
      : getUnit(numFromName, faceTranslateYRange, 2);

  const openMouthPath = `M${+scaleNumber(13)},${
    +scaleNumber(19) + mouthSpread
  } a${+scaleNumber(1)},${+scaleNumber(1) * 0.75} 0 0,0 ${+scaleNumber(10)},0`;

  const closedMouthPath = `M${+scaleNumber(15)} ${
    +scaleNumber(19) + mouthSpread
  }c${+scaleNumber(2)} ${+scaleNumber(1)} ${+scaleNumber(4)} ${+scaleNumber(
    1
  )} ${+scaleNumber(6)} 0`;

  return (
    <SvgAsAny
      viewBox={'0 0 ' + size + ' ' + size}
      fill="none"
      width={size}
      height={size}
    >
      <MaskAsAny
        id="mask__beam"
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
      <G mask="url(#mask__beam)">
        <RectAsAny width={size} height={size} fill={backgroundColor} />
        <RectAsAny
          x="0"
          y="0"
          width={size}
          height={size}
          transform={
            'translate(' +
            wrapperTranslateX +
            ' ' +
            wrapperTranslateY +
            ') rotate(' +
            wrapperRotate +
            ' ' +
            size / 2 +
            ' ' +
            size / 2 +
            ') scale(' +
            wrapperScale +
            ')'
          }
          fill={wrapperColor}
          rx={HEAD_BORDER_RADIUS}
        />
        <G
          transform={
            'translate(' +
            faceTranslateX +
            ' ' +
            faceTranslateY +
            ') rotate(' +
            faceRotate +
            ' ' +
            size / 2 +
            ' ' +
            size / 2 +
            ')'
          }
        >
          {isMouthOpen ? (
            <PathAsAny
              d={closedMouthPath}
              stroke={faceColor}
              fill="none"
              strokeLinecap="round"
              strokeWidth={+scaleNumber(1)}
            />
          ) : (
            <PathAsAny d={openMouthPath} fill={faceColor} />
          )}
          <RectAsAny
            x={+EYE_LEFT_X - eyeSpread}
            y={EYE_Y}
            width={EYE_WIDTH}
            height={EYE_HEIGHT}
            rx={EYE_RADIUS_X}
            stroke="none"
            fill={faceColor}
          />
          <RectAsAny
            x={+EYE_RIGHT_X + eyeSpread}
            y={EYE_Y}
            width={EYE_WIDTH}
            height={EYE_HEIGHT}
            rx={EYE_RADIUS_X}
            stroke="none"
            fill={faceColor}
          />
        </G>
      </G>
    </SvgAsAny>
  );
};

export default AvatarBeam;
