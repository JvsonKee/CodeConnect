import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion'
import { PopupContainer, PopupContent, CreateAccountText, CreateAccountButton, CloseButton  } from '../GuestHome/GuestHomePage.styled';
import { CustomAccordion, CustomAccordionContent, CustomAccordionButton, CustomAccordionItem, ReplyButton, ReplyIcon} from "./ReplyBrowsing.styled";
import { faArrowRight, faTimes } from "@fortawesome/free-solid-svg-icons"
import Form from "react-bootstrap/Form"
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { postDatabase, pushReplyToDatabase } from '../../database/db'

function GenerateReplyForm( {id, level1, level2, closeForm, onReplySuccess, isGuestView}, i) {
    const [isOpen, setIsOpen] = useState(false);
    const [isPopupVisible, setPopupVisible] = useState(false);

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
    if (isGuestView){
      setPopupVisible(true);
    }
    else {
      setIsOpen(!isOpen);
    }
  };

  const handleSubmitReply = () => {
    const post = postDatabase[id];
    const {reply_desc} = formData;

    pushReplyToDatabase(post, level1, level2, reply_desc);
    onReplySuccess();
    handleToggle();
 };

  const handleClosePopup = () => {
      setPopupVisible(false);
  };

  return (
    <>
      <ReplyButton
        variant="outline-primary"
        className="btn-sm"
        onClick={() => handleToggle()}
        aria-controls="collapseOne"
        aria-expanded={isOpen}
      >
        Reply
      </ReplyButton>
      <br/>
      {isPopupVisible && (
        <PopupContainer>
          <PopupContent>
            <CreateAccountText>Please create an account to access this feature </CreateAccountText>
            <div></div>
            <div></div>
            <CreateAccountButton>Create Account</CreateAccountButton>
            <CloseButton onClick={handleClosePopup}>Close</CloseButton >
          </PopupContent>
        </PopupContainer>
      )}
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