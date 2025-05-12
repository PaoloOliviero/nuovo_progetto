const ClassImage = function (props) {
  return (
    <div className="container">
      <img src={props.src} alt="foto" width={300} />
      <p>ciao a tutti</p>
    </div>
  );
};

export default ClassImage;
