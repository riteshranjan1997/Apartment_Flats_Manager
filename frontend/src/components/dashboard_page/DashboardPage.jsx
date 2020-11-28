import { Grid } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { flatDataRequest } from "../../redux/App/Action";
import Navbar from "../common/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import Pagination from "@material-ui/lab/Pagination";
import Cards from "./Cards";

function DashboardPage() {
  const dispatch = useDispatch();
  const isauth = useSelector((state) => state.auth.isAuth);
  const userData = useSelector((state) => state.auth.user_data);
  const flatData = useSelector((state) => state.app.flat_data);
  const totalData = useSelector((state) => state.app.total_data);

  const [blockQuery, setBlockQuery] = useState("");
  const [residentType, setResidentType] = useState("");
  const [sortby, setSortBy] = useState("");
  const [activePage, setActivePage] = useState(1);
  // const [limit, setlimit] = useState("")

  useEffect(() => {
    dispatch(flatDataRequest({ apartment_id: userData.manager_apartment_id }));
  }, []);

  useEffect(() => {
    let payload = {};
    if (blockQuery !== "") {
      payload.block = blockQuery;
    }
    if (residentType !== "") {
      payload.resident_type = residentType;
    }
    if (sortby !== "") {
      payload.sortby = sortby;
    }

    payload.page = activePage;

    payload.apartment_id = userData.manager_apartment_id;

    console.log(payload);

    dispatch(flatDataRequest(payload));
  }, [blockQuery, residentType, sortby, activePage]);

  if (isauth == false) {
    return <Redirect to="/login"></Redirect>;
  }

  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Navbar />
        </Grid>
        <Grid item xs={3}>
          <Grid container>
            <Grid item sx={12}>
              <div className="mr-3">
                <h4 style={{ fontWeight: "700" }}>Filters</h4>
              </div>
            </Grid>

            <Grid item xs={12}>
              <Accordion style={{ background: "inherit" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Search By Block</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <div class="form-group">
                      <select
                        class="form-control"
                        onChange={(e) => setBlockQuery(e.target.value)}
                      >
                        <option value="Block-A">Block-A</option>
                        <option value="Block-B">Block-B</option>
                        <option value="Block-C">Block-C</option>
                        <option value="Block-D">Block-D</option>
                        <option value="Block-E">Block-E</option>
                      </select>
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>

            <Grid item xs={12}>
              <Accordion style={{ background: "inherit" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Filter By Resident Type</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        value="owner"
                        onClick={(e) => setResidentType(e.target.value)}
                      />
                      <label class="form-check-label" for="exampleRadios1">
                        Owner
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        value="tenant"
                        onClick={(e) => setResidentType(e.target.value)}
                      />
                      <label class="form-check-label" for="exampleRadios2">
                        Tenant
                      </label>
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>

            <Grid item xs={12}>
              <Accordion style={{ background: "inherit" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Sort By Flat Number </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        value="desc"
                        onClick={(e) => setSortBy(e.target.value)}
                      />
                      <label class="form-check-label" for="exampleRadios1">
                        High to Low
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        value="asc"
                        onClick={(e) => setSortBy(e.target.value)}
                      />
                      <label class="form-check-label" for="exampleRadios2">
                        Low to High
                      </label>
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={9}>
          <Grid container justify="center" alignItems="center">
            {flatData && flatData.length !== 0 ? (
              flatData.map((elem) => (
                <Grid item>
                  <Cards data={elem} />
                </Grid>
              ))
            ) : (
              <p style={{ margin: "30px 0px" }}>No Data found </p>
            )}

            {flatData && flatData.length !== 0 ? (
              <Grid item>
                <Pagination
                  onChange={(e, page) => setActivePage(page)}
                  count={Math.ceil(totalData / 5)}
                  color="secondary"
                  style={{ margin: "10px" }}
                />
              </Grid>
            ) : null}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default DashboardPage;
