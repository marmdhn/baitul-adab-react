import React from "react";
import { Link } from "react-router-dom";

interface RegistrationLevelCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  subTitle?: string;
  url: string;
}

const RegistrationLevelCard: React.FC<RegistrationLevelCardProps> = ({
  imageSrc,
  imageAlt,
  title,
  url,
  subTitle,
}) => {
  return (
    <>
      <div
        className="card w-96 lg:w-auto bg-primary-content shadow-xl"
        style={{
          backgroundImage: "url(/image/profil-sekolah/background.svg)",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="card-body items-center text-center justify-between">
          <div>
            <span className="card-title text-2xl text-white">{title}</span>
            <span className="font-semibold text-white">{subTitle}</span>
          </div>
          <img
            height={100}
            width={100}
            style={{ width: "100%", height: "auto" }}
            src={imageSrc}
            alt={imageAlt}
            className="object-contain mx-auto"
          />
          <Link to={url} target="_blank">
            <button className="btn btn-primary text-white">
              Daftar Sekarang
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default RegistrationLevelCard;
