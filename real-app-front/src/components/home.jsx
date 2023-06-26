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
            <img
              src="/real-app-front/public/Screenshot1.png"
              className="rounded float-start"
              alt="example-1"
              style={{ width: "18rem" }}
            />
          </>
        }
      />
      <img
        src="../images/Screenshot1.png"
        className="img-fluid"
        alt="example-1"
        style={{ width: "18rem" }}
      />
      <img
        src="https://d3m9l0v76dty0.cloudfront.net/system/photos/788200/original/43a376b7e82c1b5e1050ac39fa24099b.jpg?1679401249"
        className="rounded float-start"
        alt="example-1"
        style={{ width: "18rem" }}
      />
      <img
        src="https://d3m9l0v76dty0.cloudfront.net/system/photos/788200/original/43a376b7e82c1b5e1050ac39fa24099b.jpg?1679401249"
        className="rounded float-start"
        alt="example-1"
        style={{ width: "18rem" }}
      />
    </>
  );
};

export default Home;
