import { Button, Divider, Group, Stack, Text, Textarea, Title } from '@mantine/core';
import { createReference, formatDateTime, getReferenceString } from '@medplum/core';
import { Communication, Patient, Practitioner } from '@medplum/fhirtypes';
import { Document, Form, ResourceAvatar, ResourceName, useMedplum, useMedplumProfile } from '@medplum/react';
import { useEffect, useState } from 'react';
import { Loading } from '../components/Loading';

export function Messages(): JSX.Element {
  const medplum = useMedplum();
  const profile = useMedplumProfile() as Patient;
  const [messages, setMessages] = useState<Communication[]>();

  useEffect(() => { //uses React's "useEffect" hook to call a GraphQL API using the "medplum" library.
    medplum
      .graphql(
        /*In this query, a list of communications having a certain subject "(subject)" obtained from a function "getReferenceString" 
        is requested by passing the profile "(profile)" as an argument.*/
        `
        {
          CommunicationList(subject: "${getReferenceString(profile)}") {
            resourceType
            id
            meta {
              lastUpdated
            }
            payload {
              contentString
              contentAttachment {
                url
                contentType
              }
            }
            sender {
              reference
              resource {
                ... on Patient {
                  resourceType
                  id
                  name {
                    given
                    family
                  }
                  photo {
                    contentType
                    url
                  }
                }
                ... on Practitioner {
                  resourceType
                  id
                  name {
                    given
                    family
                  }
                  photo {
                    contentType
                    url
                  }
                }
              }
            }
          }
      }
        `
      )
      /*The GraphQL query response is in the "then" function, using the "setMessages" method to update the status of the component 
      with the messages received.*/
      .then((value) => setMessages(value.data.CommunicationList as Communication[]))
      .catch((err) => console.error(err));//in case of error
  }, [medplum, profile]);

  if (!messages) {
    return <Loading />;
  }

  return (
    <Document width={800}>
      <Title>Messages</Title>
      <Divider my="xl" />   
      <Stack spacing="xl"> 
        {messages.map((resource) => (//iterates over the "messages" array for each resource in messages, a div is rendered with a key set to the id of the resource.
          <div key={resource.id}>
            <Group align="top">
              <ResourceAvatar size="lg" radius="xl" value={resource.sender?.resource as Practitioner} />
              <div>
                <Text size="sm" weight={500}>
                  <ResourceName value={resource.sender?.resource as Patient | Practitioner} />
                </Text>
                <Text size="xs" color="dimmed">
                  {formatDateTime(resource?.meta?.lastUpdated)}
                </Text>
                <Text size="md" my="sm">
                  {resource.payload?.[0].contentString}
                </Text>
              </div>
            </Group>
          </div>
        ))}
        <div style={{ margin: '0 -20px -20px -20px', padding: 20, background: '#f8f8f8' }}>
          <Form
            onSubmit={(formData: Record<string, string>) => {
              medplum.createResource({
                  resourceType: 'Communication',
                  status: 'completed',
                  subject: createReference(profile),
                  sender: createReference(profile),
                  payload: [{ contentString: formData.contentString }],
                })
                .then((result) => setMessages([...messages, result]))//the result is added to the status "messages".
                .catch(console.log);//in case of error
            }}
          >
            <Group align="top">
              <ResourceAvatar size="lg" radius="xl" value={profile} />
              <Textarea name="contentString" style={{ flex: 1 }} placeholder="Add note" autosize />
            </Group>
            <Group position="right" mt="md">
              <Button type="submit">Send</Button>
            </Group>
          </Form>
        </div>
      </Stack>
    </Document>
  );
}
