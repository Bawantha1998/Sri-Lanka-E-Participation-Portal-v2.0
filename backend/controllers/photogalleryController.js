const db = require("../database/connection");

const getPhoto = (req, res) => {
  const q =
    "select tbl_gallery.gallery_id,image_path,gallery_title,gallery_url  from tbl_gallery join ( select * from tbl_gallery_image where id in ( select max(id) from tbl_gallery_image group by gallery_id)) as most_recent_image on tbl_gallery.gallery_id = most_recent_image.gallery_id";

  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }

    return res.json(data);
  });
};

const getImagesForGallery = (req, res) => {
  const galleryId = req.params.galleryId;

  const q = `
    SELECT id, image_path
    FROM tbl_gallery_image
    WHERE gallery_id = ${galleryId}
  `;

  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }

    return res.json(data);
  });
};

exports.getPhoto = getPhoto;
exports.getImagesForGallery = getImagesForGallery;

// const getGalleryphoto = (req, res) => {
//   console.log();
//   const q1 =
//     "SELECT image_path FROM tbl_gallery_image WHERE gallery_id = $data->gallery_id"; //
//   db.query(q1, (err, data) => {
//     if (err) {
//       console.log(err);
//       return res.json(err);
//     }
//     return res.json(data);
//   });
// };
// exports.getGalleryphoto = getGalleryphoto;
