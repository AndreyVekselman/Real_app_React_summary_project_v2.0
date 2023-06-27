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
          <b>Sign Up</b> menu and then fill out a simple registration form:{" "}
          <b>Name</b>, <b>Email</b> and <b>Password</b>. After filling in the
          required fields in the registration form, the user must click on the{" "}
          <b>Sign Up</b> button to confirm registration or on the <b>Cancel</b>{" "}
          button to cancel. <br />
          <b>
            <i className="bi bi-exclamation-octagon text-danger"></i>
          </b>{" "}
          The <b>Name</b> must contain at least 6 characters. The{" "}
          <b>Password</b> must contain at least 6 characters. <b>Email</b> must
          match a valid email. <br />
          After confirming the Sign Up registration, the user is redirected to
          the <b>Sign In</b> page and is invited to fill out the <b>Sign In</b>{" "}
          form: <b>Email</b> and <b>Password</b>. <br />
          <b>
            <i className="bi bi-exclamation-octagon text-danger"></i>
          </b>{" "}
          The <b>Password</b> must contain at least 6 characters. <b>Email</b>{" "}
          must match a valid email. <b>Email</b> and <b>Password</b> must match
          those entered by the user during registration.
          <br />
          After passing authorization, an icon will appear in the upper left
          corner of the application:{" "}
          <b>
            Hello <i className="bi bi-person-check"> </i>
          </b>{" "}
          . The user can use the application in accordance with the access
          granted to him. <br />A very similar procedure for registering a
          business user: User must also fill in the fields of the registration
          form: <b>Email</b>, <b>Password</b>, <b>Name</b>. <br />
          <b>
            <i className="bi bi-exclamation-octagon text-danger"></i>
          </b>{" "}
          The <b>Name</b> must contain at least 6 characters. The{" "}
          <b>Password</b> must contain at least 6 characters. <b>Email</b> must
          match a valid email. <br />
          Then click on the <b>Sign Up Business</b> button to confirm the
          registration or on the <b>Cancel</b> button to cancel the
          registration. After successful registration, the business user is
          automatically authorized, which is indicated by the icon{" "}
          <b>
            Hello <i className="bi bi-person-check"> </i>
          </b>{" "}
          in the upper left corner of the application. <br />
          After entering the application of a regular or business user, the{" "}
          <b>Sign In</b>, <b>Sign Up</b> and <b>Sign Up Business</b> buttons
          disappear from the navigation menu and the <b>Sign Out</b> menu
          appears to exit the application. For business users, the{" "}
          <b>My Cards</b> menu also appears. <br />
          <b>Light/Dark</b> mode switch is available to all users, even
          unregistered ones. <br />
          By clicking on the <b>My Cards</b> menu, the business user is taken to
          a page displaying the business cards they have created. If no business
          card has been created yet, a blank page is displayed. <br /> By
          clicking on the link <b>Create a New Card</b>, the business user is
          transferred to the page for creating a business card, where it is
          necessary to fill in the information required for the card:{" "}
          <b>Name</b>, <b>Description</b>, <b>Address</b>, <b>Phone</b> number,
          and a link to a <b>Image</b> if desired. <br />
          <b>
            <i className="bi bi-exclamation-octagon text-danger"></i>
          </b>{" "}
          The <b>Name</b>, <b>Description</b> and <b>Address</b> must contain at
          least 2 characters. The <b>Phone</b> number must a valid phone number
          and contain 9 numbers. <br />
          After filling in the required fields in the form for creating a
          business card, the user must click on the <b>Create Card</b> button to
          confirm the creation of a business card or on <b>Cancel</b> to cancel.{" "}
          <br />
          Each business card has two buttons: <b>Edit</b> and <b>Delete</b>.{" "}
          <br />
          When the user clicks on the <b>Delete</b> button, the business card is
          removed from the catalog and from the <b>My Cards</b> page. <br />
        </>
      }
    />
  );
};

export default About;
