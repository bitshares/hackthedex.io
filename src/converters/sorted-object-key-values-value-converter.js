export class SortedObjectKeyValuesValueConverter {
    toView(obj) {
        let temp = [];
        
        for (let prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                temp.push(obj[prop]);
            }
        }
        
        return temp.sort();
    }
}