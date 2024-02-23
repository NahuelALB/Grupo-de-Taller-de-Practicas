const { Profession, Applicant } = require('../database/models');

const applicantsController = {
  list: async (req, res) => {
    try {
      const data = await Applicant.findAll({
        attributes: [
          'id',
          'name',
          'lastName',
          'email',
          'areaCode',
          'phone',
          'linkedIn',
          'genre',
          'image',
        ],
        include: {
          model: Profession,
          as: 'profession',
        },
      });
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
      const data = await Applicant.findByPk(params, {
        attributes: [
          'id',
          'name',
          'lastName',
          'email',
          'areaCode',
          'phone',
          'linkedIn',
          'genre',
          'image',
        ],
        include: {
          model: Profession,
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
