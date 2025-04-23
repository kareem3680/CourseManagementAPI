const { check } = require("express-validator");
const validatorMiddleWare = require("../middleWares/validatorMiddleware");

exports.getCourseValidator = [
  check("id").isMongoId().withMessage("Invalid course Id Format"),
  validatorMiddleWare,
];

exports.createCourseValidator = [
  check("title")
    .notEmpty()
    .withMessage("course title is required")
    .isLength({ min: 3 })
    .withMessage("course name must be at least 3 characters")
    .isLength({ max: 32 })
    .withMessage("course name must be at most 32 characters"),

  check("description")
    .notEmpty()
    .withMessage("course description is required")
    .isLength({ min: 10 })
    .withMessage("course description must be at least 10 characters")
    .isLength({ max: 100 })
    .withMessage("course description must be at most 100 characters"),

  check("price")
    .notEmpty()
    .withMessage("price is required")
    .isNumeric()
    .withMessage("price must be a number"),
  validatorMiddleWare,
];

exports.updateCourseValidator = [
  check("id").isMongoId().withMessage("Invalid course Id Format"),

  check("title")
    .optional()
    .isLength({ min: 3 })
    .withMessage("course name must be at least 3 characters")
    .isLength({ max: 32 })
    .withMessage("course name must be at most 32 characters"),

  check("description")
    .optional()
    .isLength({ min: 10 })
    .withMessage("course description must be at least 10 characters")
    .isLength({ max: 100 })
    .withMessage("course description must be at most 100 characters"),

  check("price").optional().isNumeric().withMessage("price must be a number"),
  validatorMiddleWare,
];

exports.deleteCourseValidator = [
  check("id").isMongoId().withMessage("Invalid course Id Format"),
  validatorMiddleWare,
];
