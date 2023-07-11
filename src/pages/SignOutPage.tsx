import { useMedplum } from '@medplum/react';
import { useEffect } from 'react';

export function SignOutPage(): null {
  const medplum = useMedplum();

  useEffect(() => {
    medplum.signOut();
    localStorage.removeItem('activeLogin');
    window.location.href = '/';
  }, [medplum]);

  return null;
}
