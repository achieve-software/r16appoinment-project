import { Row, Col } from "react-bootstrap"
import  Container  from "react-bootstrap/Container"


const AppointmentList = ({appointments, setAppointments}) => {
  
  
  return (
   <Container className="p-2">
<h3 className="display-6 mb-2" style={{color:"rgb(166,18,189"}} >Appoitment List</h3>


{appointments.length<1 && <img src="./img/appointment.jpg" alt="" width="70%"/>}

{appointments.map((item) =>{
return(
<div>
  <Row>
<Col>
<h4>{item.patient}</h4>
<h5>{item.doctor}</h5>
<h6>{item.day}</h6>

</Col>


  </Row>
</div>


)




})}


   </Container>


  )

}
export default AppointmentList