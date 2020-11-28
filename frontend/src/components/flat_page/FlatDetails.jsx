import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { useHistory } from "react-router-dom";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "@material-ui/core/Button";
import { useSelector, useDispatch } from "react-redux";
import { deleteFlatRequest } from "../../redux/App/Action";

function FlatDetails() {
  const dispatch = useDispatch();
  const history = useHistory()
  const data = useSelector((state) => state.app.selected_flat);

  const handelFlatDelete = (payload) => {
    dispatch(deleteFlatRequest({ flat_id: payload }));
    history.push("/");
  };

  return (
    <div>
      <Card>
        <Card.Img variant="top" src={data.flat_image || ""} />
        <Card.Body>
          <Card.Title>Flat No : {data.flat_number}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Block : {data.block || ""}</ListGroupItem>
          <ListGroupItem>
            Resident Type : {data.resident_type || ""}
          </ListGroupItem>
          <ListGroupItem>No of Resident :</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Button variant="contained" color="primary" className="m-1">
            Edit
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => handelFlatDelete(data.flat_id)}
          >
            Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default FlatDetails;
