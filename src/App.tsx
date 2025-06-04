import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Speakers from "./components/Speakers";

function App() {
  return (
    <>
      <Header />
      <Intro />
      <main id="main">
        <About/>
        <Speakers/>
        <section id="schedule" className="section-with-bg">
          <div className="container wow fadeInUp">
            <div className="section-header">
              <h2>20 ЖИЛИЙН ОЙН ХӨТӨЛБӨР</h2>
              <p>ХӨТӨЛБӨРИЙН ДЭЛГЭРЭНГҮЙ</p>
            </div>

            <ul className="nav nav-tabs" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  href="#day-1"
                  role="tab"
                  data-toggle="tab"
                >
                  ӨДӨР 1-VI/18{" "}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#day-2"
                  role="tab"
                  data-toggle="tab"
                >
                  ӨДӨР 2-VI/19
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#day-3"
                  role="tab"
                  data-toggle="tab"
                >
                  ӨДӨР 3-VI/20-22
                </a>
              </li>
            </ul>

            <h3 className="sub-heading">ХӨТӨЛБӨРИЙН ДЭЛГЭРЭНГҮЙ</h3>

            <div className="tab-content row justify-content-center">
              <div
                role="tabpanel"
                className="col-lg-9 tab-pane fade show active"
                id="day-1"
              >
                <div className="row schedule-item">
                  <div className="col-md-2">
                    <time>11:00 AM</time>
                  </div>
                  <div className="col-md-10">
                    <h4>БАЯНЗҮРХ ТОВЧОО</h4>
                    <p>
                      УБ хотоос оролцох төгсөгчид нэгдсэн байдлаар гарч, замдаа
                      дроноор дурсамж зураг, бичлэг хийх
                    </p>
                  </div>
                </div>
              </div>
              <div
                role="tabpanel"
                className="col-lg-9  tab-pane fade"
                id="day-2"
              >
                <div className="row schedule-item">
                  <div className="col-md-2">
                    <time>10:00 AM</time>
                  </div>
                  <div className="col-md-10">
                    <div className="speaker">
                      <img src="assets/img/2005 logo .png" alt="Лого" />
                    </div>
                    <h4>
                      Багш нарт зориулсан хүндэтгэлийн арга хэмжээ <br />
                      <br />
                      <span>Жаахан шарга театр</span>
                    </h4>
                    <p></p>
                  </div>
                </div>

                <div className="row schedule-item">
                  <div className="col-md-2">
                    <time>13:00 AM</time>
                  </div>
                  <div className="col-md-10">
                    <div className="speaker">
                      <img
                        src="assets/img/2005 logo .png"
                        alt="Hubert Hirthe"
                      />
                    </div>
                    <h4>
                      Нийт төгсөгчидийн дурсамж, хүндэтгэлийн зураг, бичлэг{" "}
                      <br />
                      <br />
                      <span>Сүхбаатар аймгийн төв талбайд</span>
                    </h4>
                    <p></p>
                  </div>
                </div>

                <div className="row schedule-item">
                  <div className="col-md-2">
                    <time>14:30 PM</time>
                  </div>
                  <div className="col-md-10">
                    <div className="speaker">
                      <img
                        src="assets/img/2005 logo .png"
                        alt="Cole Emmerich"
                      />
                    </div>
                    <h4>
                      Нийт төгсөгч 15 анги тус бүр төрөлх сургууль, ангидаа очин
                      дурсамж хичээлтэй <br />
                      <br />
                      <span>1-р 10 жил, 2-р 10 жил</span>
                    </h4>
                    <p></p>
                  </div>
                </div>

                <div className="row schedule-item">
                  <div className="col-md-2">
                    <time>18:00 PM</time>
                  </div>
                  <div className="col-md-10">
                    <div className="speaker">
                      <img
                        src="assets/img/2005 logo .png"
                        alt="нямбаатар дахиад л"
                      />
                    </div>
                    <h4>
                      Оройн хүлээн авалт <br />
                      <br />
                      <span>"Дарьганга" event hall</span>
                    </h4>
                    <p></p>
                  </div>
                </div>
              </div>
              <div
                role="tabpanel"
                className="col-lg-9  tab-pane fade"
                id="day-3"
              >
                <div className="row schedule-item">
                  <div className="col-md-2">
                    <time>13:00 PM</time>
                  </div>
                  <div className="col-md-10">
                    <div className="speaker">
                      <img
                        src="assets/img/2005 logo .png"
                        alt="Чөлөөт хөтөлбөр"
                      />
                    </div>
                    <h4>
                      Төгсөлтийн төлөөлөл 2 сургуульдаа хүндэтгэл үзүүлж бэлэг
                      гардуулна <br />
                      <br />
                      <span></span>
                    </h4>
                    <p></p>
                  </div>
                </div>

                <div className="row schedule-item">
                  <div className="col-md-2">
                    <time>VI/20-22-нд</time>
                  </div>
                  <div className="col-md-10">
                    <div className="speaker">
                      <img
                        src="assets/img/2005 logo .png"
                        alt="Чөлөөт хөтөлбөр"
                      />
                    </div>
                    <h4>
                      Анги тус бүр чөлөөт арга хэмжээ зохион байгуулж, 20 жилийн
                      ойн уулзалт өндөрлөнө <br />
                      <br />
                      <span>1-р 10 жил, 2-р 10 жил</span>
                    </h4>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="venue" className="wow fadeInUp">
          <div className="container-fluid">
            <div className="section-header">
              <h2>20 ЖИЛИЙН ОЙГОО ТЭМДЭГЛЭХ ГАЗРУУД</h2>
              <p> ГАЗРЫН ЗУРГУУД</p>
            </div>

            <div className="row no-gutters">
              <div className="col-lg-6 venue-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2737.292422734978!2d113.27518257634105!3d46.68022927111984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5de6f3928773190b%3A0x37140d2b3ddd617a!2sJaakhan%20Sharga%20theatre!5e0!3m2!1sen!2smn!4v1747122887681!5m2!1sen!2smn"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div className="col-lg-6 venue-info">
                <div className="row justify-content-center">
                  <div className="col-11 col-lg-8">
                    <h3>
                      СҮХБААТАР АЙМАГ <br />
                      ЖААХАН ШАРГА ТЕАТР
                    </h3>
                    <p>ТА БҮХНИЙГ ХҮРЭЛЦЭН ИРЭХИЙГ УРЬЖ БАЙНА. </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container-fluid venue-gallery-container">
            <div className="row no-gutters">
              <div className="col-lg-3 col-md-4">
                <div className="venue-gallery">
                  <a
                    href="assets/img/100.png"
                    className="venobox"
                    data-gall="venue-gallery"
                  >
                    <img
                      src="assets/img/100.png"
                      alt=""
                      className="img-fluid"
                    />
                  </a>
                </div>
              </div>

              <div className="col-lg-3 col-md-4">
                <div className="venue-gallery">
                  <a
                    href="assets/img/venue-gallery/1666.jpg"
                    className="venobox"
                    data-gall="venue-gallery"
                  >
                    <img
                      src="assets/img/venue-gallery/1666.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </a>
                </div>
              </div>

              <div className="col-lg-3 col-md-4">
                <div className="venue-gallery">
                  <a
                    href="assets/img/venue-gallery/16 davhar.jpeg"
                    className="venobox"
                    data-gall="venue-gallery"
                  >
                    <img
                      src="assets/img/venue-gallery/16 davhar.jpeg"
                      alt=""
                      className="img-fluid"
                    />
                  </a>
                </div>
              </div>

              <div className="col-lg-3 col-md-4">
                <div className="venue-gallery">
                  <a
                    href="assets/img/venue-gallery/166.jpg"
                    className="venobox"
                    data-gall="venue-gallery"
                  >
                    <img
                      src="assets/img/venue-gallery/166.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </a>
                </div>
              </div>

              <div className="col-lg-3 col-md-4">
                <div className="venue-gallery">
                  <a
                    href="assets/img/venue-gallery/5.jpg"
                    className="venobox"
                    data-gall="venue-gallery"
                  >
                    <img
                      src="assets/img/venue-gallery/5.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </a>
                </div>
              </div>

              <div className="col-lg-3 col-md-4">
                <div className="venue-gallery">
                  <a
                    href="assets/img/venue-gallery/6.jpg"
                    className="venobox"
                    data-gall="venue-gallery"
                  >
                    <img
                      src="assets/img/venue-gallery/6.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </a>
                </div>
              </div>

              <div className="col-lg-3 col-md-4">
                <div className="venue-gallery">
                  <a
                    href="assets/img/venue-gallery/7.jpg"
                    className="venobox"
                    data-gall="venue-gallery"
                  >
                    <img
                      src="assets/img/venue-gallery/7.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </a>
                </div>
              </div>

              <div className="col-lg-3 col-md-4">
                <div className="venue-gallery">
                  <a
                    href="assets/img/venue-gallery/8.jpg"
                    className="venobox"
                    data-gall="venue-gallery"
                  >
                    <img
                      src="assets/img/venue-gallery/8.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="hotels" className="section-with-bg wow fadeInUp">
          <div className="container">
            <div className="section-header">
              <h2>АМРАЛТЫН ГАЗАР, ЗОЧИД БУУДЛУУД</h2>
              <p>
                Сүхбаатар аймаг дахь амралтын газар, зочид буудлуудын товч
                мэдээлэл
              </p>
            </div>

            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="hotel">
                  <div className="hotel-img">
                    <img
                      src="assets/img/sod hotel.webp"
                      alt="Hotel 1"
                      className="img-fluid"
                    />
                  </div>
                  <h3>
                    <a href="#">"CОД" ЗОЧИД БУУДАЛ</a>
                  </h3>
                  <div className="stars">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <p>Болох газраас 0.4 км </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="hotel">
                  <div className="hotel-img">
                    <img
                      src="assets/img/Dariganga Hotel.webp"
                      alt="ДАРЬГАНГА ЗОЧИД БУУДАЛ"
                      className="img-fluid"
                    />
                  </div>
                  <h3>
                    <a href="#">"ДАРЬГАНГА" ЗОЧИД БУУДАЛ</a>
                  </h3>
                  <div className="stars">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-half-full"></i>
                  </div>
                  <p>Болох газраас 0.5 </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="hotel">
                  <div className="hotel-img">
                    <img
                      src="assets/img/hotels/3.jpg"
                      alt="Буудал 3"
                      className="img-fluid"
                    />
                  </div>
                  <h3>
                    <a href="#">Буудал 3</a>
                  </h3>
                  <div className="stars">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <p>Болох газраас 0.6км</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="wow fadeInUp">
          <div className="container">
            <div className="section-header">
              <h2>ЗУРГИЙН САН</h2>
              <p>Бидний зургийн сангаас</p>
            </div>
          </div>

          <div className="owl-carousel gallery-carousel">
            <a
              href="assets/img/2005 logo .png"
              className="venobox"
              data-gall="gallery-carousel"
            >
              <img src="assets/img/2005 logo .png" alt="" />
            </a>
            <a
              href="assets/img/gallery/2.jpg"
              className="venobox"
              data-gall="gallery-carousel"
            >
              <img src="assets/img/gallery/20005.jpg" alt="" />
            </a>
            <a
              href="assets/img/gallery/20005.jpg"
              className="venobox"
              data-gall="gallery-carousel"
            >
              <img src="assets/img/gallery/20005.jpg" alt="" />
            </a>
            <a
              href="assets/img/gallery/2005 basketball.jpg"
              className="venobox"
              data-gall="gallery-carousel"
            >
              <img src="assets/img/gallery/2005 basketball.jpg" alt="" />
            </a>
            <a
              href="assets/img/gallery/2005.jpg"
              className="venobox"
              data-gall="gallery-carousel"
            >
              <img src="assets/img/gallery/2005.jpg" alt="" />
            </a>
            <a
              href="assets/img/gallery/20052.jpg"
              className="venobox"
              data-gall="gallery-carousel"
            >
              <img src="assets/img/gallery/20052.jpg" alt="" />
            </a>
            <a
              href="assets/img/gallery/20055.jpg"
              className="venobox"
              data-gall="gallery-carousel"
            >
              <img src="assets/img/gallery/20055.jpg" alt="" />
            </a>
            <a
              href="assets/img/gallery/Ohid basketball.jpg"
              className="venobox"
              data-gall="gallery-carousel"
            >
              <img src="assets/img/gallery/Ohid basketball.jpg" alt="" />
            </a>
          </div>
        </section>
        <section id="supporters" className="section-with-bg wow fadeInUp">
          <div className="container">
            <div className="section-header">
              <h2>ИВЭЭН ТЭТГЭГЧ </h2>
            </div>

            <div className="row no-gutters supporters-wrap clearfix">
              <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="supporter-logo">
                  <img
                    src="assets/img/supporters/1.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="supporter-logo">
                  <img
                    src="assets/img/supporters/2.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="supporter-logo">
                  <img
                    src="assets/img/supporters/3.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="supporter-logo">
                  <img
                    src="assets/img/supporters/4.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="supporter-logo">
                  <img
                    src="assets/img/supporters/5.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="supporter-logo">
                  <img
                    src="assets/img/supporters/6.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="supporter-logo">
                  <img
                    src="assets/img/supporters/7.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="supporter-logo">
                  <img
                    src="assets/img/supporters/8.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="faq" className="wow fadeInUp">
          <div className="container">
            <div className="section-header">
              <h2>НИЙТЛЭГ АСУУЛТ </h2>
            </div>

            <div className="row justify-content-center">
              <div className="col-lg-9">
                <ul id="faq-list">
                  <li>
                    <a
                      data-toggle="collapse"
                      className="collapsed"
                      href="#faq1"
                    >
                      Ойн баяр хэзээ, хаана болох вэ?{" "}
                      <i className="fa fa-minus-circle"></i>
                    </a>
                    <div id="faq1" className="collapse" data-parent="#faq-list">
                      <p>
                        📅 2025 оны 6-р сарын 19-нд 📍 Сүхбаатар аймаг,
                        Баруун-Урт хот.
                      </p>
                    </div>
                  </li>

                  <li>
                    <a
                      data-toggle="collapse"
                      href="#faq2"
                      className="collapsed"
                    >
                      Оролцохын тулд хаана бүртгүүлэх вэ?{" "}
                      <i className="fa fa-minus-circle"></i>
                    </a>
                    <div id="faq2" className="collapse" data-parent="#faq-list">
                      <p>
                        Бүртгэлийн формыг вэбсайтын "Бүртгүүлэх" хэсэгт доорх
                        Google Form-ийг бөглөнө үү. Холбоо барих мэдээллээ үнэн
                        зөв оруулахыг хүсье.
                      </p>
                    </div>
                  </li>

                  <li>
                    <a
                      data-toggle="collapse"
                      href="#faq3"
                      className="collapsed"
                    >
                      Арга хэмжээний хөтөлбөрт юу багтаж байгаа вэ?
                      <i className="fa fa-minus-circle"></i>
                    </a>
                    <div id="faq3" className="collapse" data-parent="#faq-list">
                      <p>
                        Танилцуулга, хүндэтгэлийн хэсэг Хөгжим, бүжиг, хөгжилтэй
                        тоглоом Дурсамж сэргээх булан, фото зураг Сугалаа, бэлэг
                        гардуулах хэсэг Чөлөөт ярилцлага, networking
                      </p>
                    </div>
                  </li>

                  <li>
                    <a
                      data-toggle="collapse"
                      href="#faq4"
                      className="collapsed"
                    >
                      {" "}
                      Төлбөр хэд вэ, юунд зарцуулагдах вэ? Төлбөр: 400,000₮{" "}
                      <i className="fa fa-minus-circle"></i>
                    </a>
                    <div id="faq4" className="collapse" data-parent="#faq-list">
                      <p>
                        Үүнд: байр, хоол, унаа, хөтөлбөрийн зардал багтсан
                        болно.
                      </p>
                    </div>
                  </li>

                  <li>
                    <a
                      data-toggle="collapse"
                      href="#faq5"
                      className="collapsed"
                    >
                      {" "}
                      Хувцаслалтын код бий юу?{" "}
                      <i className="fa fa-minus-circle"></i>
                    </a>
                    <div id="faq5" className="collapse" data-parent="#faq-list">
                      <p>
                        Өдөр: чөлөөт хувцас Орой: гоёлын / улаан хивсний
                        үдэшлэгт зохицсон хувцас
                      </p>
                    </div>
                  </li>

                  <li>
                    <a
                      data-toggle="collapse"
                      href="#faq6"
                      className="collapsed"
                    >
                      Хэрвээ ирж чадахгүй бол яах вэ?{" "}
                      <i className="fa fa-minus-circle"></i>
                    </a>
                    <div id="faq6" className="collapse" data-parent="#faq-list">
                      <p>
                        Та цахимаар мэндчилгээ илгээж, видео мэндчилгээ явуулж
                        болно. Танд зориулсан хэсгийг бэлтгэж оруулах болно..
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="subscribe">
          <div className="container wow fadeInUp">
            <div className="section-header">
              <h2>МЭДЭЭ, МЭДЭЭЛЭЛ</h2>
              <p>
                {" "}
                1995-2005 оны төгсөгчдийн ойн арга хэмжээ, цаашид бусад
                холбогдох мэдээ, мэдээллийг хүргэнэ.
              </p>
            </div>

            <form method="POST" action="#">
              <div className="form-row justify-content-center">
                <div className="col-auto">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your Email"
                  />
                </div>
                <div className="col-auto">
                  <button type="submit">Subscribe</button>
                </div>
              </div>
            </form>
          </div>
        </section>

        <section id="buy-tickets" className="section-with-bg wow fadeInUp">
          <div className="container">
            <div className="section-header">
              <h2>ТӨЛБӨР ХУРААМЖ</h2>
              <p>
                20 жилийн ойн хүрээнд гарах зардлуудын талаар дэлгэрэнгүй
                орууллаа.
              </p>
            </div>

            <div className="row">
              <div className="col-lg-4">
                <div className="card mb-5 mb-lg-0">
                  <div className="card-body">
                    <h5 className="card-title text-muted text-uppercase text-center">
                      ЗААВАЛ ТӨЛӨХ
                    </h5>
                    <h6 className="card-price text-center">245000₮</h6>
                    <hr />
                    <ul className="fa-ul">
                      <li>
                        <span className="fa-li">
                          <i className="fa fa-check"></i>
                        </span>
                        Regular Seating
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fa fa-check"></i>
                        </span>
                        Coffee Break
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fa fa-check"></i>
                        </span>
                        Custom Badge
                      </li>
                      <li className="text-muted">
                        <span className="fa-li">
                          <i className="fa fa-times"></i>
                        </span>
                        Community Access
                      </li>
                      <li className="text-muted">
                        <span className="fa-li">
                          <i className="fa fa-times"></i>
                        </span>
                        Workshop Access
                      </li>
                      <li className="text-muted">
                        <span className="fa-li">
                          <i className="fa fa-times"></i>
                        </span>
                        After Party
                      </li>
                    </ul>
                    <hr />
                    <div className="text-center">
                      <button
                        type="button"
                        className="btn"
                        data-toggle="modal"
                        data-target="#buy-ticket-modal"
                        data-ticket-type="standard-access"
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card mb-5 mb-lg-0">
                  <div className="card-body">
                    <h5 className="card-title text-muted text-uppercase text-center">
                      ОЙН АРГА ХЭМЖЭЭНД ОРОЛЦОХ ХУРААМЖ
                    </h5>
                    <h6 className="card-price text-center">400000₮</h6>
                    <hr />
                    <ul className="fa-ul">
                      <li>
                        <span className="fa-li">
                          <i className="fa fa-check"></i>
                        </span>
                        Regular Seating
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fa fa-check"></i>
                        </span>
                        Coffee Break
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fa fa-check"></i>
                        </span>
                        Custom Badge
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fa fa-check"></i>
                        </span>
                        Community Access
                      </li>
                      <li className="text-muted">
                        <span className="fa-li">
                          <i className="fa fa-times"></i>
                        </span>
                        Workshop Access
                      </li>
                      <li className="text-muted">
                        <span className="fa-li">
                          <i className="fa fa-times"></i>
                        </span>
                        After Party
                      </li>
                    </ul>
                    <hr />
                    <div className="text-center">
                      <button
                        type="button"
                        className="btn"
                        data-toggle="modal"
                        data-target="#buy-ticket-modal"
                        data-ticket-type="pro-access"
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title text-muted text-uppercase text-center">
                      ПРЕМИУМ{" "}
                    </h5>
                    <h6 className="card-price text-center">600000₮</h6>
                    <hr />
                    <ul className="fa-ul">
                      <li>
                        <span className="fa-li">
                          <i className="fa fa-check"></i>
                        </span>
                        энгийн суудал
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fa fa-check"></i>
                        </span>
                        кофе, цай
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fa fa-check"></i>
                        </span>
                        .....
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fa fa-check"></i>
                        </span>
                        Холбоонд элсэх эрх
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fa fa-check"></i>
                        </span>
                        Хурлын эрх
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fa fa-check"></i>
                        </span>
                        After Party
                      </li>
                    </ul>
                    <hr />
                    <div className="text-center">
                      <button
                        type="button"
                        className="btn"
                        data-toggle="modal"
                        data-target="#buy-ticket-modal"
                        data-ticket-type="premium-access"
                      >
                        Авах
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="buy-ticket-modal" className="modal fade">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">ХУДАЛДАН АВАХ</h4>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form method="POST" action="#">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="your-name"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="your-email"
                        placeholder="Your Email"
                      />
                    </div>
                    <div className="form-group">
                      <select
                        id="ticket-type"
                        name="ticket-type"
                        className="form-control"
                      >
                        <option value="">-- Select Your Ticket Type --</option>
                        <option value="standard-access">Standard Access</option>
                        <option value="pro-access">Pro Access</option>
                        <option value="premium-access">Premium Access</option>
                      </select>
                    </div>
                    <div className="text-center">
                      <button type="submit" className="btn">
                        ХУДАЛДАН АВАХ
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section-bg wow fadeInUp">
          <div className="container">
            <div className="section-header">
              <h2>ХОЛБОО БАРИХ</h2>
              <p>ЗОХИОН БАЙГУУЛАЛТЫН БАГТАЙ ХОЛБОГДОНО УУ</p>
            </div>

            <div className="row contact-info">
              <div className="col-md-4">
                <div className="contact-address">
                  <i className="ion-ios-location-outline"></i>
                  <h3>ХАЯГ</h3>
                  <address>
                    СҮХБААТАР АЙМАГ, БАРУУН-УРТ ХОТ, ЖААХАН ШАРГА ТЕАТР
                  </address>
                </div>
              </div>

              <div className="col-md-4">
                <div className="contact-phone">
                  <i className="ion-ios-telephone-outline"></i>
                  <h3>ХОЛБОО БАРИХ ДУГААР</h3>
                  <p>
                    <a href="tel:+976 11 9911-xxxx">+ 976 11 9911-xxxx</a>
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="contact-email">
                  <i className="ion-ios-email-outline"></i>
                  <h3>Email</h3>
                  <p>
                    <a href="mailto:info@example.com">info2005@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="form">
              <div id="sendmessage">Your message has been sent. Thank you!</div>
              <div id="errormessage"></div>
              <form action="" method="post" role="form" className="contactForm">
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      data-rule="minlen:4"
                      data-msg="Please enter at least 4 chars"
                    />
                    <div className="validation"></div>
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      data-rule="email"
                      data-msg="Please enter a valid email"
                    />
                    <div className="validation"></div>
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    data-rule="minlen:4"
                    data-msg="Please enter at least 8 chars of subject"
                  />
                  <div className="validation"></div>
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    name="message"
                    rows={5}
                    data-rule="required"
                    data-msg="Please write something for us"
                    placeholder="Message"
                  ></textarea>
                  <div className="validation"></div>
                </div>
                <div className="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer/>
    </>
  );
}

export default App;
