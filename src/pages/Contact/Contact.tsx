import { Button, Flex, Form, Input, Space } from "antd";
import Heading from "../../Components/common/Heading/Heading"
import SectionHeader from "../../Components/common/SectionHeader/SectionHeader"
import { FaUserLarge, FaPhone, FaTag } from 'react-icons/fa6';

import "./Contact.scss"
const Contact = () => {
    const {TextArea} = Input
  return (
    <>
      <div className="contact">
        <SectionHeader title="Contact" />
        <div className="contact-container">
          <Heading titleOne="Shop by category" titleTwo="Send Us Message" />
          <div className="form-content">
            <Form name="contact" layout="vertical" className="form-contact">
              <Space
                direction="vertical"
                size="middle"
                style={{ width: '100%' }}
              >
                <Flex justify="space-between" align="center" wrap gap={'small'}>
                  <Form.Item className="item-input">
                    <Input
                      suffix={<FaUserLarge color="#D62828" />}
                      size="large"
                      placeholder="place add user name"
                    />
                  </Form.Item>
                  <Form.Item className="item-input">
                    <Input
                      size="large"
                      suffix={<FaPhone color="#D62828" />}
                      placeholder="place add Phone number"
                    />
                  </Form.Item>
                  <Form.Item className="item-input">
                    <Input
                      size="large"
                      suffix={<FaTag color="#D62828" />}
                      placeholder="place add Subject"
                    />
                  </Form.Item>
                </Flex>
                <Form.Item>
                  <TextArea
                    maxLength={100}
                    showCount
                    autoSize={{ minRows: 8, maxRows: 10 }}
                    placeholder="Message"
                  />
                </Form.Item>
                <Form.Item>
                  <Button 
                  className="btn-add-contact" 
                  size="large">Send Massage</Button>
                </Form.Item>
              </Space>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact

