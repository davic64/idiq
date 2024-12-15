import { memo, useState } from "react";
import { Select } from "../../components/ui/Select";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

const BiblePage = () => {
  const [bible, setBible] = useState(null);

  return (
    <div className="flex flex-col items-center space-y-10">
      {bible && (
        <div className="w-full absolute flex justify-between top-1/2 p-8">
          <button className="bg-gray-50 border p-2 rounded-full flex items-center justify-center">
            <ChevronLeftIcon />
          </button>
          <button className="bg-gray-50 border p-2 rounded-full flex items-center justify-center">
            <ChevronRightIcon />
          </button>
        </div>
      )}
      <div className="bg-white w-full fixed top-[53px] flex justify-center p-4">
        <div className="w-1/2 flex justify-center gap-2">
          <Select placeholder="Libro" />
          <Select placeholder="Capítulo" />
        </div>
      </div>
      <div className="pt-20">
        {bible ? (
          <div className="space-y-8 flex flex-col items-center pt-[53px]">
            <h3 className="text-center font-bold text-lg uppercase">
              Romanos 12
            </h3>
            <div className="w-1/2 space-y-2">
              {bible.verses.map((verse) => (
                <div
                  className="ml-2 font-light p-2 hover:bg-blue-300/20 rounded-lg cursor-pointer"
                  key={verse.verse}
                >
                  <span className="text-xs text-blue-500 mr-1">
                    {verse.verse}
                  </span>
                  <span className="text-justify">{verse.text.trim()}</span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center">
            <p className="text-gray-400 text-lg">
              Aún no has seleccionado algún texto :(
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export const Bible = memo(BiblePage);
