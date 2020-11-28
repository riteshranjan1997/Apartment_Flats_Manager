const express = require("express");
const router = express.Router();

const {
    getFlats,
    getFlatData,
    addFlat,
    editFlatData,
    deleteFlat,
    addNewResident,
    editResidentData,
    deleteResident,
} = require("../controllers/flatController");

router.get("/getFlat", getFlats);
router.get("/getFlatData/:id", getFlatData);
router.post("/addFlat", addFlat);
router.post("/editFlatData", editFlatData);
router.delete("/deleteFlat", deleteFlat)
router.post("/addNewResident", addNewResident);
router.post("/editResidentData", editResidentData);
router.delete("/deleteResident", deleteResident);

module.exports = router;
