import { Container, Group,} from '@mantine/core';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { SideMenu } from '../../components/SideMenu';

export const sideMenu = {
  title: 'Account',
  menu: [
    { name: 'Profile', href: '/account/profile' },
    { name: 'Provider', href: '/account/provider' },
    { name: 'Membership & Billing', href: '/account/membership-and-billing' },
    { name: 'Patient', href: '/account/patient' },
  ],
};

export function AccountPage(): JSX.Element {

  const style: React.CSSProperties = {
    width: '100%',margin:'auto'};


  return (
    <Container size={'100%'} px={0}>
      <Group align="top">
        {/* <SideMenu {...sideMenu}/> */}
        <div style={{ width: '100%',}}>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </div>
      </Group>
    </Container>
    
  );
}
