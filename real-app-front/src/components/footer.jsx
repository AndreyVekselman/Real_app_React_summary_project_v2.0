const Footer = () => {
  return (
    <footer className="container border-top pt-3 py-2 text-center">
      <span>
        Real <i className="i bi bi-geo-fill ">App</i>
      </span>
      <span className="mx-2">&copy;</span>
      <span>{new Date().getFullYear()}</span>
    </footer>
  );
};

export default Footer;
