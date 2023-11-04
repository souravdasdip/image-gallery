import { useState } from "react";
import { ReactSortable } from "react-sortablejs";
import Header from "./components/Header";
import ImageWithInput from "./components/ImageWithInput";
import { gallery } from "./constants";
import { ImgType } from "./types";

const App = () => {
  const [img_gallery, setImage_gallery] = useState<ImgType[]>(
    gallery.map((img, id) => ({ selected: false, img, id }))
  );

  const [selected_images, setSelected_images] = useState(0);
  // const selected_images = useRef(0);

  const handleDelete = () => {
    setImage_gallery((prev) => prev.filter((img) => !img.selected));
    setSelected_images(0);
  };

  const handleChange = (index: number) => {
    console.log(index);

    const temp = [...img_gallery];
    temp[index]["selected"] = !temp[index]["selected"];

    let temp_selected_items = 0;
    temp.map((item) => {
      if (item.selected) {
        temp_selected_items += 1;
      }
    });

    setSelected_images(temp_selected_items);
    setImage_gallery(temp);
  };

  return (
    <main className="min-h-screen w-screen bg-slate-300 ">
      <section className="p-10 max-lg:p-2 w-[70%] max-lg:w-[90%] mx-auto">
        <Header selected_images={selected_images} handleDelete={handleDelete} />
        <ReactSortable
          animation={200}
          delay={2}
          swap
          list={img_gallery}
          setList={setImage_gallery}
          className="mt-5 grid grid-rows-3 gap-2 grid-cols-5 max-md:grid-cols-2 max-sm:grid-cols-1"
        >
          {img_gallery.map((imgObj) => {
            return (
              <ImageWithInput
                key={imgObj.id}
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
