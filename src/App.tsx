import { useState } from "react";
import { ReactSortable } from "react-sortablejs";
import Header from "./components/Header";
import ImageWithInput from "./components/ImageWithInput";
import { gallery } from "./constants";
import { ImgType } from "./types";

const App = () => {
  const [img_gallery, setImage_gallery] = useState<ImgType[]>(
    gallery.map((img, id) => ({ select_for_delete: false, img, id }))
  );

  const handleDelete = () => {
    setImage_gallery((prev) => prev.filter((img) => !img.select_for_delete));
  };

  const handleChange = (index: number) => {
    const temp = [...img_gallery];
    temp[index]["select_for_delete"] = !temp[index]["select_for_delete"];
    setImage_gallery(temp);
  };

  return (
    <main className="min-h-screen w-screen bg-slate-300 ">
      <section className="p-10 max-lg:p-2 w-[70%] max-lg:w-[90%] mx-auto">
        <Header img_gallery={img_gallery} handleDelete={handleDelete} />
        <ReactSortable
          animation={200}
          delay={2}
          list={img_gallery}
          setList={setImage_gallery}
          className="mt-5 grid grid-rows-3 gap-2 grid-cols-5 max-md:grid-cols-2 max-sm:grid-cols-1"
        >
          {img_gallery.map((imgObj, index) => {
            return (
              <ImageWithInput
                index={index}
                key={imgObj.img}
                {...imgObj}
                handleChange={handleChange}
              />
            );
          })}
        </ReactSortable>
      </section>
    </main>
  );
};

export default App;
