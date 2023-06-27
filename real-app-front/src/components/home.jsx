import PageHeader from "./common/pageHeder";

const Home = () => {
  return (
    <>
      <PageHeader
        title={
          <>
            Real <i className="bi bi-boxes"></i> App
          </>
        }
        description={
          <>
            Welcome to
            <b>
              {" "}
              Real <b className="bi bi-boxes"></b> App.
            </b>
            <br />
            To start working with the application, please register
            <b> (SignUp)</b> and go into<b> (SignIn)</b> the application.
            <br />
            Only registered business users <b> (SignUp Business) </b> can
            create, edit and delete business. <br />
            Here are few Examples how looks a bussines cards. <br />
            <div className="row justify-content-center">
              <img
                src="img/Screenshot2.png "
                className="rounded mx-auto d-block  my-3 mx-3"
                alt="..."
                style={{ width: "18rem" }}
              />
              <img
                src="img/Screenshot1.png"
                className="rounded mx-auto d-block  my-3 mx-3"
                alt="..."
                style={{ width: "18rem" }}
              />
              <img
                src="img/Screenshot3.png "
                className="rounded mx-auto d-block  my-3 mx-3"
                alt="..."
                style={{ width: "18rem" }}
              />
            </div>
          </>
        }
      />
    </>
  );
};

export default Home;
