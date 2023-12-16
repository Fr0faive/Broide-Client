const Logo = (props) => {
  const { size } = props;
  return (
    <>
      <img src="./assets/logo.png" alt="logo" className={`${size}`} />
    </>
  );
};

export default Logo;
