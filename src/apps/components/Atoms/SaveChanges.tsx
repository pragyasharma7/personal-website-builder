import { TextAlignCenterIcon } from "@radix-ui/react-icons";
import { SaveChangesProps } from "../../Interface/Section";

export default function SaveChanges({
  handleSave,
  handleCancel,
  handleIsToolbarVisible,
}: SaveChangesProps) {
  {
    return (
      <div className="flex justify-between pl-3">
        <button
          className="text-sm text-[#A2A2A2] bg-[#E4E4E4] hover:bg-bgIconHover mr-2 w-[30px] h-[30px] rounded "
          onClick={handleIsToolbarVisible}
        >
          <TextAlignCenterIcon className="w-7 h-6 rounded" />
        </button>
        <div className="flex justify-end mb-4 mr-4">
          <button
            className="bg-transparent text-sm text-black mr-2 font-semibold"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            className="bg-bgBtn text-center rounded-3xl h-[30px] text-white text-sm w-[87px] font-semibold"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    );
  }
}
