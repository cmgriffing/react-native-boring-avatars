export interface AvatarProps {
  size: number;
  name: string;
  square?: boolean;
  variant?: 'beam' | 'sunset' | 'bauhaus' | 'pixel' | 'ring'; // | 'marble';
  colors: string[];
  scaleFactor?: number;
}

export interface AvatarComponent {
  (props: AvatarProps, context?: any): React.ReactElement | null;
}
