// requires
const courseModel = require("../models/courseModel");
const ApiError = require("../utils/apiError");

// CRUD operations
exports.createCourse = async (req, res, next) => {
  const newCourse = await courseModel.create(req.body);
  res.status(201).json({ data: newCourse });
};

exports.getCourses = async (req, res, next) => {
  const courses = await courseModel.find({});
  res.status(200).json({ data: courses });
};

exports.getSpecificCourse = async (req, res, next) => {
  const course = await courseModel.findById(req.params.id);
  if (!course)
    return next(new ApiError(`No Course For This id : ${req.params.id}`, 404));
  res.status(200).json({ data: course });
};

exports.updateCourse = async (req, res, next) => {
  const course = await courseModel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!course)
    return next(new ApiError(`No Course For This id : ${req.params.id}`, 404));
  res.status(200).json({ data: course });
};

exports.deleteCourse = async (req, res, next) => {
  const course = await courseModel.findByIdAndDelete(req.params.id);
  if (!course)
    return next(new ApiError(`No Course For This id : ${req.params.id}`, 404));
  res.status(202).json({ message: "course deleted successfully." });
};
