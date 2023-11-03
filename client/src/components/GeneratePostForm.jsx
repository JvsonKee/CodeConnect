import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import ProgressBar from 'react-bootstrap/ProgressBar';

function CharLimitProgressBar(charWritten) {
  // TODO
  progress = charWritten / 5000;
  return <ProgressBar now={progress} label={`${charWritten}/5000`} visuallyHidden />;
}

function GeneratePostForm({ showForm, closeForm }) {
  return (
    <>
      <Modal centered size="lg" show={showForm} onHide={closeForm}>
        <Modal.Header closeButton>
          <Modal.Title>Create a New Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="postForm.title">
              <Form.Label>Post Title</Form.Label>
              <Form.Control type="textarea" placeholder="So I've been thinking..." />
            </Form.Group>
            <Form.Group size="sm" className="mb-3" controlId="postForm.tldr">
              <Form.Label>50 Char TLDR</Form.Label>
              <Form.Control type="textarea" placeholder="Highlights Only" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="postForm.desc">
              <Form.Label>Post Description</Form.Label>
              <Form.Control as="textarea" rows={5} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Row>
            <Col xs={6}>
              <Form.Select aria-label="Topic">
                <option>Default Topic?</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Col>
            <Col>
              <Button variant="secondary" onClick={closeForm}>
                Save
              </Button>
            </Col>
            <Col>
              <Button variant="primary" onClick={closeForm}>
                Post
              </Button>
            </Col>
          </Row>
        </Modal.Footer>
      </Modal>
    </>
  );
}

// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';

// function MyVerticallyCenteredModal(props) {
//   return (
//     <Modal
//       {...props}
//       size="lg"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//     >
//       <Modal.Header closeButton>
//         <Modal.Title id="contained-modal-title-vcenter">
//           Modal heading
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <h4>Centered Modal</h4>
//         <p>
//           Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
//           dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
//           consectetur ac, vestibulum at eros.
//         </p>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button onClick={props.onHide}>Close</Button>
//       </Modal.Footer>
//     </Modal>
//   );
// }

// function App() {
//   const [modalShow, setModalShow] = React.useState(false);

//   return (
//     <>
//       <Button variant="primary" onClick={() => setModalShow(true)}>
//         Launch vertically centered modal
//       </Button>

//       <MyVerticallyCenteredModal
//         show={modalShow}
//         onHide={() => setModalShow(false)}
//       />
//     </>
//   );
// }

// render(<App />);

export default GeneratePostForm;