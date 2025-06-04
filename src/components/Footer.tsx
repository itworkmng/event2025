const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 footer-info">
                <img
                  src="assets/img/2005 logo .png"
                  alt="2005 ОНЫ ТӨГСӨЛТИЙХЭН"
                />
                <p>
                  Энэхүү вэбсайт нь 1995-2005 онд Сүхбаатар аймгийн хүрээнд
                  төгссөн нийт төгсөгчдийн 20 жилийн ойд зориулж хийгдсэн болно.
                </p>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Хэрэгтэй холбоосууд</h4>
                <ul>
                  <li>
                    <i className="fa fa-angle-right"></i>{" "}
                    <a href="/">НҮҮР ХУУДАС</a>
                  </li>
                  <li>
                    <i className="fa fa-angle-right"></i>{" "}
                    <a href="#">БИДНИЙ ТУХАЙ</a>
                  </li>
                  <li>
                    <i className="fa fa-angle-right"></i>{" "}
                    <a href="#">ҮЙЛЧИЛГЭЭ</a>
                  </li>
                  <li>
                    <i className="fa fa-angle-right"></i>{" "}
                    <a href="#">ҮЙЛЧИЛГЭЭНИЙ НӨХЦӨЛ</a>
                  </li>
                  <li>
                    <i className="fa fa-angle-right"></i>{" "}
                    <a href="#">НУУЦЫН БОДЛОГО</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Хэрэгтэй холбоосууд</h4>
                <ul>
                  <li>
                    <i className="fa fa-angle-right"></i>{" "}
                    <a href="#">НҮҮР ХУУДАС</a>
                  </li>
                  <li>
                    <i className="fa fa-angle-right"></i>{" "}
                    <a href="#">БИДНИЙ ТУХАЙ</a>
                  </li>
                  <li>
                    <i className="fa fa-angle-right"></i>{" "}
                    <a href="#">ҮЙЛЧИЛГЭЭ</a>
                  </li>
                  <li>
                    <i className="fa fa-angle-right"></i>{" "}
                    <a href="#">ҮЙЛЧИЛГЭЭНИЙ НӨХЦӨЛ</a>
                  </li>
                  <li>
                    <i className="fa fa-angle-right"></i>{" "}
                    <a href="#">НУУЦЫН БОДЛОГО</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-contact">
                <h4>ХОЛБОО БАРИХ</h4>
                <p>
                  СҮХБААТАР АЙМАГ <br />
                  БАРУУН-УРТ ХОТ
                  <br />
                  ЖААХАН ШАРГА ТЕАТР <br />
                  <strong>УТАС:</strong> +976 11 9911-xxxx
                  <br />
                  <strong>Email:</strong> info2005@gmail.com
                  <br />
                </p>

                <div className="social-links">
                  <a href="#" className="twitter">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="#" className="facebook">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="#" className="instagram">
                    <i className="fa fa-instagram"></i>
                  </a>
                  <a href="#" className="google-plus">
                    <i className="fa fa-google-plus"></i>
                  </a>
                  <a href="#" className="linkedin">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="copyright">
            &copy; Copyright <strong>"2005 ТӨГСӨЛТИЙХЭН"</strong>. Зохиогчийн
            эрх хуулиар хамгаалагдсан
          </div>
          <div className="credits">
            Designed by <a href="https://codnex.io/">"CODNEX" ХХК</a>
          </div>
        </div>
      </footer>
      <a href="#" className="back-to-top">
        <i className="fa fa-angle-up"></i>
      </a>
    </>
  );
};

export default Footer;
