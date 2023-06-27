import './styles.css';

export function Pagerequest(): JSX.Element{
  return(
    <div>
      <section>
      <h1 className="tittle" >Appointment request</h1>
      </section>
        <section className='image_request'>
        <div className='general_app'>
        <img src="https://images.ecestaticos.com/Bosqgwi-bRoiiu2s89AjrlamxUE=/0x70:1716x1040/1338x751/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F8db%2F8b6%2Faa5%2F8db8b6aa54b585253e15f79a68447aeb.jpg"/>
        <h2 >General appointment</h2>
        </div>
        <div className='general_app'>
      <img src="https://cdn2.salud180.com/sites/default/files/check_up_medico_para_adultos_mayores_2_0.jpg" />
      <h2>Special appointment</h2>
      </div>
      </section>
    </div>
  )
}