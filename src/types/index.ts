export interface ImgType {
  select_for_delete: boolean;
  img: string;
  id: number;
}

export interface ImageWithInputType extends ImgType {
  handleChange: (id: number) => void;
  index: number;
}

export interface IHeaderType {
  selected_images: number;
  handleDelete: () => void;
}
