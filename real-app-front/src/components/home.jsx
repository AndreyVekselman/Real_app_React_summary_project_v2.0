import PageHeader from "./common/pageHeder";

const Home = () => {
  return (
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
          Only registered business users <b> (SignUp Business) </b> can create,
          edit and delete business cards.
        </>
      }
    />
  );
};

export default Home;
