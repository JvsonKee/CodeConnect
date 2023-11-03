import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import ProgressBar from 'react-bootstrap/ProgressBar';
import { Upload, UploadIcon } from "./PostForm.styled"
import { faFileCode } from "@fortawesome/free-regular-svg-icons"

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
            <Row>
              <Col xs={9}>
                <Form.Group className="mb-3" controlId="postForm.title">
                  <Form.Label>Post Title</Form.Label>
                  <Form.Control type="textarea" placeholder="So I've been thinking..." />
                </Form.Group>
              </Col>
              <Col xs={3}>
                <Form.Group className="mb-3" controlId="postForm.topic">
                  <Form.Label>Topic</Form.Label>
                  <Form.Select aria-label="Topic">
                    <option>Default Topic?</option>
                    <option value="Web Development">One</option>
                    <option value="Embedded Development">Two</option>
                    <option value="Career Advice">Three</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3" controlId="postForm.desc">
              <Form.Label>Post Description</Form.Label>
              <Form.Control as="textarea" rows={5} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Row>
            <Col xs={6}>
              <input className="form-control form-control" id="formFile" type="file"></input>
            </Col>
            <Col>
              <Upload>
                <UploadIcon icon={faFileCode} size = "xl"/>
              </Upload>
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

export default GeneratePostForm;