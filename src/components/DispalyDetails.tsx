import React from "react";
import { Table, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { removeDetailsById, getDetailsById } from "../actions/addDetails";
import { State, Details } from "../constants/types";

export const DisplayDetails = () => {
  const { details } = useSelector((state: State) => state.allDetails);
  const dispatch = useDispatch();

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "",
      dataIndex: "",
      key: "",
      render: ({ id }: Details) => {
        return (
          <div>
            <Button type="primary" onClick={() => dispatch(getDetailsById(id))}>
              Edit
            </Button>
            &nbsp;&nbsp;
            <Button
              type="danger"
              onClick={() => dispatch(removeDetailsById(id))}
            >
              Delete
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <React.Fragment>
      <Table
        columns={columns}
        dataSource={details}
        rowKey={(record) => record.id}
      />
    </React.Fragment>
  );
};
