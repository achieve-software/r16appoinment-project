import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';export function AddModal({show, handleClose}) {  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-danger'>Reservation for...</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Patient Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" />
  
      </Form.Group>   
         <Form.Group className="mb-3" controlId="datetime">
        <Form.Label>Day&Time</Form.Label>
        <Form.Control type="datetime-local"  />
      </Form.Group>
      

      <div className='text-center'>
      <Button variant="success" type="submit" className='me-2'>
        Submit
      </Button>
      <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
      </div>
     
    </Form>
        </Modal.Body>
        
      </Modal>
    </>
  );
}
