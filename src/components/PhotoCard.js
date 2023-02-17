import React from "react";
import { Link } from "react-router-dom";

function PhotoCard({ photo, onDeletePhoto }) {
  const { id, title, image_url } = photo;

  function deletePhoto() {
    fetch(`https://photo-app-kh0g.onrender.com/api/photos/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        onDeletePhoto(photo);
      }
    });
  }

  return (
    <div className="col">
      <div className="card h-100">
        <img class="card-img-top" alt="" src={photo?.image_url} />
        <div className="card-body">
          <h5 className="card-title">{photo?.title}</h5>

          <button
            type="button"
            className="btn btn-outline-success"
            
            style={{ marginLeft: 10 }}
          >
            View
          </button>

          <button
            onClick={deletePhoto}
            className="btn btn-outline-danger"
            style={{ marginLeft: 10 }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default PhotoCard;
