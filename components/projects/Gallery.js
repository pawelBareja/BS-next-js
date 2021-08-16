const Gallery = ({ thumbnail, image2, image3, image4 }) => {
  return (
    <>
      <img src={`/${thumbnail}`} width="100%" height="auto" />
      {image2 && <img src={`/${image2}`} width="100%" height="auto" />}
      {image3 && <img src={`/${image3}`} width="100%" height="auto" />}
      {image4 && <img src={`/${image4}`} width="100%" height="auto" />}
    </>
  );
};

export default Gallery;
