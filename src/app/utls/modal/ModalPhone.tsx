import React from "react";
import {  Form, Input, Modal,Select  } from "antd";
import { productAndLocation } from "@/app/StateManagement/counterSlice";
import { useDispatch } from "react-redux";

interface MyComponentProps {
  modal: boolean;
  toggleModal: () => any;
}

// const { Option } = Select;

// const prefixSelector = (
//     <Form.Item name="prefix" noStyle>
//       <Select style={{ width: 70 }}>
//         <Option value="88">+88</Option>
//       </Select>
//     </Form.Item>
//   );

const ModalPhone: React.FC<MyComponentProps> = ({ modal, toggleModal }) => {
  const [form] = Form.useForm();

  const dispatch = useDispatch()

  // dispatch(productAndLocation(values))



  return (
    <>
      <Modal
        title="Phone No"
        open={modal}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              dispatch(productAndLocation(values))
              form.resetFields();
              toggleModal;
            })
            .catch((info) => {
            });
        }}
        onCancel={toggleModal}
      >
        <Form
          form={form}
          layout="vertical"
          name="form_in_modal"
          // initialValues={{ modifier: "public" }}
        >
           <Form.Item
        name="phone"
        label="Phone Number"
        rules={[
          { required: true, message: 'Mobile number is required' },
          {
            pattern: /^(?:\+88|01)?(?:\d{11}|\d{13})$/,
            message: 'Please enter a valid Bangladeshi mobile number',
          },
        ]}
      >
        <Input style={{ width: '100%' }} />
      </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ModalPhone;
