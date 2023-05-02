export class DataService{

    static CATS_URL = 'https://catfact.ninja/facts';

    static getCatsPage(){
        return fetch(this.CATS_URL).then(resp => resp.json());
    };

}