import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { GeneratePostModal, GeneratePostModalHeader, CustomPostInputField, ArrowIcon } from './PostForm.styled';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

function CharLimitProgressBar(charWritten) {
  // TODO
  progress = charWritten / 5000;
  return <ProgressBar now={progress} label={`${charWritten}/5000`} visuallyHidden />;
}

function GeneratePostForm({ showForm, closeForm }) {
  return (
    <GeneratePostModal centered size="lg" show = {showForm} animation = {true} scrollable>
        <GeneratePostModalHeader>
          <Modal.Title>Create a New Post</Modal.Title>
          <button type="button" class="btn-close btn-close-white" aria-label="Close" onClick={closeForm}></button>
        </GeneratePostModalHeader>
        <Modal.Body>
          <Form>
            <Row>
              <Col xs={8}>
                <Form.Group className="mb-3" controlId="postForm.title">
                  <Form.Label>Title</Form.Label>
                  <br></br>
                  <CustomPostInputField type="textarea" placeholder="So I've been thinking..." />
                </Form.Group>
              </Col>
              <Col xs={4}>
                <Form.Group className="mb-3" controlId="postForm.topic">
                  <Form.Label>Topic</Form.Label>
                  <Form.Select aria-label="Topic">
                    <option value="Web Dev">Web Development</option>
                    <option value="Game">Embedded Development</option>
                    <option value="Career">Career</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3" controlId="postForm.desc">
              <Form.Label>Description</Form.Label>
              <CustomPostInputField as="textarea" rows={5} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Row>
            <Col xs={6}>
              <input className="form-control form-control" id="formFile" type="file"></input>
            </Col>
            <Col xs={4}>
              <Button variant="secondary" onClick={closeForm}>
                Save Entered Text
              </Button>
            </Col>
            <Col xs={2}>
              <Button variant="primary" onClick={closeForm}>
                Post
              </Button>
            </Col>
          </Row>
        </Modal.Footer>
    </GeneratePostModal>
  );
};

export default GeneratePostForm;