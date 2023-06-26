import { Center, Image, Text } from '@mantine/core';

export const GridColumnComponent = ({
  imageSrc,
  altText,
  title,
}: {
  imageSrc: string;
  altText: string;
  title: string;
}) => {
  const p1 = {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '25px',
    lineHeight: '29px',
    color: '#000000',
  };
  return (
    <>
      <Image maw={340} radius="lg" src={imageSrc} alt={altText} mx="auto" />
      <Center p="md">
        <Text style={p1}>{title}</Text>
      </Center>
    </>
  );
};
