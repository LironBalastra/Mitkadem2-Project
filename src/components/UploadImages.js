import React, { useState, useEffect } from "react";

function UploadImages() {
  const [images, setImages] = useState([]);

  function onImageChange(e) {
    setImages([...e.target.files]);
  }

  return (
    <input
      type="file"
      multiple
      accept="images/*"
      onChange={onImageChange}
    ></input>
  );
}

export default UploadImages;
