import { memo, useState } from "react";
import NewSlide from "./NewSlide";
import GSlides from "./GSlides";

const SlidesPage = () => {
  const [newSlide, setNewSlide] = useState(false);

  return newSlide ? (
    <NewSlide setNewSlide={setNewSlide} />
  ) : (
    <GSlides setNewSlide={setNewSlide} />
  );
};

export const Slides = memo(SlidesPage);
