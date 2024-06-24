import { Link } from "react-router-dom";

const ArtikelCard = () => {
  const artikels = [
    {
      link: "/artikel1",
      imgSrc: "/images/health1.png",
      title: "Apa itu mental health?",
    },
    {
      link: "/artikel2",
      imgSrc: "/images/health2.png",
      title: "Apa itu konseling? dan apa saja jenisnya?",
    },
    {
      link: "/artikel3",
      imgSrc: "/images/health3.png",
      title: "Contoh gangguan kesehatan mental",
    },
    {
      link: "/artikel4",
      imgSrc: "/images/health4.png",
      title: "Breaking the stigma",
    },
  ];
  return (
    <div className="grid grid-cols-1 lg:gap-6 md:grid-cols-2 lg:grid-cols-4 w-full">
      {artikels.map((article, index) => (
        <CardContent key={index} article={article} />
      ))}
    </div>
  );
};

const CardContent = ({ article }) => {
    const content = (
      <div className="card-artikel">
        <div className="flex justify-center">
          <img src={article.imgSrc} alt={article.title} className="w-1/2 lg:w-3/4" />
        </div>
        <div>
          <h1 className="title-artikel">{article.title}</h1>
        </div>
      </div>
    );
  
    return article.link ? <Link to={article.link}>{content}</Link> : content;
  };

export default ArtikelCard;
