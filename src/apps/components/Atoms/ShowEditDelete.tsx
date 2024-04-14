import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import { ShowEditDeleteProps } from "../../Interface/Section";

export default function ShowEditDelete({
  handleSave,
  removeSection,
}: ShowEditDeleteProps) {
  return (
    <div className="flex justify-end mb-4 mr-4 h-[32px]">
      <button
        className="bg-transparent w-8 h-8 pl-[9px] rounded text-[#5C5C5C] text-sm hover:bg-bgIconHover"
        onClick={removeSection}
      >
        <TrashIcon className="w-5 h-5" />
      </button>
      <button
        className="bg-transparent w-8 h-8 pl-[9px] rounded mr-2 text-[#5C5C5C] text-sm hover:bg-bgIconHover"
        onClick={handleSave}
      >
        <Pencil1Icon className="w-5 h-5" />
      </button>
    </div>
  );
}
