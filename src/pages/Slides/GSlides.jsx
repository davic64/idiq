import { memo } from "react";
import { Input } from "../../components/ui/Input";
import { PlusIcon, SearchIcon } from "lucide-react";
import { Tooltip } from "../../components/ui/Tooltip";

const GSlides = ({ setNewSlide }) => {
  return (
    <div className="w-full">
      <div className="relative">
        <Input className="ps-12 w-full" placeholder="Buscar alabanza..." />
        <SearchIcon className="text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
      </div>
      <div className="h-full grid grid-cols-3 xl:grid-cols-4 gap-4 mt-10">
        <div className="bg-gray-200 w-full h-52 rounded-lg"></div>
      </div>
      <div className="absolute bottom-4 right-6">
        <Tooltip tooltipText="Agregar nueva alabanza" placement="left">
          <button
            className="bg-blue-500 text-white p-3 rounded-full"
            onClick={() => setNewSlide(true)}
          >
            <PlusIcon />
          </button>
        </Tooltip>
      </div>
    </div>
  );
};

export default memo(GSlides);
