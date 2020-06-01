/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-template-curly-in-string */
import React, { useEffect } from "react";
import { Form, Input, Button } from "antd";
import { addDetails, updateDetailsById } from "../actions/addDetails";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../constants/types";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not validate email!",
    number: "${label} is not a validate number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

export const AddDeatils = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const { selectedDetail } = useSelector((state: State) => state.allDetails);
  useEffect(() => {
    form.setFieldsValue(selectedDetail);
  }, [form, selectedDetail]);
  const onFinish = (formData: any) => {
    if (typeof formData === "object" && Object.keys(formData).length > 0) {
      if (Object.keys(selectedDetail).length === 0) {
        dispatch(addDetails(formData));
      } else {
        formData.id = selectedDetail.id;
        dispatch(updateDetailsById(formData));
      }
      form.resetFields();
    }
  };

  return (
    <Form
      form={form}
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      <Form.Item name={["name"]} label="Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item
        name={["email"]}
        label="Email"
        rules={[{ type: "email", required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item name={["phone"]} label="Phone" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          {selectedDetail.id ? "Update" : "Submit"}
        </Button>
      </Form.Item>
    </Form>
  );
};
