import { Schedule } from '@medplum/fhirtypes';
import { Document, Scheduler, useMedplum } from '@medplum/react';

export function GetCare(): JSX.Element {
  const medplum = useMedplum();
  const schedule = medplum.searchOne('Schedule').read();

  return (
    <Document width={800}>
      <Scheduler //This is the fuction that permit that the page show the calendary to get the care with the day and the month
        schedule={schedule as Schedule}//the function also give us the disponibles hours for the care
        questionnaire={{
          resourceType: 'Questionnaire',
          name: 'Test',
          item: [
            {//This are the questions optionals that we can write sickness or important things for the care
              id: 'id-1',//first the id to identify the component
              linkId: 'q1',//the link to linked the id
              type: 'string',// The type of answer (text, numbers, date, etc)
              text: 'Question 1',//the text that show the programm to orient the user
            },
            {
              id: 'id-2',
              linkId: 'q2',
              type: 'string',
              text: 'Question 2',
            },
            {
              id: 'id-3',
              linkId: 'q3',
              type: 'string',
              text: 'Question 3',
            },
          ],
        }}
      />
    </Document>
  );
}
