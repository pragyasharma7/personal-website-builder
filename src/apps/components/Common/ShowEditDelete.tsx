import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ShowEditDelete(){

const saveChangesSlice = useSelector((store) => store.saveChanges );
  const dispatch = useDispatch();
  const [save, setSave] = useState(true)
  function handleSave(){
    setSave(!save);
    // dispatch(changesSaved(false))
    console.log(save)
  }

  function removeAboutSection(){
     console.log('here')
  }

    return (
        <div className="flex justify-end mb-4 mr-4">
      <button className="bg-transparent text-black mr-2" onClick={handleSave}><Pencil1Icon/></button>
      <button className="bg-transparent text-black text-sm" onClick={removeAboutSection}><TrashIcon/> </button>
    </div>
    )
}