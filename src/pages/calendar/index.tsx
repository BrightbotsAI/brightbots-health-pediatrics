import { Slot } from "@medplum/fhirtypes";
import { Document, CalendarInput } from "@medplum/react";
import { Text, Title, Center} from '@mantine/core';

export function CalendarMenu(): JSX.Element {
    
    const start = new Date();
    const end = new Date(start);
    end.setHours(start.getHours() + 1);
    return (
      <>
      <br />
      <Document>
        <Title align="center" weight={700} size="3.75rem" order={1}>Calendar</Title>
        <Document>
          <CalendarInput slots={([{
          resourceType: 'Slot',
          schedule: {
              reference: 'Schedule/example'
          },
          status: 'free',
          start: start.toISOString(),
          end: end.toISOString()
          }] as Slot[])} onChangeMonth={(date: Date) => console.log(date)} onClick={(date: Date) => console.log('Clicked ' + date)} />
          
        </Document>
      </Document>
      </>
    );
  }
