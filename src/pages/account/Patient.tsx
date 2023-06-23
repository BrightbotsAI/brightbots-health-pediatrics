import { HumanName } from '@medplum/fhirtypes';
import { Document, BackboneElementDisplay } from '@medplum/react';

export function Patient(): JSX.Element {
    return(
    <Document>
        <BackboneElementDisplay value={{
        type: 'PatientContact',
        value: ({
        id: '123',
        name: {
            given: ['John'],
            family: 'Doe'
        }
        } as HumanName)
    }} />
    </Document>

    )};
