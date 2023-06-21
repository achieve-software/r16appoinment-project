import { Row, Col } from "react-bootstrap"
import  Container  from "react-bootstrap/Container"
import { FaTimesCircle} from "react-icons/fa";

const AppointmentList = ({appointments, setAppointments}) => {
  
  
  return (
   <Container className="p-2">
<h3 className="display-6 mb-2" style={{color:"rgb(166,18,189"}} >Appoitment List</h3>


{appointments.length<1 && <img src="./img/appointment.jpg" alt="" width="70%"/>}

{appointments.map((item) =>{
  const{id,patient,consulted,doctor,day}=item

return(
<div>
  <Row>
<Col>
<h4>{item.patient}</h4>
<h5>{item.doctor}</h5>
<h6>{new Date(day).toLocaleDateString()}</h6>
<h6>{new Date(day).toLocaleTimeString()}</h6>
<FaTimesCircle/>
</Col>


  </Row>
</div>


)




})}


   </Container>


  )

}
export default AppointmentList