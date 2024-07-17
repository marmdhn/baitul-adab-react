import React from "react";

interface CurriculumCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}

const CurriculumCard: React.FC<CurriculumCardProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
}) => {
  return (
    <div className="card w-80 bg-transparent hover:bg-white hover:text-neutral rounded-lg hover-card">
      <figure className="px-10 pt-10">
        <img
          height={100}
          width={100}
          style={{ width: "auto", height: "auto" }}
          src={imageSrc}
          alt={imageAlt}
          className="object-contain mx-auto image-hover"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="font-semibold text-2xl">{title}</h2>
        <p className="text-lg font-normal">{description}</p>
      </div>
    </div>
  );
};

export default CurriculumCard;
