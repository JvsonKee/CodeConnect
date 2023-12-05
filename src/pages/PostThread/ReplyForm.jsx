import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion'
import { CustomAccordion, CustomAccordionContent, CustomAccordionButton, CustomAccordionItem, ReplyButton, ReplyIcon} from "./ReplyBrowsing.styled";
import { faArrowRight, faTimes } from "@fortawesome/free-solid-svg-icons"
import Form from "react-bootstrap/Form"
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { postDatabase, pushReplyToDatabase } from '../../database/db'

function GenerateReplyForm( {id, level1, level2, closeForm, onReplySuccess}, i) {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
      reply_desc: ''
    });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmitReply = () => {
    const post = postDatabase[id];
    const {reply_desc} = formData;

    pushReplyToDatabase(post, level1, level2, reply_desc);
    onReplySuccess();
    handleToggle();
 };

  return (
    <>
      <ReplyButton
        variant="outline-primary"
        className="btn-sm"
        onClick={() => setIsOpen(!isOpen)}
        aria-controls="collapseOne"
        aria-expanded={isOpen}
      >
        Reply
      </ReplyButton>
      <br/>
      {isOpen && (
        <Form>
          <Row>
            <Col xs={11}>
              <Form.Group className="mb-3" controlId="replyForm.desc">
                <Form.Control
                  as="textarea"
                  rows={5}
                  id="reply_desc"
                  name="reply_desc"
                  value={formData.reply_desc}
                  onChange={handleChange}
                  placeholder="I've got some thoughts on this..."
                />
              </Form.Group>
            </Col>
            <Col xs={1}>
              <Row>
                <Button variant="danger" className="btn-sm" onClick={() => setIsOpen(false)}>
                  Exit <ReplyIcon icon={faTimes} size = "xl"/>
                </Button>
              </Row>
              <br/>
              <Row>
                <Button variant="secondary" className="btn-sm" onClick={handleSubmitReply}>
                  Reply <ReplyIcon icon={faArrowRight} size = "xl"/>
                </Button>
              </Row>
            </Col>
          </Row>
        </Form>
      )}
    </>
  );
};


export default GenerateReplyForm;