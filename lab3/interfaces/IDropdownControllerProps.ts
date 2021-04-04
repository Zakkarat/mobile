import React from "react";
export interface IDropdownControllerProps {
    filters: {
        faculty:string;
        year:string;
    }
    setFilters:React.Dispatch<React.SetStateAction<{faculty:string, year:string}>>;
    setTable: React.Dispatch<React.SetStateAction<{header:string[], body:string[][]}>>;
    onSave: () => void;
}