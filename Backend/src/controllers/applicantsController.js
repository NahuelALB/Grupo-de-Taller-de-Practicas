const db = require('../database/models');

const applicantsController = {
  list: async (req, res) => {
    try {
      const data = await db.Applicant.findAll();
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
      console.error('Te arrojó un error -> ', error);
      res.status(500).json({
        meta: {
          error: true,
          status: 500,
          mesagge: 'Internal Server Error :(',
        },
      });
    }
  },
  detail: (req, res) => {
    let params = req.params.id;
    res.send(`Soy el detalle ${params}`);
  },
};

module.exports = applicantsController;
