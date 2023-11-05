import { ImageWithInputType } from "../types";

const ImageWithInput = ({
  img,
  select_for_delete,
  index,
  handleChange,
}: ImageWithInputType) => {
  return (
    <div
      key={img}
      className={`group relative bg-white rounded-lg min-h-[160px] cursor-pointer first:col-span-2 first:row-span-2 max-sm:first:col-span-1 max-sm:first:row-span-1`}
    >
      <input
        onChange={() => handleChange(index)}
        defaultChecked={select_for_delete}
        id="checked-checkbox"
        type="checkbox"
        value=""
        className="w-5 h-5 z-[999] cursor-pointer absolute top-2 left-2 text-blue-600 bg-gray-100 border-gray-300 rounded-lg focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <img
        src={img}
        className={`${
          select_for_delete && "opacity-30"
        } w-full h-full object-contain rounded-md group-hover:brightness-50 transition-all ease-in-out`}
      />
    </div>
  );
};

export default ImageWithInput;
