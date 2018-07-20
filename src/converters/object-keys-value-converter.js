export class ObjectKeysValueConverter {
    toView(obj) {
        let temp = [];
        let keys = Object.keys(obj);
        keys.sort();

        for (let key in keys) {
            if (obj.hasOwnProperty(keys[key])) {
                temp.push(keys[key]);
            }
        }
        
        return temp;
    }
}