import { useState } from "react";
import { SelectionItem } from './selectionItem/SelectionItem'
import { MyButton } from '../button/MyButton'
import { GroupFrom } from "../forms/GroupForm/GroupFrom";

import s from './Selection.module.scss'

const GROUPS = ["Группа 1", "Группа 2", "Группа 3"]
const CATEGORIES = ["Категория 1", "Категория 2", "Категория 3"]

const Selection = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={s.selection}>
      <SelectionItem label={"Группа"} data={GROUPS}/>
      <MyButton text="+" func={toggleActive}/>
      <GroupFrom isactive={isActive} toggleactive={toggleActive}/>
      <SelectionItem label={"Категория"} data={CATEGORIES}/>
      <MyButton text="+" func={toggleActive}/>
    </div>
  )
}

export default Selection;
