import React from "react";
import { Link } from "react-router-dom";

interface ProgramCardProps {
  img: string;
  link: string;
  title: string;
  description: string;
  className?: string;
}

const ProgramCard: React.FC<ProgramCardProps> = ({
  img,
  link,
  title,
  description,
  className,
}) => {
  return (
    <>
      <div
        className={`card w-full h-[250px] lg:h-[300px] shadow-xl ${className}`}
      >
        <div className="card-body p-0 items-center text-center">
          <div className="flex h-full">
            {/* Kiri*/}
            <div className="w-96 hidden md:block">
              <img
                src={img}
                alt="school-pict"
                width={100}
                height={100}
                className="object-cover w-full h-full rounded-s-2xl"
              />
            </div>
            {/* Kiri*/}

            {/* Kanan*/}
            <div className="text-neutral bg-[#FAFAFA] rounded-2xl md:rounded-none md:rounded-e-2xl p-4 flex flex-col justify-between">
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="card-title text-lg">{title}</span>
                  </div>
                </div>
                <p className="text-start text-sm">{description}</p>
              </div>
              <div className="text-end">
                <Link to={link}>
                  <button className="btn btn-sm btn-neutral rounded-full">
                    Lihat
                  </button>
                </Link>
              </div>
            </div>
            {/* Kanan*/}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgramCard;
