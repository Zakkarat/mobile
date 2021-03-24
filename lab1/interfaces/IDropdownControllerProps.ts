export interface IDropdownControllerProps {
    onTableFacultyFilter: (value:string) => void;
    onTableYearFilter: (value:string) => void;
    filters: {
        faculty:string;
        year:string;
    }
    onApply: () => void;
    onCancel: () => void;
}