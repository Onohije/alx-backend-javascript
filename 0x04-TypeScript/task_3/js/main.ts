/// <reference path="crud.d.ts"/>
import { RowID, RowElement } from './interface';
import { insertRow, updateRow, deleteRow } from './crud';

const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

const newRowID: RowID = insertRow(row);
const updatedRow: RowElement = { ...row, age: 23 };
updateRow(newRowID, updatedRow);
deleteRow(newRowID);
