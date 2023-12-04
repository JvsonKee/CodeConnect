import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion'
import { CustomAccordion, CustomAccordionContent, CustomAccordionButton, CustomAccordionItem, ReplyButton, ReplyIcon} from "./ReplyBrowsing.styled";
import { faArrowRight, faTimes } from "@fortawesome/free-solid-svg-icons"
import Form from "react-bootstrap/Form"
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function GenerateReplyForm(i) {
    const [formData, setFormData] = useState({
    reply_desc: ''
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const handleSubmitReply = () => {
    const {reply_desc} = formData;
    // close Reply Form
    // pushPostToDatabase(post_title, post_topic, post_desc, "ADD");
  };

  return (
    <CustomAccordion key={i}>
      <CustomAccordionItem>
        <ReplyButton type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
            Reply
        </ReplyButton>
        <br></br>
        <CustomAccordionContent id="collapseOne" className="collapse">
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
                <Button variant="danger" className="btn-sm" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                  Exit  <ReplyIcon icon={faTimes} size = "lg"/>
                </Button>
              </Row>
              <br></br>
              <Row>
                <Button variant="secondary" className="btn-sm" onClick={handleSubmitReply}>
                  Reply  <ReplyIcon icon={faArrowRight} size = "xl"/>
                </Button>
              </Row>
            </Col>
            </Row>
          </Form>
        </CustomAccordionContent>
      </CustomAccordionItem>
    </CustomAccordion>
    
  );
}


export default GenerateReplyForm;