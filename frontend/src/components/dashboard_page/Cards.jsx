import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import {Link} from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "10px",
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 800,
    cursor: "pointer",
    boxShadow: "0 10px 6px -6px #777",
  },
  image: {
    width: 150,
    height: 150,
  },
  img: {
    margin: "20px",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  header: {
    color: "red",
    fontSize: "24px",
    fontWeight: 600,
  },
}));

export default function AlbumCard(props) {
  const classes = useStyles();
  return (
    <>
    <Link to={`/flat/${props.data.flat_id}`} style={{textDecoration:"none", color:"black"}}>
      <div className={classes.root}>
        <div class="card mb-3 ml-5" style={{ maxWidth: "840px" }}>
          <div class="row no-gutters">
            <div class="col-md-4">
              <img
                src={props.data.flat_image[0]}
                class="card-img"
                style={{ height: "200px" }}
                alt="flats"
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
  <h5 class="card-title">Flat No : {props.data.flat_number}</h5>
                <p class="card-text">
                  Block : {props.data.block}
                </p>
                <p class="card-text">
                  Type : {props.data.resident_type}
                </p>
                <p class="card-text">
                  No of Resident : {props.data.flat_resident.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Link>
    </>
  );
}
