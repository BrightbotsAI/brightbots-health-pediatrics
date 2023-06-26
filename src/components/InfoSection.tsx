import { Card, CloseButton, createStyles, Title } from '@mantine/core';
import React from 'react';

const useStyles = createStyles((theme) => ({
  titleSection: {
    background: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[1],
    border: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[3]}`,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[6],
    padding: `${theme.spacing.md} ${theme.spacing.md}`, 
    /**
     * My code begins here
     */
    backgroundColor:"#00ABC1", paddingRight:"14px", borderLeft:"14px #000000 solid", width:"100%",
  },
/* Title Properties */
  title: {
    fontWeight: 600, fontSize:"43px", color: "#ffffff", paddingLeft:"103px"
  },
}));

interface InfoSectionProps {
  title: string | JSX.Element;
  children: React.ReactNode;
  onButtonClick?: (id: string) => void;
  resourceType?: string;
  id?: string;
}

export function InfoSection({ title, children, onButtonClick, id = '' }: InfoSectionProps): JSX.Element {
  const { classes } = useStyles();
  return (
    /*Card Properties */
    <Card /*withBorder radius="md" shadow="sm" p="xl" mb="xl" */
      style={{ width: '100%'}}>
      <Card.Section className={classes.titleSection}>
        <Title order={4} className={classes.title}>
          {title}
        </Title>
        {onButtonClick && <CloseButton onClick={() => onButtonClick(id)} />}
      </Card.Section>
      <Card.Section>{children}</Card.Section>
    </Card>
  );
}
