import express from "express";
import contactsControllers from "../controllers/contactsControllers.js";
import validateBody from "../midleware/validateBody.js";
import {
  createContactSchema,
  updataFavoriteSchema,
} from "../schemas/contactsSchemas.js";
import isValidId from "../midleware/isValidId.js";

const {
  getAllContacts,
  getOneContact,
  deleteContact,
  createContact,
  updateContact,
  updateFavorite,
} = contactsControllers;

const contactsRouter = express.Router();

contactsRouter.get("/", getAllContacts);

contactsRouter.get("/:id", isValidId, getOneContact);

contactsRouter.delete("/:id", isValidId, deleteContact);

contactsRouter.post("/", validateBody(createContactSchema), createContact);

contactsRouter.put(
  "/:id",
  isValidId,
  validateBody(createContactSchema),
  updateContact
);

contactsRouter.patch(
  "/:id/favorite",
  isValidId,
  validateBody(updataFavoriteSchema),
  updateFavorite
);

export default contactsRouter;
