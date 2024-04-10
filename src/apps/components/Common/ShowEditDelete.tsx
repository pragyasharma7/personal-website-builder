import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";

export default function ShowEditDelete({ handleSave, removeAboutSection }) {
  return (
    <div className="flex justify-end mb-4 mr-4">
      <button
        className="bg-transparent w-8 h-8 pl-[9px] rounded mr-2 text-black text-sm hover:bg-bgIconHover"
        onClick={removeAboutSection}
      >
        <TrashIcon />
      </button>
      <button
        className="bg-transparent w-8 h-8 pl-[9px] rounded mr-2 text-black text-sm hover:bg-bgIconHover"
        onClick={handleSave}
      >
        <Pencil1Icon />
      </button>
    </div>
  );
}
