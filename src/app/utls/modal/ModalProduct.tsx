import React, { useState } from "react";
import { Form, Input, Modal, Space, Select } from "antd";
import {
  allDistict,
  allUpazila,
  upazilasOf,
} from "@bangladeshi/bangladesh-address";
import { useDispatch } from "react-redux";
import { productAndLocation } from "@/app/StateManagement/counterSlice";

const { Option } = Select;

interface MyComponentProps {
  modal: boolean;
  toggleModal: () => any;
}
const ModalProduct: React.FC<MyComponentProps> = ({ modal, toggleModal }) => {
  const dispatch = useDispatch();

  const [form] = Form.useForm();
  const [upazila, setUpozilla] = useState("Narail");

  const district = allDistict();

  const handleDivisionChange = (value: string) => {
    setUpozilla(value);
  };

  const upazilaSpecific = upazilasOf(upazila);

  return (
    <>
      <Modal
        title="Shipping Address"
        open={modal}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              dispatch(productAndLocation(values));

              form.resetFields();
            })
            .catch((info) => {
              // console.log("Validate Failed:", info);
            });
          toggleModal();
        }}
        onCancel={toggleModal}
      >
        <Form
          form={form}
          layout="vertical"
          name="form_in_modal"
          // initialValues={{ modifier: "public" }}
        >
          <Form.Item label="Address">
            <Space.Compact>
              <Form.Item
                name={["address", "district"]}
                noStyle
                rules={[{ required: true, message: "District is required" }]}
              >
                <Select
                  onChange={handleDivisionChange}
                  placeholder="Select District"
                >
                  {district?.map((value: any, key: any) => (
                    <Option key={key} value={value}>
                      {value}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item
                name={["address", "upazila"]}
                noStyle
                rules={[{ required: true, message: "Upazila is required" }]}
              >
                <Select placeholder="Select Upazila">
                  {upazilaSpecific?.map((value: any, key: any) => (
                    <Option key={key} value={value.upazila}>
                      {value.upazila}
                    </Option>
                  ))}
                </Select>
              </Form.Item>

              <Form.Item
                name={["address", "location"]}
                noStyle
                rules={[{ required: true, message: "Location is required" }]}
              >
                <Input style={{ width: "50%" }} placeholder="Input street" />
              </Form.Item>
            </Space.Compact>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ModalProduct;
