import PageHeader from "./common/pageHeder";

const About = () => {
  return (
    <>
      <PageHeader
        title={
          <>
            About Real<i className="i bi bi-geo-fill">App</i>
          </>
        }
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
        sunt fugit dolore cupiditate, inventore vero nemo, natus vitae quas
        sint, numquam distinctio doloribus vel commodi ducimus? Delectus
        assumenda possimus ratione."
      />
    </>
  );
};

export default About;
