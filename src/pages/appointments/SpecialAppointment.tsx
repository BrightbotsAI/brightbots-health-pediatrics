import { Schedule } from '@medplum/fhirtypes';
import { Document, Scheduler, useMedplum } from '@medplum/react';

export function FormularySpecial(): JSX.Element{
  const medplum = useMedplum();
  const schedule = medplum.searchOne('Schedule').read();
  return(
    <Document width={800}>
      <h1  id="ScheduleSpecial" style={{color: "#00ABC1", fontFamily: "Roboto", fontWeight: "bold"}}> Schedule general appointment </h1>
      <Scheduler //This is the fuction that permit that the page show the calendary to get the care with the day and the month
        schedule={schedule as Schedule}//the function also give us the disponibles hours for the care
        questionnaire={{
          resourceType: 'Questionnaire',
          name: 'Test',
          item: [
            {//This are the questions optionals that we can write sickness or important things for the care
              id: 'SpecialName',//first the id to identify the component
              linkId: 'q1',//the link to linked the id
              type: 'string',// The type of answer (text, numbers, date, etc)
              text: 'Name:',//the text that show the programm to orient the user
            },
            {
              id: 'SpecialType',
              linkId: 'q2',
              type: 'choice',
              answerOption: [{
                valueCoding:{
                  code: "Driver's license from a U.S. state",
                  display: "Driver's license from a U.S. state"
                }
              },
              {
                valueCoding:{
                  code: "Federal or state ID card",
                  display: "Federal or state ID card"
                }
              },
              {
                valueCoding:{
                  code: "Military ID card",
                  display: "Military ID card"
                }
              },
              {
                valueCoding:{
                  code: "U.S. passport",
                  display: "U.S. passport"
                }
              }
            ],
              text: 'Type of ID:',
            },
            {
              id: 'SpecialID',
              linkId: 'q3',
              type: 'integer',
              text: 'ID:',
            },
            {
              id: 'SpecialGender',
              linkId: 'q3',
              type: 'choice',
              answerOption: [{
                valueCoding:{
                  code: "Male",
                  display: "Male"
                }
              },
              {
                valueCoding:{
                  code: "Female",
                  display: "Female"
                }
              }
            ],
              text: 'Gender:',
            },
            {
              id: 'SpecialPhone',
              linkId: 'q3',
              type: 'integer',
              text: 'Phone:',
            },
            {
              id: 'SpecialCondition',
              linkId: 'q3',
              type: 'string',
              text: 'Cpndition:',
            }
          ],
        }}
      />
    </Document>
  );
}

