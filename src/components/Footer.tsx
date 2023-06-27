import { Anchor, Container, createStyles, Divider, SimpleGrid, Stack, Text } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  footer: {
    background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[1],
  },

  inner: {
    background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[1],
    borderTop: `1px solid ${theme.colors.gray[2]}`,
    padding: theme.spacing.xl,
    textAlign: 'center',
  },
}));

export function Footer(): JSX.Element {
  const { classes } = useStyles();

  const style: React.CSSProperties = {
    color: '#ffffff', fontSize: '24px', fontFamily: 'sans-serif'};
  

  return (
    <footer className={classes.footer}>
      <div className={classes.inner} style={{backgroundColor:'#00ABC1'}}>
        <Container p="xl">
          <Stack spacing="xl">
            <SimpleGrid cols={3} style={style}>
              <Anchor href="#" style={style}>Privacy Policy</Anchor>
              <Anchor href="#" style={style}>Registration Form</Anchor>
              <Anchor href="http://localhost:3000/register" style={style}>Document</Anchor>
            </SimpleGrid>
            <Divider />
            <Text style={style}>
              &copy; {new Date().getFullYear()} © 2023 Peathad Heldhes. All rights reserved.
            </Text>
          </Stack>
        </Container>
      </div>
    </footer>
  );
}
