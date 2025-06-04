import { SPEAKERS } from "../assets/const";

const Speakers = () => {
  return (
    <>
      {SPEAKERS.map((data1, idx1) => (
        <section id="speakers" className="wow fadeInUp" key={idx1}>
          <div className="container">
            <div className="section-header">
              <h2>{data1.tugsult}</h2>
              <p>{data1.description}</p>
            </div>

            <div className="row">
              {data1.teachers.map((teach, idx2) => (
                <div key={idx1 + "" + idx2} className="col-lg-4 col-md-6">
                  <div className="speaker">
                    <img
                      src={teach.img}
                      alt={teach.name}
                      className="img-fluid"
                    />
                    <div className="details">
                      <h3>
                        <a href={`/speaker/${teach.id}`}>{teach.name}</a>
                      </h3>
                      <p>
                        {teach.title} <br />
                      </p>

                      {teach.social && (
                        <div className="social">
                          {teach.social.twitter && (
                            <a href="">
                              <i className="fa fa-twitter"></i>
                            </a>
                          )}
                          {teach.social.facebook && (
                            <a href="">
                              <i className="fa fa-facebook"></i>
                            </a>
                          )}
                          {teach.social.linkedin && (
                            <a href="">
                              <i className="fa fa-linkedin"></i>
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default Speakers;
