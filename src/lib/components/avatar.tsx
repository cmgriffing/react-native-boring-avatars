import React from 'react';
import AvatarBeam from './avatar-beam';
import AvatarSunset from './avatar-sunset';
import AvatarBauhaus from './avatar-bauhaus';
import AvatarPixel from './avatar-pixel';
import AvatarRing from './avatar-ring';
import AvatarMarble from './avatar-marble';
import type { AvatarProps } from '../types';

const variants = ['pixel', 'bauhaus', 'ring', 'beam', 'sunset', 'marble'];

function getAvatar(avatarType: string, avatarProps: AvatarProps): any {
  const avatars: any = {
    beam: () => <AvatarBeam {...avatarProps} />,
    sunset: () => <AvatarSunset {...avatarProps} />,
    marble: () => <AvatarMarble {...avatarProps} />,
    pixel: () => <AvatarPixel {...avatarProps} />,
    bauhaus: () => <AvatarBauhaus {...avatarProps} />,
    ring: () => <AvatarRing {...avatarProps} />,
  };
  return avatars[avatarType]();
}

const Avatar = ({
  variant = 'marble',
  colors = ['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90'],
  name = 'Sacagawea',
  square = false,
  size = 40,
  ...props
}) => {
  const avatarProps = { colors, name, size, square, ...props };
  const checkedVariant = () => {
    if (variants.includes(variant)) {
      return variant;
    }
    return 'sunset';
  };

  const avatarComponent = getAvatar(checkedVariant(), avatarProps);

  return avatarComponent;
};

// Avatar.propTypes = {
//   variant: PropTypes.oneOf(variants),
// };

export default Avatar;
