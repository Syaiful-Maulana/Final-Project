const { User } = require('../../../models');
const helper = require('../../../helpers/password');
const validator = require('fastest-validator');
const v = new validator();
const bcrypt = require('bcrypt');
module.exports = {
  register: async (req, res) => {
    try {
      const schema = {
        nama: 'string|required',
        email: 'email|required',
        password: 'string|required',
      };

      const validate = v.validate(req.body, schema);
      if (validate.length) return res.respondBadRequest(validate);
      const { password } = req.body;

      const isPassOk = helper.validatePassword(password);
      if (!isPassOk.success) {
        res.respondBadRequest(isPassOk.message);
        return;
      }
      const encryptedPassword = await bcrypt.hash(password, 10);

      const newUser = await User.create({
        ...req.body,
        password: encryptedPassword,
        user_type: 'basic',
      });
      return res.respondCreated(newUser, 'Success Register Data');
    } catch (err) {
      return res.respondServerError(err.message);
    }
  },
};
