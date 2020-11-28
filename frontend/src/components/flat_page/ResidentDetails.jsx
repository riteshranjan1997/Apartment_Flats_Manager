import React from "react";
import Card from "react-bootstrap/Card";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {useSelector,useDispatch} from "react-redux"
import {useParams} from "react-router-dom"

import {deleteFlatResidentRequest,getSingleFlatRequest} from "../../redux/App/Action"

export default function ResidentDetails() {
  const dispatch = useDispatch()
  const ParamsId = useParams();
  const data = useSelector((state) => state.app.selected_flat)

  const handelResidentEdit = (data) => {}

  const handleResidentDelete = (datax) => {
    let payload = {
      resident_id: datax._id,
      flat_id:data.flat_id
    }
    dispatch(deleteFlatResidentRequest(payload))
    dispatch(getSingleFlatRequest({flat_id : ParamsId.id }));
  }

  return (
    <div>
      <Card body className="m-2">

        { data.flat_resident && data.flat_resident.length !== 0 ? data.flat_resident.map((elem) => <Grid container>
          <Grid item xs={3}>
            <h4>Name</h4>
            <p>{elem.name}</p>
          </Grid>
          <Grid item xs={3}>
            <h4>Age</h4>
        <p>{elem.age}</p>
          </Grid>
          <Grid item xs={3}>
            <h4>Gender</h4>
            <p>{elem.gender}</p>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="primary" className="m-1" onClick={() => handelResidentEdit(elem)}>
              Edit
            </Button>
            <Button variant="contained" color="secondary" onClick={() => handleResidentDelete(elem)}>
              Delete
            </Button>
          </Grid>
        </Grid> ) : <p>Currentely this flat seems empty</p> }
        
      </Card>
    </div>
  );
}
