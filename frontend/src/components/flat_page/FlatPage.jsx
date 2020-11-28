import React, {useState, useEffect} from "react";
import { getSingleFlatRequest } from "../../redux/App/Action"
import { Grid } from "@material-ui/core";
import Navbar from "../common/Navbar";
import FlatDetails from "./FlatDetails";
import { useSelector, useDispatch } from "react-redux";
import ResidentDetails from "./ResidentDetails";
import {useParams} from "react-router-dom"


function FlatPage() {
  const dispatch = useDispatch()
  const ParamsId = useParams();
  const userData = useSelector((state) => state.auth.user_data)

  useEffect (() => {
    console.log(ParamsId.id)
    dispatch(getSingleFlatRequest({flat_id : ParamsId.id }));
  },[]);


  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Navbar />
        </Grid>
        <Grid item xs={4}>
          <FlatDetails />
        </Grid>
        <Grid item xs={8}>
          <ResidentDetails />
        </Grid>
      </Grid>
    </div>
  );
}

export default FlatPage;
