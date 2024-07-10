import React from "react";

interface CharacterCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}

const CharacterCard: React.FC<CharacterCardProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
}) => {
  return (
    <>
      <div
        className="card w-72 min-h-80 bg-[#FAFAFA] shadow-xl hover:bg-primary hover:text-white"
        style={{
          backgroundImage: "url(/image/profil-sekolah/background.svg)",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="card-body items-center text-center">
          <span className="card-title text-2xl underline text-secondary-content">
            {title}
          </span>
          <img
            height={100}
            width={100}
            style={{ width: "100%", height: "auto" }}
            src={imageSrc}
            alt={imageAlt}
            className="object-contain mx-auto"
          />
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default CharacterCard;
