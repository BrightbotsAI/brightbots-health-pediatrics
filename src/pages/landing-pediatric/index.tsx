import { Container, Grid, Text } from '@mantine/core';
import { GridColumnComponent } from './GridColumnComponent';
import { Header } from '../landing/Header';

export function HomePediatricPage(): JSX.Element {
  const fontStyle = {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '40px',
    lineHeight: '75px',
    color: '#00ABC1',
  };

  const columnData = [
    {
      imageSrc:
        'https://images.unsplash.com/photo-1470116945706-e6bf5d5a53ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2874&q=80',
      altText: 'General Pediatric Care',
      title: 'General Pediatric Care',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1578496781379-7dcfb995293d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      altText: 'Pediatric Subspecialties',
      title: 'Pediatric Subspecialties',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1600959907703-125ba1374a12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      altText: 'Emergency Care',
      title: 'Emergency Care',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1560305850-d90e0af2ff18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      altText: 'Neonatal Care',
      title: 'Neonatal Care',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1550831106-0994fe8abcfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
      altText: 'Pediatric Surgery',
      title: 'Pediatric Surgery',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1604881991720-f91add269bed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80',
      altText: 'Mental Health Services',
      title: 'Mental Health Services',
    },
    // Add more objects for other columns
  ];

  return (
    <>
      <Header />
      <Container px={39}>
        <Text style={fontStyle}>Services</Text>
        <Grid gutter="xl">
          {columnData.map((column, index) => (
            <Grid.Col key={index} span={4}>
              <GridColumnComponent imageSrc={column.imageSrc} altText={column.altText} title={column.title} />
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </>
  );
}
