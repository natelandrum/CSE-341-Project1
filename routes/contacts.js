const router = require("express").Router();

const controller = require("../controllers/contacts");
const validation = require("../validation/contacts");

router.get(
  "/",
  controller.getAllContacts,
  // #swagger.description = "Get all contacts"
);

router.get(
  "/:id",
  controller.getContact,
  // #swagger.description = "Get a contact by ID"
);

router.post(
  "/",
  validation.saveContact,
  controller.createContact,
  // #swagger.description = "Create a new contact"
  // #swagger.responses[500] = { description: "Failed to Create Contact" }
);

router.put(
  "/:id",
  validation.saveContact,
  controller.updateContact,
  // #swagger.description = "Update a contact by ID"
  // #swagger.responses[500] = { description: "Failed to Update Contact" }
);

router.delete(
  "/:id",
  controller.deleteContact,
  // #swagger.description = "Delete a contact by ID"
  // #swagger.responses[500] = { description: "Failed to Delete Contact" }
);

module.exports = router;
