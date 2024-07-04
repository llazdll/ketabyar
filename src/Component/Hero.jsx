
import BgShape from "../images/hero/hero-bg.png";
import bookimg from "../images/hero/bookbg.png"
import { useEffect, useState } from "react";
import { IconChevronRight, IconCircleCheck } from "@tabler/icons-react";

function Hero() {
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" });
  };

  const bookBtn = () => {
    document
      .querySelector("#booking-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.pageYOffset > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);
  return (
    <>
      <section id="home" className="hero-section">
        <div className="container">
          <img className="bg-shape" src={BgShape} alt="bg-shape" />
          <div className="hero-content">
            <div className="hero-content__text">
              <h4>کتابت رو همین الان قرض بگیر</h4>
              <h1>
                با <span>کتاب یار</span> دیگه پول به کتاب نده
              </h1>
              <p>
               با کتاب یار هر کتابی که میخای رو قرض بگیر بخون بهمون برگردون 
              </p>
              <div className="hero-content__text__btns">
                  <div
                  onClick={bookBtn}
                  className="hero-content__text__btns__book-ride"
                  
                >
                  کتابت رو قرض بگیر &nbsp; <IconCircleCheck />
                  </div>
                  <div className="hero-content__text__btns__learn-more">
                  ادامه مطالب &nbsp; <IconChevronRight />
                  </div>
              </div>
            </div>

            {/* img */}
            <img
              src={bookimg}
              alt="book-img"
              className="hero-content__car-img"
            />
          </div>
        </div>

        {/* page up */}
        <div
          onClick={scrollToTop}
          className={`scroll-up ${goUp ? "show-scroll" : ""}`}
        >
          ^
        </div>
      </section>
    </>
  );
}

export default Hero;
