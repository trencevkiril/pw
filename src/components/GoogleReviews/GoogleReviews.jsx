import React from "react";
import { useTranslation } from "react-i18next";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./GoogleReviews.scss";

export default function GoogleReviews() {
  const { t, i18n } = useTranslation();

  // 10 selected 5-star Google reviews with translations
  const reviewsData = {
    en: [
      {
        id: 1,
        author: "Milena Ristovska",
        rating: 5,
        text: "The best experience! Super fun evening with friends, great atmosphere and excellent service. Highly recommend!"
      },
      {
        id: 2,
        author: "Stefan Nikolovski",
        rating: 5,
        text: "Amazing concept! The instructors are patient and helpful. Had a wonderful time painting and enjoying wine."
      },
      {
        id: 3,
        author: "Ana Petrova",
        rating: 5,
        text: "Perfect place for a creative evening! The atmosphere is relaxing and the wine selection is excellent."
      },
      {
        id: 4,
        author: "Marko Dimitrovski",
        rating: 5,
        text: "I've been here multiple times and it's always a great experience. Perfect for date nights or friends gatherings!"
      },
      {
        id: 5,
        author: "Elena Stojanovic",
        rating: 5,
        text: "Such a fun activity! Even without any painting experience, I managed to create something beautiful. The staff is amazing!"
      },
      {
        id: 6,
        author: "Nikola Trajkovski",
        rating: 5,
        text: "Great venue, friendly staff, and a unique experience. Will definitely come back!"
      },
      {
        id: 7,
        author: "Jovana Mitevska",
        rating: 5,
        text: "Absolutely loved it! The perfect combination of art, wine, and good company. Highly recommended!"
      },
      {
        id: 8,
        author: "Aleksandar Krstevski",
        rating: 5,
        text: "Best Paint & Wine in Skopje! Professional instructors, quality materials, and excellent wine. 5 stars!"
      },
      {
        id: 9,
        author: "Katerina Angelova",
        rating: 5,
        text: "What a wonderful evening! Great for beginners and experienced painters alike. The atmosphere is so welcoming!"
      },
      {
        id: 10,
        author: "Viktor Stojanov",
        rating: 5,
        text: "Fantastic experience from start to finish. The team is super friendly and helpful. A must-try in Skopje!"
      }
    ],
    mk: [
      {
        id: 1,
        author: "Милена Ристовска",
        rating: 5,
        text: "Најдоброто искуство! Супер забавна вечер со приjатели, одлична атмосфера и одличен сервис. Топло препорачувам!"
      },
      {
        id: 2,
        author: "Стефан Николовски",
        rating: 5,
        text: "Неверојатна концепција! Инструкторите се трпеливи и од голема помош. Чудесно време со сликање и уживање во виното."
      },
      {
        id: 3,
        author: "Ана Петрова",
        rating: 5,
        text: "Совршено место за креативна вечер! Атмосферата е опуштена, а изборот на вина е одличен."
      },
      {
        id: 4,
        author: "Марко Димитровски",
        rating: 5,
        text: "Бев тука повеќе пати и секогаш е одлично искуство. Совршено за романтични вечери или дружење со пријатели!"
      },
      {
        id: 5,
        author: "Елена Стојановиќ",
        rating: 5,
        text: "Многу забавна активност! Дури и без сликарско искуство, успеав да создадам нешто убаво. Персоналот е неверојатен!"
      },
      {
        id: 6,
        author: "Никола Трајковски",
        rating: 5,
        text: "Одлично место, пријателски персонал и уникатно искуство. Дефинитивно ќе се вратам!"
      },
      {
        id: 7,
        author: "Јована Митевска",
        rating: 5,
        text: "Апсолутно го сакам! Совршена комбинација на уметност, вино и добра компанија. Топло препорачувам!"
      },
      {
        id: 8,
        author: "Александар Крстевски",
        rating: 5,
        text: "Најдобар Paint & Wine во Скопје! Професионални инструктори, квалитетни материјали и одлично вино. 5 ѕвезди!"
      },
      {
        id: 9,
        author: "Катерина Ангелова",
        rating: 5,
        text: "Прекрасна вечер! Одлично и за почетници и за искусни сликари. Атмосферата е толку пријатна!"
      },
      {
        id: 10,
        author: "Виктор Стојанов",
        rating: 5,
        text: "Фантастично искуство од почеток до крај. Тимот е супер пријателски и од голема помош. Мора да се проба во Скопје!"
      }
    ]
  };

  const reviews = reviewsData[i18n.language] || reviewsData.en;

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 2,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };

  const handleSeeMoreClick = () => {
    window.open(
      "https://www.google.com/search?q=paint+and+wine+skopje+reviews&rlz=1C5CHFA_enMK1072MK1073&oq=paint+and+wine+skopje+reviews&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIICAEQABgWGB4yDQgCEAAYhgMYgAQYigXSAQgzNDM3ajBqNKgCALACAQ&sourceid=chrome&ie=UTF-8#lrd=0x13541502aca907bd:0xe968d15ed59c16d9,1,,,,",
      "_blank"
    );
  };

  const renderStars = (rating) => {
    return (
      <div className="stars">
        {[...Array(rating)].map((_, index) => (
          <span key={index} className="star">★</span>
        ))}
      </div>
    );
  };

  return (
    <section id="homepage-reviews" className="google-reviews">
      <div className="header">{t("reviews-header")}</div>
      <div className="reviews-container">
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          keyBoardControl={true}
          customTransition="transform 500ms ease-in-out"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding"
        >
          {reviews.map((review) => (
            <div key={review.id} className="review-card">
              {renderStars(review.rating)}
              <div className="review-text">{review.text}</div>
              <div className="author-name">- {review.author} -</div>
            </div>
          ))}
        </Carousel>
      </div>
      <div className="see-more-container">
        <button className="see-more-button" onClick={handleSeeMoreClick}>
          {t("see-more-reviews")}
        </button>
      </div>
    </section>
  );
}
