const express = require("express");
const { ctrlWrapper } = require("../helpers/index.js");
const { validateBody, isValidId } = require("../midleware/index.js");

const {
  createContactSchema,
  updataFavoriteSchema,
} = require("../models/contact.js");

const {
  getAllContacts,
  getOneContact,
  deleteContact,
  createContact,
  updateContact,
  updateFavorite,
} = require("../controllers/index.js");

const contactsRouter = express.Router();

contactsRouter.get("/", ctrlWrapper(getAllContacts));

contactsRouter.get("/:id", isValidId, ctrlWrapper(getOneContact));

contactsRouter.delete("/:id", isValidId, ctrlWrapper(deleteContact));

contactsRouter.post(
  "/",
  validateBody(createContactSchema),
  ctrlWrapper(createContact)
);

contactsRouter.put(
  "/:id",
  isValidId,
  validateBody(createContactSchema),
  ctrlWrapper(updateContact)
);

contactsRouter.patch(
  "/:id/favorite",
  isValidId,
  validateBody(updataFavoriteSchema),
  ctrlWrapper(updateFavorite)
);

module.exports = contactsRouter;
