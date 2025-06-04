import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { SPEAKERS, WEB_URL } from "../assets/const";
import Footer from "../components/Footer";

const SpeakersPage = () => {
  const { id } = useParams();
  const teacherId = parseInt(id || "");
  const allTeachers = SPEAKERS.flatMap((school) => school.teachers);

  const teacher = allTeachers.find((teacher) => teacher.id === teacherId);
  return (
    <div>
      <Header />

      <main id="main" className="main-page">
        <section id="speakers-details" className="wow fadeIn">
          <div className="container">
            <div className="section-header">
              <h2>МЭНДЧИЛГЭЭ</h2>
              <p>Зарим багш нарын шавь нартаа хүргэсэн мэндчилгээ</p>
            </div>

            <div className="row">
              <div className="col-md-6">
                <img src={WEB_URL+teacher?.img} alt={teacher?.name} className="img-fluid" />
              </div>

              <div className="col-md-6">
                <div className="details">
                  <h2>{teacher?.name}</h2>
                  <div className="social">
                    <a href="">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a href="">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a href="">
                      <i className="fa fa-google-plus"></i>
                    </a>
                    <a href="">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </div>
                  <p>
                    {teacher?.title}
                  </p>

                  <p
                    style={{
                      textAlign: "justify",
                      lineHeight: 1.8,
                      fontSize: "15px",
                    }}
                  >
                    {teacher?.about.map((about)=><>{about}<br/></>)}
                    
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    <Footer/>
    </div>
  );
};

export default SpeakersPage;
