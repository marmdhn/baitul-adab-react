import React from "react";

interface LevelCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}

const LevelCard: React.FC<LevelCardProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
}) => {
  return (
    <>
      <div className="card w-72 bg-[#FAFAFA] shadow-xl">
        <div className="card-body items-center text-center">
          <span className="card-title text-lg lg:text-xl text-neutral">
            {title}
          </span>
          <p className="text-sm text-neutral">{description}</p>
          <img
            height={100}
            width={100}
            style={{ height: "auto" }}
            src={imageSrc}
            alt={imageAlt}
            className="object-contain mx-auto w-1/3 lg:w-1/2"
          />
        </div>
      </div>
    </>
  );
};

export default LevelCard;
