import React from "react";
import Button from "../../../shared/Buttons/Button";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../../../utils/formatDate";

const FeaturedCard = ({ test }) => {
  const navigate = useNavigate();
  return (
    <div class="p-4 md:w-1/3">
      <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <img
          class="lg:h-48 md:h-36 w-full object-cover object-center"
          src={test?.imageURL}
        />
        <div class="p-6">
          <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
            {formatDate(test?.date)}
          </h2>
          <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
            {test?.name}
          </h1>
          <p class="leading-relaxed mb-3">{test?.details.slice(0, 40)}...</p>
          <div class="flex items-center flex-wrap ">
            <Button
              variant={"accent"}
              label={"Details"}
              onClick={() => navigate(`/test/${test?._id}`)}
            />
            <span class="text-gray-400  inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm py-1">
              Slots left: {test?.slots}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
