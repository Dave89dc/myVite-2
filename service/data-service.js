export class CatService{

    static getFacts(){
        return fetch('https://catfact.ninja/facts')
        .then(resp => resp.json())
        .then(object => this.elaborateData(object));
    };

    static elaborateData(object){

        const facts = object.data;
        // const firstSix = facts.filter((fact, index) => index < 6); fatto con la filter
        const first6 = this.getFirst6(facts);
        return first6;
    };

    static getFirst6(array){

        const newArray = [];
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            if(i < 6){
                newArray.push(element)
            } else {
                break;
            };
        };
        return newArray;
    };

};