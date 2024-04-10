export default function SaveChanges({ handleSave, handleCancel }) {
  {
    return (
      <div className="flex justify-end mb-4 mr-4">
        <button
          className="bg-transparent text-black mr-2 w-[87px] h-[30px] font-semibold"
          onClick={handleCancel}
        >
          Cancel
        </button>
        <button
          className="bg-bgBtn rounded-3xl h-[30px] text-white text-sm w-[87px] font-semibold"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    );
  }
}
