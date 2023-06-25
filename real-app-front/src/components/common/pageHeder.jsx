const PageHeader = ({ title, description }) => {
  return (
    <>
      <div className="row  mt-4 ">
        <div className="col-12">
          <h2>{title}</h2>
        </div>
      </div>
      {description ? (
        <div className="row mt-2">
          <div className="col-12 fs-4">
            <p>{description}</p>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default PageHeader;
