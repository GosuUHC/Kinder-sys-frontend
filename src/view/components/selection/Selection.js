import React from 'react'
import { SelectionItem } from './selectionItem/SelectionItem'

import s from './Selection.module.scss'

const GROUPS = ["Группа 1", "Группа 2", "Группа 3"]
const CATEGORIES = ["Категория 1", "Категория 2", "Категория 3"]

const Selection = () => {
  return (
    <div className={s.selection}>
      <SelectionItem label={"Группа"} data={GROUPS}/>
      <SelectionItem label={"Категория"} data={CATEGORIES}/>
    </div>
  )
}

export default Selection;
