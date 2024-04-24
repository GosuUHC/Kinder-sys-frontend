import { useState } from "react";
import { SelectionItem } from './selectionItem/SelectionItem'
import { MyButton } from '../button/MyButton'
import { GroupFrom } from "../forms/GroupForm/GroupFrom";

import s from './Selection.module.scss'
import useDiagnostics from "../../../viewmodel/hooks/diagnostics/useDiagnostics";


const CATEGORIES = ["Категория 1", "Категория 2", "Категория 3"]

const Selection = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  const { diagnosticsData } = useDiagnostics();

  return (
    <div className={s.selection}>
      <SelectionItem label={"Группа"} data={diagnosticsData}/>
      <MyButton text="+" func={toggleActive}/>
      <GroupFrom isactive={isActive} toggleactive={toggleActive}/>
      <SelectionItem label={"Категория"} data={CATEGORIES}/>
      <MyButton text="+" func={toggleActive}/>
    </div>
  )
}

export default Selection;
