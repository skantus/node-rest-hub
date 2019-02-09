const Contact = require("./model");

exports.getAll = function(req, res) {
  Contact.get(function(err, contacts) {
    if (err) {
      res.json({
        status: "error",
        message: err
      });
    }
    res.json({
      status: "success",
      message: "Contacts retrieved successfully",
      data: contacts
    });
  });
};

exports.create = function(req, res) {
  var contact = new Contact();
  contact.name = req.body.name ? req.body.name : contact.name;
  contact.email = req.body.email;

  contact.save(function(err) {
    if (err) res.json(err);

    res.json({
      message: "New contact created!",
      data: contact
    });
  });
};

exports.getById = function(req, res) {
  Contact.findById(req.params.id, function(err, contact) {
    if (err) res.send(err);
    res.json({
      message: "Contact details loading..",
      data: contact
    });
  });
};

exports.update = function(req, res) {
  Contact.findById(req.params.id, function(err, contact) {
    if (err) res.send(err);

    contact.name = req.body.name ? req.body.name : contact.name;
    contact.email = req.body.email;

    contact.save(function(err) {
      if (err) res.json(err);

      res.json({
        message: "Contact Info updated",
        data: contact
      });
    });
  });
};

exports.delete = function(req, res) {
  Contact.remove(
    {
      _id: req.params.id
    },
    function(err, contact) {
      if (err) res.send(err);

      res.json({
        status: "success",
        message: "Contact deleted"
      });
    }
  );
};
