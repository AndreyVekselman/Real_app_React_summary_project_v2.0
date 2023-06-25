import PageHeader from "./common/pageHeder";

const Home = () => {
  return (
    <>
      <PageHeader
        title={
          <>
            Real<i className="i bi bi-geo-fill">App</i>
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

export default Home;
