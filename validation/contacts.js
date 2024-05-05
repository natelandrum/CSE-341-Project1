const validator = require("../utils/validate");

const saveContact = (req, res, next) => {
    const validationRule = {
        firstName: "required|string",
        lastName: "required|string",
        email: "required|email",
        favoriteColor: "required|string",
        birthday: "string"
    };

    validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412)
                .send({
                    status: false,
                    message: "Validation failed",
                    data: err
                });
        } else {
            next();
        }
    });
}

module.exports = {
    saveContact
};