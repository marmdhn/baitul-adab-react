import React from "react";

const NewsCard = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <>
      <div className="card card-compact w-96 shadow-xl bg-primary-content">
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

      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box text-primary-content text-center">
          <h3 className="font-bold text-lg">Coming Soon</h3>
          <p className="py-4">Konten ini akan segera hadir. Stay tuned!</p>
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_7">
          Close
        </label>
      </div>
    </>
  );
};

export default NewsCard;
