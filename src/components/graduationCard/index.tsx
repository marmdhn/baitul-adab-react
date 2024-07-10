import React from "react";

interface GraduationCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
}

const GraduationCard: React.FC<GraduationCardProps> = ({
  imageSrc,
  imageAlt,
  title,
}) => {
  return (
    <>
      <div
        className="card w-72 min-h-80 bg-[#FAFAFA] shadow-xl text-secondary-content hover:bg-primary hover:text-white"
        style={{
          backgroundImage: "url(/image/profil-sekolah/background.svg)",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="card-body items-center text-center">
          <img
            height={100}
            width={100}
            style={{ width: "100%", height: "auto" }}
            src={imageSrc}
            alt={imageAlt}
            className="object-contain mx-auto"
          />
          <span className="card-title text-2xl underline">{title}</span>
        </div>
      </div>
    </>
  );
};

export default GraduationCard;
