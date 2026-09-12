import "./Home.css";

function Home() {
  return (
    // <header className="">
    <div className="container">
      <div className="row header">
        <div className="col-lg-6 pe-5">
          <p className="text-danger heroSecPsl">Academy | Learn what is next</p>
          <h1 className="heroSecH1">Build your skills.</h1>
          <h1 className="heroSecH1">Build your Future.</h1>
          <p>
            Free online courses and certification-aligned pathways designed to
            help you stand out in the job market. From AI and cybersecurity to
            networking and digital literacy, it is all here.
          </p>
          <p className="text-success">
            Start where you are, learn at your pace, and gain the confidence to
            take your next step in technology.
          </p>
          <div className="Btn-Hero">
            <button className="Btn">start learning</button>
            <button className="Btn-1">Explore Academy</button>
          </div>
        </div>
        <div className="col-lg-6">
          <img
            className="img-fluid"
            src="https://www.netacad.com/sfa-assets/images/png/landingBannerImage.png"
            alt="img"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
