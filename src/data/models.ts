export class CountryModel{
    name: string;
    region: string;
    area: number;
    flag: string;

    constructor(name: string = '', region: string = '', area: number = 0, flag:string =''){
        this.name = name;
        this.region = region;
        this.area = area;
        this.flag = flag;
    }

    fromJson(country: {name: string, region:string, area: number, independent: boolean, flag: string}){
        return new CountryModel(country['name'], country['region'], country['area'], country['flag']);
    }
}
