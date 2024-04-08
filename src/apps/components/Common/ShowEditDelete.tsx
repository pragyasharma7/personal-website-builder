import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import { useDispatch, useSelector } from "react-redux";
import { changesSaved } from "../../State/SaveChangesSlice";
import { addAboutSection } from "../../State/SectionSlice";

export default function ShowEditDelete() {
  // const saveChangesSlice = useSelector((store) => store.saveChanges);
  const aboutSlice = useSelector((store) => store.sections.about);
  console.log(aboutSlice);

  const dispatch = useDispatch();

  function handleSave() {
    dispatch(changesSaved(true));
  }

  function removeAboutSection() {
    dispatch(addAboutSection({}));
  }

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
