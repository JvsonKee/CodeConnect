import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion'
import { CustomAccordion, CustomAccordionContent, CustomAccordionButton, CustomAccordionItem, ReplyButton, ReplyIcon} from "./styles/ReplyBrowsing.styled";
import { faArrowRight, faTimes } from "@fortawesome/free-solid-svg-icons"
import Form from "react-bootstrap/Form"
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function GenerateReplyForm({ showForm, closeForm }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <CustomAccordion>
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
                <Form.Control as="textarea" rows={5} placeholder="I've got some thoughts on this..."/>
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
                <Button variant="secondary" className="btn-sm" onClick={closeForm}>
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