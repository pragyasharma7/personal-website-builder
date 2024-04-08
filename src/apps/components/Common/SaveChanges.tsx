import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changesSaved } from "../../State/SaveChangesSlice";
import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";

export default function SaveChanges() {

  const saveChangesSlice = useSelector((store) => store.saveChanges );
  const dispatch = useDispatch();
  const [save, setSave] = useState(true)
  function handleSave(){
    setSave(!save);
    dispatch(changesSaved(false))
    console.log(save)
  }

  {
    return (
    save ?
       <div className="flex justify-end mb-4 mr-4">
      <button className="bg-transparent text-black mr-2 w-[87px] h-[30px] font-semibold" onClick={handleSave}>Cancel</button>
      <button className="bg-bgBtn rounded-3xl h-[30px] text-white text-sm w-[87px] font-semibold" onClick={handleSave}>Save</button>
    </div>
    : null
    
    )
  }

}
