import { useEffect, useState } from "react";

const Intro = () => {
  const [countdownText, setCountdownText] = useState("");

  useEffect(() => {
    const countDownDate = new Date("June 19, 2025 10:00:00").getTime();

    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      if (distance < 0) {
        clearInterval(intervalId);
        setCountdownText("УУЛЗАЛТ ЭХЭЛЛЭЭ!");
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setCountdownText(
          `Уулзалт хүртэл: ${days} өдөр ${hours} цаг ${minutes} мин ${seconds} сек`
        );
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <section id="intro">
      <div className="intro-container wow fadeIn">
        <br />
        <br />
        <br />
        <h1 className="mb-4 pb-0">
          1995-2005
          <br />
          <span>20 ЖИЛ</span> ОЙН УУЛЗАЛТ
        </h1>
        <p className="mb-4 pb-0">
          2025 ОНЫ 06 САРЫН 19-НД 10 ЦАГТ, ЖААХАН ШАРГА ТЕАТРТ
        </p>
        <a
          href="https://www.youtube.com/watch?v=_2Ij-pMosWE"
          className="venobox play-btn mb-4"
          data-vbtype="video"
          data-autoplay="true"
        ></a>
        <a href="#about" className="about-btn scrollto">
          дэлгэрэнгүй
        </a>
        <br /> <br /> <br />
        <br />
        <div
          id="countdown"
          style={{
            fontSize: "30px",
            fontWeight: "bold",
            color: "rgb(241, 241, 237)",
            marginBottom: "20px",
          }}
        >
          {countdownText}
        </div>
      </div>
    </section>
  );
};

export default Intro;
