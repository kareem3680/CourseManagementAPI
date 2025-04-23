const express = require("express");
const courseController = require("../controller/courseController");
const courseValidator = require("../validators/courseValidator");

const router = express.Router();

router
  .route("/")
  .get(courseController.getCourses)
  .post(courseValidator.createCourseValidator, courseController.createCourse);

router
  .route("/:id")
  .get(courseValidator.getCourseValidator, courseController.getSpecificCourse)
  .put(courseValidator.updateCourseValidator, courseController.updateCourse)
  .delete(courseValidator.deleteCourseValidator, courseController.deleteCourse);

module.exports = router;
