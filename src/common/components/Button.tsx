import { styled } from '../styles/styled';
import { Theme } from '../styles/theme';

interface ButtonProps {
  variant?: 'default' | 'primary';
  textAlign?: 'left' | 'center' | 'right';
  fullWidth?: boolean;
}

const getColorForVariant = (variant: ButtonProps['variant'], theme: Theme) => {
  switch (variant) {
    case 'primary':
      return theme.white;
    case 'default':
    default:
      return theme.black;
  }
};

const getBackgroundForVariant = (
  variant: ButtonProps['variant'],
  theme: Theme
) => {
  switch (variant) {
    case 'primary':
      return theme.brand;
    case 'default':
    default:
      return 'transparent';
  }
};

const getBorderColorForVariant = (
  variant: ButtonProps['variant'],
  theme: Theme
) => {
  switch (variant) {
    case 'primary':
      return theme.brand;
    case 'default':
    default:
      return theme.gray;
  }
};

export const Button = styled.button<ButtonProps>`
  display: ${props => (props.fullWidth ? 'block' : 'inline-block')};
  min-height: 50px;
  border-radius: 100px;
  padding: 1rem 1.5rem;
  border-width: 3px;
  border-style: solid;
  font-size: 1rem;
  font-weight: 500;
  outline: none;
  text-align: ${props => props.textAlign};
  width: ${props => (props.fullWidth ? '100%' : 'initial')};
  border-color: ${({ theme, variant }) =>
    getBorderColorForVariant(variant, theme)};
  color: ${({ theme, variant }) => getColorForVariant(variant, theme)};
  background-color: ${({ theme, variant }) =>
    getBackgroundForVariant(variant, theme)};
`;

Button.defaultProps = {
  fullWidth: false,
  textAlign: 'center',
  variant: 'default',
};
