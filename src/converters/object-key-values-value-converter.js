/**
 * 
 * Original Source: https://gist.github.com/Vheissu/0dff6cd73a3a179d4a18#file-objectkeysvalueconverter-js
 * Modified name because this one returns values not keys
 * 
 * Usage
 * Shows how to use the custom ValueConverter to iterate an objects properties
 * aka its keys.
 * 
 * <require from="ObjectKeyValues"></require>
 * <li repeat.for="prop of myVmObject | objectKeys">${prop}</li>
 */
export class ObjectKeyValuesValueConverter {
    toView(obj) {
        let temp = [];
        
        for (let prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                temp.push(obj[prop]);
            }
        }
        
        return temp;
    }
}