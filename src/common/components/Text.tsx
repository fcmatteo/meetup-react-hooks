import { styled } from '../styles/styled';
import { Theme } from '../styles/theme';

interface TextProps {
  align?: 'inherit' | 'left' | 'right' | 'center';
  color?: 'primary' | 'secondary' | 'white';
  lineHeight?: number;
  mb?: number;
  mt?: number;
  size?: number;
  weight?: 200 | 400 | 500;
}

const getColor = (color: TextProps['color'], theme: Theme) => {
  switch (color) {
    case 'primary':
      return theme.textPrimary;
    case 'secondary':
      return theme.textSecondary;
    case 'white':
      return theme.white;
    default:
      return color;
  }
};

export const Text = styled.p<TextProps>`
  font-size: ${props => props.size}rem;
  margin-bottom: ${props => props.mb}rem;
  margin-top: ${props => props.mt}rem;
  text-align: ${props => props.align};
  font-weight: ${props => props.weight};
  color: ${props => getColor(props.color, props.theme)};
  line-height: ${props => props.lineHeight};
`;

Text.defaultProps = {
  align: 'inherit',
  color: 'primary',
  lineHeight: 1.25,
  mb: 1 / 2,
  mt: 0,
  size: 1,
  weight: 400,
};
