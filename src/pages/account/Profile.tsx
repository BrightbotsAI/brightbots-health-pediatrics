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

  return (
    <Box p="xl">
      <Form
        onSubmit={(formData: Record<string, string>) => {
          console.log('formData', formData);
        }}
      >
        <Stack align="center">
          <ResourceAvatar size={200} radius={100} value={profile} />
          <Title order={2}>{formatHumanName(profile.name?.[0] as HumanName)}</Title>
          <InfoSection
            title="Profile">
            <Box p="xl" w={'100%'}>
              <Stack>
                <Box style={{ 
                  width: '80%', display: "flex", justifyContent: "space-between", margin: "auto"}}>
                  <h3>First Name</h3>
                  <TextInput style={{ width: 400 }}
                    name="givenName"
                    defaultValue={formatGivenName(profile.name?.[0] as HumanName)}
                    />
                </Box> 
                <Box style={{ 
                  width: '80%', display: "flex", justifyContent: "space-between", margin: "auto"}}>
                  <h3>Last Name</h3>
                  <TextInput
                    name="familyName"
                    defaultValue={formatFamilyName(profile.name?.[0] as HumanName)}
                  />
                </Box> 
                <Box style={{ 
                  width: '80%', display: "flex", justifyContent: "space-between", margin: "auto"}}>
                  <h3>Name Purpose</h3>                 
                  <NativeSelect
                    name="nPurpose"
                    // defaultValue={profile.use}
                    data={['', 'usual' , 'official' , 'temp' , 'nickname', 'anonymous' , 'old' , 'maiden']}
                  />
                </Box>
                <Box style={{ 
                  width: '80%', display: "flex", justifyContent: "space-between", margin: "auto"}}>
                  <h3>Gender</h3>
                  <NativeSelect 
                   name="gender"
                   defaultValue={profile.gender}
                   data={['', 'female', 'male', 'other', 'unknown']}
                />
                </Box>
                <Box style={{ 
                  width: '80%', display: "flex", justifyContent: "space-between", margin: "auto"}}>
                  <h3>Birth Date</h3>
                  <TextInput
                  name="birthDate"
                  type="date"
                  defaultValue={profile.birthDate}
                  />
                </Box>
                <Box style={{ 
                  width: '80%', display: "flex", justifyContent: "space-between", margin: "auto"}}>
                  <h3>Email</h3>
                  <TextInput
                    name="email"
                    defaultValue={profile.telecom?.find((t) => t.system === 'email')?.value}
                  />
                  </Box>
                  <Box style={{ 
                  width: '80%', display: "flex", justifyContent: "space-between", margin: "auto"}}>
                  <h3>Address</h3>
                  <TextInput
                    label="Address"
                    name="address"
                    defaultValue={formatAddress(profile.address?.[0] || {})}
                  />
                </Box>           
              </Stack>
            </Box>
          </InfoSection>
        </Stack>
      </Form>
    </Box>
  );
}
