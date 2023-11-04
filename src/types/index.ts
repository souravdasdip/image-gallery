export interface ImgType {
  selected: boolean;
  img: string;
  id: number;
}

export interface ImageWithInputType extends ImgType {
  handleChange: (id: number) => void;
}

export interface IHeaderType {
  selected_images: number;
  handleDelete: () => void;
}
