import React from "react";

const NewsCard = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <>
      <div className="card card-compact w-auto lg:w-64 xl:w-96 shadow-xl bg-primary-content">
        <div className="px-4 pt-4 rounded-lg">
          <img src="/image/home/news.png" alt="school-pict" />
        </div>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{desc}</p>
          <div className="card-actions justify-end">
            <label htmlFor="my_modal_7" className="hover:cursor-pointer">
              Lihat Selangkapnya <i className="bi bi-arrow-right" />
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsCard;
