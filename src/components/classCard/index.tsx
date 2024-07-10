import React from "react";

interface ClassCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  subTitle: string;
  description: string;
  unggulan: boolean;
}

const ClassCard: React.FC<ClassCardProps> = ({
  imageSrc,
  imageAlt,
  title,
  subTitle,
  description,
  unggulan,
}) => {
  return (
    <div
      className={`card bg-base-100 shadow-xl w-auto lg:w-96 rounded-xl ${
        unggulan && "border-4 border-secondary-content"
      } relative`}
    >
      {unggulan && (
        <div className="px-4 py-2 bg-secondary-content rounded-md absolute -translate-y-1/2 translate-x-1/2 right-1/2 w-3/4 flex justify-center">
          <span className="text-xl lg:text-2xl">Fitur Unggulan</span>
        </div>
      )}
      <img
        height={100}
        width={100}
        style={{ width: "auto", height: "auto" }}
        src={imageSrc}
        alt={imageAlt}
        className="object-contain mx-auto rounded-t-xl"
      />
      <div className="card-body items-start rounded-t-xl">
        <div className="flex gap-2">
          <span className="font-semibold text-2xl text-neutral">{title}</span>
          <span className="font-semibold text-2xl text-gray-400">
            ({subTitle})
          </span>
        </div>
        <p className="text-lg font-normal text-neutral">{description}</p>
      </div>
    </div>
  );
};

export default ClassCard;
