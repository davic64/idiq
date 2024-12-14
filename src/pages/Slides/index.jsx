import { useState } from "react";
import NewSlide from "./NewSlide";
import GSlides from "./GSlides";

export const Slides = () => {
  const [newSlide, setNewSlide] = useState(false);

  return newSlide ? <NewSlide /> : <GSlides setNewSlide={setNewSlide} />;
};
