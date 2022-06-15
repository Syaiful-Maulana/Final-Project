const { Product } = require('../../models');
const validator = require('fastest-validator');
const v = new validator();
const jwt = require('jsonwebtoken');
module.exports = {
  add: async (req, res) => {
    const token = req.query.token;

    const data = await jwt.verify(token, JWT_SECRET_KEY);

    if (!data) return res.respondBadRequest('data not found');
    try {
      const schema = {
        nama: 'string|required',
        deskripsi: 'text|required',
        harga: 'number|required',
        stock: 'number|required',
      };

      const validate = v.validate(req.body, schema);
      if (validate.length) return res.respondBadRequest(validate);

      const newProduct = await Product.create({
        ...req.body,
        user_id: data.id,
        is_boolean: true,
      });
      return res.respondCreated(newProduct, 'Success Add New Product');
    } catch (err) {
      return res.respondServerError(err.message);
    }
  },
};
