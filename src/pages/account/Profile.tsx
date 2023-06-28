import { Box, Flex, NativeSelect, Stack, TextInput, Title } from '@mantine/core';
import { formatAddress, formatFamilyName, formatGivenName, formatHumanName } from '@medplum/core';
import { HumanName, Identifier, Patient } from '@medplum/fhirtypes';
import { Form, ResourceAvatar, useMedplumProfile } from '@medplum/react';
import { InfoSection } from '../../components/InfoSection';
import { Address } from 'cluster';
import { on } from 'events';
import { backgroundColor } from '../health-record/Measurement';

export function Profile(): JSX.Element | null {
  const profile = useMedplumProfile() as Patient;
/*Create Constant */
const style: React.CSSProperties = {
  width: '90rem', display: "flex", justifyContent: "space-between", margin: "auto", borderBottom:'1px solid rgba(0, 0, 0, 0.25)', padding:' 0 4%', alignItems:'center',};

const ContainerStyle: React.CSSProperties = 
  {width:'30%', marginLeft:'8rem', marginTop:'1.5%', alignItems:'center', justifyContent:'space-around' ,
           display:'flex' , minWidth:'656px', minHeight:'175px' , maxWidth:'656px', maxHeight:'175px',
            backgroundColor, borderRadius:'30px 90px 90px 30px', color:'#ffffff', fontWeight:'300'};

const TitleStyle: React.CSSProperties = {
  color:'#ffffff', fontSize: '25px', fontFamily: 'sans-serif', fontWeight: '300'};

const TextStyle: React.CSSProperties = {
  color:'#000', fontSize:'18px', fontFamily: 'sans-serif', fontWeight:'300'};

const InfoStyle: React.CSSProperties = {
  width: '50%', height: '60%'};

  return (

    //stablidhing properties to all the component

    <Box p="xl" style= {{width:'100%',}}> 
      <Stack align="center">
      <InfoSection title="Profile">
          <Box style= {ContainerStyle}>
            <ResourceAvatar size={150} radius={100} value={profile} />
            <Title order={2} style= {TitleStyle}>
              {formatHumanName(profile.name?.[0] as HumanName)}
            </Title>
          </Box>

            <Box p="xl" w={'100%'}>
              <Stack>
                <Box style={style}>
                  <h3 style={TextStyle}>First Name</h3>
                  <TextInput style={InfoStyle} disabled
                    name="givenName"
                    defaultValue={formatGivenName(profile.name?.[0] as HumanName)}
                    />
                </Box> 
                <Box style={style}>
                  <h3 style={TextStyle}>Last Name</h3>
                  <TextInput style={InfoStyle} disabled
                    name="familyName"
                    defaultValue={formatFamilyName(profile.name?.[0] as HumanName)}
                  />
                </Box> 
                <Box style={style}>
                  <h3 style={TextStyle}>Name Purpose</h3>                 
                  <NativeSelect style={InfoStyle}
                    name="nPurpose"
                    // defaultValue={profile.use}
                    data={['', 'usual' , 'official' , 'temp' , 'nickname', 'anonymous' , 'old' , 'maiden']}
                  />
                </Box>
                <Box style={style}>
                  <h3 style={TextStyle}>Gender</h3>
                  <NativeSelect style={InfoStyle}
                   name="gender"
                   defaultValue={profile.gender}
                   data={['', 'female', 'male', 'other', 'unknown']}
                />
                </Box>
                <Box style={style}>
                  <h3 style={TextStyle}>Birth Date</h3>
                  <TextInput style={InfoStyle}
                  name="birthDate"
                  type="date"
                  defaultValue={profile.birthDate}
                  />
                </Box>
                <Box style={style}>
                  <h3 style={TextStyle}>Email</h3>
                  <TextInput style={InfoStyle} disabled
                    name="email"
                    defaultValue={profile.telecom?.find((t) => t.system === 'email')?.value}
                  />
                  </Box>
                  <Box style={style}>
                  <h3 style={TextStyle}>Address</h3>
                  <TextInput style={InfoStyle}
                    name="address"
                    defaultValue={formatAddress(profile.address?.[0] || {})}
                  />
                </Box>           
              </Stack>
            </Box>
            </InfoSection>
        </Stack>
    </Box>
  );
}
