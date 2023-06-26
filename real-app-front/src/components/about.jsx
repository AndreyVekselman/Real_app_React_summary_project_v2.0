import PageHeader from "./common/pageHeder";

const About = () => {
  return (
    <PageHeader
      title={
        <>
          About Real <i className="bi bi-boxes"></i> App
        </>
      }
      description={
        <>
          The{" "}
          <b>
            Real <b className="bi bi-boxes"></b> App{" "}
          </b>
          application can manage accounts that include personal data and photos.
          <br />
          For example, create, edit and delete business cards for each
          individual user with different access to the cards data.
          <br />
          Data of users and business cards are stored on a local server, in this
          case on your personal computer. <br /> The{" "}
          <b>
            Real <b className="bi bi-boxes"></b> App{" "}
          </b>{" "}
          has header, footer and main page. the footer contains the logo and
          application copywriter. <br />
          The Header has a dynamic navigation menu that takes the user to the
          following pages: <b>Home</b>, <b>About</b>, login <b>Sign In</b>,
          regular user registration <b>Sign Up</b>, business user registration{" "}
          <b>Sign Up Business</b>, a page that displays business cards{" "}
          <b>My Cards</b> and allows you to create, delete and edit them. Header
          also has an option to user logout <b>Sign Out</b> and a{" "}
          <b> Light/Dark</b> modes switch. <br />
          The application has two types of registered users: ordinary and{" "}
          <b>business</b> . An ordinary user does not have any privileges and,
          like an unregistered user, has limited access to the application's
          features. <br />
          To register in the application, the user needs to click on the{" "}
          <b>Sign Up</b>
          menu and then fill out a simple registration form: <b>Name</b>,{" "}
          <b>Email</b> and <b>Password</b>. After filling in the required fields
          in the registration form, the user must click on the <b>Sign Up</b>{" "}
          button to confirm registration or on the <b>Cancel</b> button to
          cancel.
        </>
      }
    />
  );
};

export default About;
