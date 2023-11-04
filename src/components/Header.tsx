import { IHeaderType } from "../types";

const Header = ({ selected_images, handleDelete }: IHeaderType) => {
  return (
    <>
      {selected_images > 0 ? (
        <div className="flex justify-between">
          <h2 className="text-xl font-bold">
            {selected_images} Files Selected
          </h2>

          <span
            onClick={handleDelete}
            className="font-semibold text-red-700 cursor-pointer hover:underline"
          >
            Delete files
          </span>
        </div>
      ) : (
        <h1 className="text-xl font-bold">Gallery</h1>
      )}
    </>
  );
};

export default Header;
