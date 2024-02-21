const db = require('../database/models/');

const professionsController = {
  list: async (req, res) => {
    try {
      const data = await db.Profession.findAll();
      const url = req.protocol + '://' + req.get('host') + req.originalUrl;

      res.status(200).json({
        meta: {
          error: false,
          count: data.length,
          status: 200,
          url: url,
        },
        data: data,
      });
    } catch (error) {
      console.error('Te arrojo un error: ', error);
      res.status(500).json({
        meta: {
          error: true,
          status: 500,
          mesagge: 'Internal Server Error :(',
        },
      });
    }
  },
};

module.exports = professionsController;
