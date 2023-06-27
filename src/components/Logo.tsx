import { useMantineTheme } from '@mantine/core';

export interface LogoProps {
  width: number;
}

export function Logo(props: LogoProps): JSX.Element {
  const theme = useMantineTheme();
  const color = theme.fn.primaryColor();
  const width = props.width;
  const height = Math.round((180 / 1050) * width);
  const style = {
    height: '40px',
    width: '55px',
  };

  return (
    <div>
      <img style={style} src="src/img/homePage/health-pediatrics-logo.jpg" alt="Logo" />
    </div>
  );
}
