import onlyUnique from "./onlyUnique";
type PickerItem = {label:string, value:string};

export default (array:string[][], index:number) => {
    return array.map(row => row[index])
        .filter(onlyUnique)
        .reduce((array, elem) => {
            const object = {} as PickerItem;
            object['label'] = elem;
            object['value'] = elem;
            array.push(object);
            return array;
        }, [] as PickerItem[])
}