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

export class CountriesModel{
    countries: CountryModel[];

    constructor(countries: {name: string, region:string, area: number, independent: boolean, flag: string}[] = []){
        this.countries = countries.map((item) => new CountryModel(item['name'], item['region'], item['area'], item['flag']));
    }

    sort(reverse: boolean = false){
        if(reverse) {
            return [...this.countries].reverse();
        }
        return this.countries;
    }

    getFilteredSorted(reverse: string, regionFilter: string, areaFilter: string, countryArea: number=0){
        let newList = [...this.countries]
        if(reverse == 'desc'){
            newList.reverse()
        }
        return newList.filter((item) =>  regionFilter == 'all' || item.region == 'Oceania'
        ).filter((item) => (areaFilter == 'all') ||  (areaFilter == 'smaller' && item.area < countryArea) || (areaFilter == 'larger' && item.area > countryArea)
        );
    }
}