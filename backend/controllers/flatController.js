const uuid = require("node-uuid");
const Flats = require("../models/flatsDataModel.js");

// for searching the albums
const getFlats = async (req, res) => {
  try {
    console.log(req.headers)
    let results;
    let total_data;
    // filter part

    if (req.query.resident_type && req.query.block) {
      results = await Flats.find({
        apartment_id: req.query.apartment_id,
        resident_type: req.query.resident_type,
        block: req.query.block,
      })
        .then((data) => data)
        .catch((err) =>
          res
            .status(400)
            .json({ message: "No Such flat Found", error: true, details: err })
        );
    } else if (req.query.resident_type) {
      results = await Flats.find({
        apartment_id: req.query.apartment_id,
        resident_type: req.query.resident_type,
      })
        .then((data) => data)
        .catch((err) =>
          res
            .status(400)
            .json({ message: "No Such flat Found", error: true, details: err })
        );
    } else if (req.query.block) {
      results = await Flats.find({
        apartment_id: req.query.apartment_id,
        block: req.query.block,
      })
        .then((data) => data)
        .catch((err) =>
          res
            .status(400)
            .json({ message: "No Such flat Found", error: true, details: err })
        );
    } else {
      results = await Flats.find({ apartment_id: req.query.apartment_id })
        .then((data) => data)
        .catch((err) =>
          res
            .status(400)
            .json({ message: "No Such flat Found", error: true, details: err })
        );
    }

    // adding total data
    total_data = results.length;

    // sorting
    if (req.query.sortby) {
      if (req.query.sortby === "asc") {
        results = results.sort((a, b) => a.flat_number - b.flat_number);
      }
      if (req.query.sortby === "desc") {
        results = results.sort((a, b) => b.flat_number - a.flat_number);
      }
    }

    // pagenation
    let limit = req.query.limit || 5;
    let page = req.query.page || 1;

    let start_index = (page - 1) * limit;
    let end_index = page * limit;
    results = results.slice(start_index, end_index);
    return res
      .status(200)
      .json({ error: false, data: results, total_data: total_data });
  } catch (err) {
    res.status(400).json({ error: true, details: err });
  }
};

//get single flat data
const getFlatData = (req, res) => {
  Flats.findOne({ flat_id: req.params.id })
    .then((data) => {
      if (data) {
        res.status(200).json({ error: false, data: data });
      } else {
        res.status(404).json({ error: true, message: "No Such flat Found" });
      }
    })
    .catch((err) =>
      res
        .status(404)
        .json({ message: "No Such flat Found", error: true, details: err })
    );
};

const addFlat = (req, res) => {
  const data = new Flats({
    apartment_id: req.body.apartment_id,
    resident_type: req.body.resident_type,
    flat_id: uuid.v4(),
    flat_number: req.body.flat_number,
    flat_image: req.body.flat_image,
    block: req.body.block,
    flat_resident: req.body.flat_resident,
  });

  data
    .save()
    .then(() =>
      res.status(200).json({
        status: "Success",
        message: "New flat has been added to the database",
      })
    )
    .catch((err) => res.status(400).json({ status: "Failed", message: err }));
};

const editFlatData = (req, res) => {
  Flats.findOne({ flat_id: req.body.flat_id })
    .then((data) => {
      data.resident_type = req.body.resident_type || data.resident_type;
      data.flat_number = req.body.flat_number || data.flat_number;
      data.block = req.body.block || data.block;
      data
        .save()
        .then(() =>
          res
            .status(200)
            .json({ error: "false", message: "Flat data updated!" })
        )
        .catch((err) =>
          res
            .status(400)
            .json({ error: "true", message: "something went wrong" })
        );
    })
    .catch((err) =>
      res.status(400).json({
        error: "true",
        message: "No Such Flat with that id not found",
        q: err,
      })
    );
};

const deleteFlat = (req, res) => {
  Flats.findOne({ flat_id: req.body.flat_id })
    .then((data) => {
      Flats.findByIdAndDelete(data._id)
        .then(() =>
          res.status(200).json({
            error: false,
            status: "Success",
            message: "Flat has been removed from the database",
          })
        )
        .catch((err) =>
          res.status(200).json({
            error: true,
            status: "failed",
            message: "Something went wrong",
          })
        );
    })
    .catch((err) =>
      res
        .status(404)
        .json({ error: true, message: "No Such Flat with that id not found" })
    );
};

const addNewResident = (req, res) => {
  Flats.findOne({ flat_id: req.body.flat_id })
    .then((data) => {
      let current = req.body.new_resident;
      current._id = uuid.v4();
      data.flat_resident.push(current);
      data
        .save()
        .then(() =>
          res
            .status(200)
            .json({ error: "false", message: "New Resident added to the flat" })
        )
        .catch((err) =>
          res
            .status(400)
            .json({ error: "true", message: "something went wrong" })
        );
    })
    .catch((err) =>
      res.status(400).json({ error: "true", message: "No such flat found" })
    );
};

const editResidentData = async (req, res) => {
  await Flats.findOne({ flat_id: req.body.flat_id })
    .then((data) => {
      let current = data.flat_resident;

      console.log(current);

      let index;

      current.forEach((elem, i) => {
        if (elem._id == req.body.resident_id) {
          index = i;
        }
      });

      console.log(index);

      if (index >= 0) {
        let update = current[index];
        update.name = req.body.data.name || update.name;
        update.gender = req.body.data.gender || update.gender;
        update.age = req.body.data.age || update.age;

        current[index] = update;

        console.log(current)

        data.flat_resident = current;

        console.log(data.flat_resident)

        data
          .save()
          .then(() =>
            res
              .status(200)
              .json({ error: false, message: "Resident data updated!" })
          )
          .catch((err) =>
            res
              .status(400)
              .json({ error: true, message: "something went wrong",details:err })
          );  
      } else {
        res.status(400).json({ error: true, message: "something went wrong" });
      }
    })

    .catch((err) =>
      res.status(400).json({
        error: "true",
        message: "No Such Flat with that id not found",
      })
    );
};

const deleteResident = (req, res) => {
  Flats.findOne({ flat_id: req.body.flat_id })
    .then((data) => {
      let current = data.flat_resident;

      let index = current.findIndex(
        (elem) => elem._id === req.body.resident_id
      );

      if (index >= 0) {
        current.splice(index, 1);

        data.flat_resident = current;

        data
          .save()
          .then(() =>
            res
              .status(200)
              .json({ error: false, message: "Resident data deleted!" })
          )
          .catch((err) =>
            res
              .status(400)
              .json({ error: true, message: "something went wrong" })
          );
      } else {
        res.status(400).json({ error: true, message: "something went wrong" });
      }
    })

    .catch((err) =>
      res.status(400).json({
        error: "true",
        message: "No Such Resident with that id not found",
        q: err,
      })
    );
};

module.exports = {
  getFlats,
  getFlatData,
  addFlat,
  editFlatData,
  deleteFlat,
  addNewResident,
  editResidentData,
  deleteResident,
};
