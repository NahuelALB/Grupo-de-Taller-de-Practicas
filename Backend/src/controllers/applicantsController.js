const db = require('../database/models');

const applicantsController = {
  list: async (req, res) => {
    try {
      const data = await db.Applicant.findAll();
      const url = req.protocol + '://' + req.get('host') + req.originalUrl;

      res.status(200).json({
        meta: {
          error: false,
          status: 200,
          url: url,
          count: data.length,
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
  detail: async (req, res) => {
    try {
      const params = req.params.id;
      const url = req.protocol + '://' + req.get('host') + req.originalUrl;
      const data = await db.Applicant.findByPk(params, {
        include: {
          model: db.Profession,
          as: 'profession',
        },
      });
      res.status(200).json({
        meta: {
          error: false,
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
};

module.exports = applicantsController;
