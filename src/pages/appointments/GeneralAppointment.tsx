import { Schedule } from '@medplum/fhirtypes';
import { Document, Scheduler, useMedplum } from '@medplum/react';

export function FormularyGeneral(): JSX.Element{
  const medplum = useMedplum();
  const schedule = medplum.searchOne('Schedule').read();
  const idOptions = [
    {
      code: "Driver's license from a U.S. state",
      display: "Driver's license from a U.S. state"
    },
    {
      code: "Federal or state ID card",
      display: "Federal or state ID card"
    },
    {
      code: "Military ID card",
      display: "Military ID card"
    },
    {
      code: "U.S. passport",
      display: "U.S. passport"
    }
  ];
  const genderOptions = [
    {
      code: "Male",
      display: "Male"
    },
    {
      code: "Female",
      display: "Female"
    }
  ];
  return(
    <Document width={800}>
      <h1  id="ScheduleGeneral" style={{color: "#00ABC1", fontFamily: "Roboto", fontWeight: "bold"}}> Schedule general appointment </h1>
      <Scheduler //This is the fuction that permit that the page show the calendary to get the care with the day and the month
        schedule={schedule as Schedule}//the function also give us the disponibles hours for the care
        questionnaire={{
          resourceType: 'Questionnaire',
          name: 'Test',
          item: [
            {//This are the questions optionals that we can write sickness or important things for the care
              id: 'GeneralName',//first the id to identify the component
              linkId: 'q1',//the link to linked the id
              type: 'string',// The type of answer (text, numbers, date, etc)
              text: 'Name:',//the text that show the programm to orient the user
            },
            {
              id: 'GeneralType',
              linkId: 'q2',
              type: 'choice',
              answerOption: idOptions.map(option => ({
                valueCoding: option
              })),
              text: 'Type of ID:'
            },
            {
              id: 'GeneralID',
              linkId: 'q3',
              type: 'integer',
              text: 'ID:',
            },
            {
              id: 'GeneralGender',
              linkId: 'q4',
              type: 'choice',
              answerOption: genderOptions.map(option => ({
                valueCoding: option
              })),
              text: 'Gender: '
            },
            {
              id: 'GeneralPhone',
              linkId: 'q3',
              type: 'integer',
              text: 'Phone:',
            },
          ],
        }}
      />
    </Document>
  );
}
