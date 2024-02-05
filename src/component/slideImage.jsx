const slideImage = (props) => {
  const { src, alt } = props;
  return (
    <div>
      <img src={src} alt={alt} />
    </div>
  );
};

export default slideImage;
