import { TextAlignCenterIcon } from "@radix-ui/react-icons";
import { SaveChangesProps } from "../../Interface/Section";

export default function SaveChanges({
  handleSave,
  handleCancel,
  handleIsToolbarVisible,
}: SaveChangesProps) {
  {
    return (
      <div className="flex justify-between pl-3 h-[32px] max-h-[32px] ">
        <button
          className="text-sm text-[#A2A2A2] bg-[#E4E4E4] hover:bg-bgIconHover mr-2 w-[30px] h-[30px] rounded 
                      transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          aria-labelledby="isToolbarVisible"
          onClick={handleIsToolbarVisible}
        >
          <TextAlignCenterIcon className="w-7 h-6 rounded" />
        </button>
        <div className="flex justify-end mb-4 mr-4">
          <button
            className="bg-transparent text-sm text-black mr-2 font-semibold mt-[5px]
                transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            aria-labelledby="cancel"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            className="bg-bgBtn text-center rounded-3xl h-[30px] text-white text-sm w-[87px] font-semibold
            transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 ml-1 hover:bg-indigo-500 duration-300"
            aria-labelledby="save"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    );
  }
}
