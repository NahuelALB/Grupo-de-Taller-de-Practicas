const path = require('path');
const fs = require('fs');

const filesController = {
  getImage: (req, res) => {
    const type = req.params.type;
    const image = req.params.image;
    const pathImage = path.resolve(__dirname, `../upload/${type}/${image}`);

    if (fs.existsSync(pathImage)) {
      res.sendFile(pathImage);
    } else {
      res.sendFile(
        path.resolve(
          __dirname,
          '../upload/applicantsImages/defaultProfile.jpg',
        ),
      );
    }
  },
};

module.exports = filesController;
