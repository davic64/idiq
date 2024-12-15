import { memo, useState } from "react";
import { Input } from "../../components/ui/Input";
import { ArrowLeftIcon, CircleHelpIcon } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { Tooltip } from "../../components/ui/Tooltip";
import { Modal } from "../../components/ui/Modal";
import { Instructions } from "../../components/sections/newSlide/Instructions";

const NewSlide = ({ setNewSlide }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={closeModal} title="Instrucciones">
        <Instructions />
      </Modal>
      <div className="w-full space-y-4 h-2/3">
        <div className="text-gray-500 grid grid-cols-3 py-4">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setNewSlide(false)}
          >
            <ArrowLeftIcon />
            <p>Regresar</p>
          </div>
          <h3 className="font-bold text-xl text-center">Nueva Alabanza</h3>
          <div className="text-right">
            <Tooltip tooltipText="Instrucciones" placement="left">
              <button className="relative" onClick={openModal}>
                <CircleHelpIcon />
                <span className="absolute inset-0 rounded-full animate-ping bg-blue-300/75" />
              </button>
            </Tooltip>
          </div>
        </div>
        <Input
          className="w-full"
          placeholder="Escribe aquí el título de la alabanza..."
        />
        <textarea
          className="border py-3 px-4 rounded-lg w-full resize-none outline-blue-500 h-full"
          placeholder="Escribe aquí la alabanza"
        />
        <Button className="w-full">Crear Slides</Button>
      </div>
    </>
  );
};

export default memo(NewSlide);
