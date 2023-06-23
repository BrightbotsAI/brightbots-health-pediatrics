import { Center, Container, TextInput, Button, Group, Box, NumberInput, NativeSelect } from "@mantine/core";
import { useForm } from '@mantine/form';

export function FormularySpecial(): JSX.Element{
  const form = useForm({
    initialValues: {
      name: '',
      Type_of_ID: '',
      ID: '',
      Gender: '',
      Phone: '',
      Condition:'',
      Calendar: ''
    },
    validate:{
      name: (value) => {
        if (!/^[A-Za-z]+$/.test(value)) {
          return 'Name must contain only letters';
        }
        return null;
      },
      ID: (value) => {
        if (!/^\d+$/.test(value)) {
          return 'ID must contain only numbers';
        }
        return null;
      },
      Phone: (value) => {
        if (!/^\d+$/.test(value)) {
          return 'Phone must contain only numbers';
        }
        return null;
      }
    }
      });
  return(
    <div>
      <h1 id="ScheduleGeneral" style={{color: "#00ABC1", fontFamily: "Roboto", fontWeight: "bold", marginLeft: 10}}>  Schedule special appointment</h1>
      <br /><br />
      <Container px={385} mx="auto">
        <Center style={{borderTop: 4,border: "solid", borderColor:"#00ABC1", borderRadius: "10px"}}>
        <Box maw={300} mx="auto">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <TextInput
          withAsterisk
          label="Name:"
          {...form.getInputProps('name')}
          style={{borderBottomWidth: 1, borderBottom: "solid", marginBottom: 4, marginTop: 6}}/>
          <NativeSelect
          data={["Driver's license from a U.S. state", "Federal or state ID card","Military ID card","U.S. passport"]}
          label="Type of ID:"
          style={{marginBottom: 4, color: "#00ABC1"}}
          withAsterisk/>
          <NumberInput
          withAsterisk
          label="ID:"
          {...form.getInputProps('ID')}
          style={{borderBottomWidth: 1, borderBottom: "solid", marginBottom: 4}}/>
          <NativeSelect
          data={["Male","Female"]}
          label="Gender:"
          style={{marginBottom: 4}}
          withAsterisk/>
          <NumberInput
          withAsterisk
          label="Phone:"
          {...form.getInputProps('Phone')}
          style={{borderBottomWidth: 1, borderBottom: "solid", marginBottom: 4}}/>
          <TextInput
          withAsterisk
          label="Condition:"
          {...form.getInputProps('Condition')}
          style={{borderBottomWidth: 1, borderBottom: "solid", marginBottom: 4}}/>
          <label>
           Calendar:
           <input type="date" style={{border: 0}}/>
          </label>
        <Group position="center" mt="md">
          <Button type="submit" style={{marginBottom: 6, backgroundColor: "#00ABC1"}}>Submit</Button>
        </Group>
      </form>
          </Box>
        </Center>
      </Container>
    </div>
  )
}
