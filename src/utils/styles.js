export const colors = {
  mainWhite: `hsl(0, 0%, 98%)`,
  mainBlack: `hsl(0, 0%, 14.9%)`,
  mainYellow: `hsl(39.7, 56.7%, 59.2%)`,
  mainYellow2: `hsl(40, 88.5%, 55.5%)`,
  mainGrey: `hsl(0, 0%, 27.8%)`,
};

export const textSlanted = `font-family: 'Times New Roman', serif`;

export const transDefault = 'transition: all 0.2s ease-in-out';

export const transFunction = (
  property = 'all',
  time = '0.2s',
  type = 'linear'
) => {
  return `transition:${property} ${time} ${type}`;
};

export const transObject = ({
  property = 'all',
  time = '0.2s',
  type = 'ease-in-out',
}) => {
  return `transition: ${property} ${time} ${type}`;
};

export const transition = ({
  property = 'all',
  time = '0.2s',
  type = 'ease-in-out',
}) => {
  return `transition: ${property} ${time} ${type}`;
};

export const border = ({
  width = '0.15rem',
  type = 'solid',
  color = 'white',
}) => {
  return `border:${width} ${type} ${color}`;
};

export const letterSpacing = ({ spacing = '0.1rem' }) => {
  return `letter-spacing:${spacing}`;
};
