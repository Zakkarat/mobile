type PickerItem = {label:string, value:string};

export interface ITextPicker {
    onTableDataFilter:(value:string) => void;
    filteredData:PickerItem[];
    chosen:string;
    defaultLabel:string;
    describeText:string;
}