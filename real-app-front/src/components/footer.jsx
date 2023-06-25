const Footer = () => {
  return (
    <footer className="border-top pt-3 py-2 text-center fw-bold fs-5">
      <span>
        Real <i className="bi bi-boxes "></i> App
      </span>
      <span className="mx-2 ">&copy;</span>
      <span>{new Date().getFullYear()}</span>
    </footer>
  );
};

export default Footer;
