import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { GeneratePostModal, GeneratePostModalHeader, CustomPostInputField, ArrowIcon } from './PostForm.styled';
import { pushPostToDatabase } from '../../database/db'
import ProgressBar from 'react-bootstrap/ProgressBar';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { topicDatabase } from '../../database/db';

function CharLimitProgressBar(charWritten) {
  // TODO
  progress = charWritten / 5000;
  return <ProgressBar now={progress} label={`${charWritten}/5000`} visuallyHidden />;
}

function GeneratePostForm({ showForm, closeForm, onPostSuccess}) {
  const [formData, setFormData] = useState({
    post_title: '',
    post_topic: '',
    post_desc: ''
  });
  const [defaultTitle, setDefaultTitle] = useState('');
  const [defaultTopic, setDefaultTopic] = useState('');
  const [defaultDesc, setDefaultDesc] = useState('');
  const [postError, setPostError] = useState(false);
  const errorMessage = "Please enter a title, topic, and description before posting!";

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const handleSubmitPost = () => {
    const {post_title, post_topic, post_desc} = formData;
    if (post_title.trim() == '' || post_topic.trim() == '' || post_desc.trim() == '') {
      setPostError(true);   
      return;
    }

    pushPostToDatabase(post_title, post_topic, post_desc, "1 second ago");
    
    localStorage.setItem("savedTitle", '');
    localStorage.setItem("savedDesc", '');
    localStorage.setItem("savedTopic", "Web Development");
    
    setPostError(false);
    closeForm();
    onPostSuccess();
  };

  const handleSavePostInfo = () => {
    const {post_title, post_topic, post_desc} = formData;
    localStorage.setItem("savedTitle", post_title);
    localStorage.setItem("savedTopic", post_topic);
    localStorage.setItem("savedDesc", post_desc);
    // TODO: replace this with heba's cool warnings :)
    alert("Saved draft for later! Come back to this screen when you're ready to continue");
  }

  const checkSavedPostInfo = () => {
    const savedTitle = localStorage.getItem('savedTitle');
    if (savedTitle != "") {
      setDefaultTitle(savedTitle);
      setFormData((prevData) => ({
        ...prevData,
        post_title: savedTitle,
      }));
    }
    const savedTopic = localStorage.getItem('savedTopic');
    if (savedTopic != "") {
      setDefaultTopic(savedTopic);
      setFormData((prevData) => ({
        ...prevData,
        post_topic: savedTopic,
      }));
    }
    const savedDesc = localStorage.getItem('savedDesc');
    if (savedDesc != "") {
      setDefaultDesc(savedDesc);
      setFormData((prevData) => ({
        ...prevData,
        post_desc: savedDesc,
      }));
    }
  }

  useEffect(() => {
    checkSavedPostInfo();
  }, []); 

  return (
    <GeneratePostModal centered size="lg" show = {showForm} animation = {true} scrollable>
        <GeneratePostModalHeader>
          <Modal.Title>Create a New Post</Modal.Title>
          <button type="button" className="btn-close btn-close-white" aria-label="Close" onClick={closeForm}></button>
        </GeneratePostModalHeader>
        <Form>
          <Modal.Body>
            <Row>
              <Col xs={8}>
                <Form.Group className="mb-3" controlId="postForm.title">
                  <Form.Label>Title</Form.Label>
                  <br></br>
                  <CustomPostInputField
                    as="textarea"
                    rows={1}
                    id="post_title"
                    name="post_title"
                    value={formData.post_title}
                    defaultValue={defaultTitle}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col xs={4}>
                <Form.Group className="mb-3" controlId="postForm.topic">
                  <Form.Label>Topic</Form.Label>
                  <Form.Select
                    id="post_topic"
                    name="post_topic"
                    value={formData.post_topic}
                    defaultValue={defaultTopic}
                    onChange={handleChange}
                  >
                    {topicDatabase.map((topic, index) => (
                      <option key={index} value={topic.getName()}>
                        {topic.getName()}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3" controlId="postForm.desc">
              <Form.Label>Description</Form.Label>
              <CustomPostInputField
                as="textarea"
                rows={5}
                id="post_desc"
                name="post_desc"
                value={formData.post_desc} 
                defaultValue={defaultDesc}
                onChange={handleChange}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
              <Row>
                <Col xs={6}>
                  <input className="form-control form-control" id="formFile" type="file"></input>
                </Col>
                <Col xs={4}>
                  <Button variant="secondary" onClick={handleSavePostInfo}>
                    Save Form for Later
                  </Button>
                </Col>
                <Col xs={2}>
                  <Button variant="primary" onClick={handleSubmitPost}>
                    Post
                  </Button>
                </Col>
              </Row>
              {postError && <div style={{ color: 'red' }}>{errorMessage}</div>}
          </Modal.Footer>
        </Form>
    </GeneratePostModal>
  );
};

export default GeneratePostForm;