import { IHeaderType } from "../types";

const Header = ({ img_gallery, handleDelete }: IHeaderType) => {
  let img_length = img_gallery.filter((img) => img.select_for_delete).length;

  return (
    <>
      {img_length > 0 ? (
        <div className="flex justify-between">
          <h2 className="text-xl font-bold">{img_length} Files Selected</h2>

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
