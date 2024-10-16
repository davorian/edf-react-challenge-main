import {sortOn} from './sortOn'
import {RawCountryType} from "../types.ts"

type CountryType = Omit<RawCountryType, 'coatOfArms' |'currencies' |'demonyms' |'gini' |'languages' |'name' |'translations'> & {
    coatOfArms: {"png":string, "svg":string} | object
    demonyms: {[key:string] : { [key:string]:string }}
    name: {
        common: string,
        official: string,
        nativeName: { [key:string]: { official: string, common: string } }
    };
    gini: { [key:string] : string } | object
    currencies: {[key:string]:{name:string, symbol:string}}
    languages:{ [key:string] : string }
    translations: { [key:string] : { official:string, common:string } }


};

const USA: CountryType = {
    name: {
        common: "United States",
        official: "United States of America",
        nativeName: { eng: { official: "United States of America", common: "United States" } }
    },
    tld: ['.us'],
    cca2: "US",
    ccn3: "840",
    cca3: "USA",
    cioc: "USA",
    independent: true,
    status: "officially-assigned",
    unMember: true,
    currencies: { USD: { name: "United States dollar", symbol: "$" } },
    idd: { root: "+1", suffixes: [""] },
    capital: ["Washington D.C."],
    altSpellings: ["US", "USA"],
    region: "Americas",
    subregion: "Northern America",
    languages: { eng: "English" },
    translations: {},
    latlng: [38, -97],
    landlocked: false,
    borders: ["CAN", "MEX"],
    area: 9372610,
    demonyms: { eng: { f: "American", m: "American" } },
    flag: "🇺🇸",
    maps: { googleMaps: "", openStreetMaps: "" },
    population: 331000000,
    gini: {},
    fifa: "USA",
    car: { signs: ["USA"], side: "right" },
    timezones: ["UTC-05:00"],
    continents: ["North America"],
    flags: { png: "", svg: "", alt: "" },
    coatOfArms: {},
    startOfWeek: "monday",
    capitalInfo: { latlng: [38, -97] }
}

const Canada: CountryType = {
    name: {
        common: "Canada",
        official: "Canada",
        nativeName: { eng: { official: "Canada", common: "Canada" } }
    },
    tld: ['.ca'],
    cca2: "CA",
    ccn3: "124",
    cca3: "CAN",
    cioc: "CAN",
    independent: true,
    status: "officially-assigned",
    unMember: true,
    currencies: { CAD: { name: "Canadian dollar", symbol: "$" } },
    idd: { root: "+1", suffixes: [""] },
    capital: ["Ottawa"],
    altSpellings: ["CA"],
    region: "Americas",
    subregion: "Northern America",
    languages: { eng: "English", fra: "French" },
    translations: {},
    latlng: [60, -95],
    landlocked: false,
    borders: ["USA"],
    area: 9984670,
    demonyms: { eng: { f: "Canadian", m: "Canadian" } },
    flag: "🇨🇦",
    maps: { googleMaps: "", openStreetMaps: "" },
    population: 37742154,
    gini: {},
    fifa: "CAN",
    car: { signs: ["CAN"], side: "right" },
    timezones: ["UTC-04:00"],
    continents: ["North America"],
    flags: { png: "", svg: "", alt: "" },
    coatOfArms: {},
    startOfWeek: "monday",
    capitalInfo: { latlng: [60, -95] }
}

const Australia: CountryType = {
    name: {
        common: "Australia",
        official: "Commonwealth of Australia",
        nativeName: {}
    },
    tld: ['.au'],
    cca2: "AU",
    ccn3: "036",
    cca3: "AUS",
    cioc: "AUS",
    independent: true,
    status: "officially-assigned",
    unMember: true,
    currencies: { AUD: { name: "Australian dollar", symbol: "$" } },
    idd: { root: "+61", suffixes: [""] },
    capital: ["Canberra"],
    altSpellings: ["AU"],
    region: "Oceania",
    subregion: "Australia and New Zealand",
    languages: { eng: "English" },
    translations: {},
    latlng: [-27, 133],
    landlocked: false,
    borders: [],
    area: 7692024,
    demonyms: { eng: { f: "Australian", m: "Australian" } },
    flag: "🇦🇺",
    maps: { googleMaps: "", openStreetMaps: "" },
    population: 25687041,
    gini: {},
    fifa: "AUS",
    car: { signs: ["AUS"], side: "left" },
    timezones: ["UTC+10:00"],
    continents: ["Oceania"],
    flags: { png: "", svg: "", alt: "" },
    coatOfArms: {},
    startOfWeek: "monday",
    capitalInfo: { latlng: [-27, 133] }
}

// Parameterized test to check sorting by various paths
describe('sortOn', () => {
    const cs:[[CountryType,CountryType,CountryType], string, [CountryType,CountryType,CountryType]][] = [
        [[USA, Canada, Australia], 'name.common', [Australia, Canada, USA]],
        [[USA, Canada, Australia], 'area', [Australia, USA, Canada]],
        [[USA, Canada, Australia], 'population', [Australia, Canada, USA]]
    ]
    const countries = cs.map(item => Object.assign(item, { toString: function():string { return item[1] } }))
    it.each(countries)('sorts, smallest first, countries based on the countries:%p and path:%p', (input: CountryType[], path:string, expected:CountryType[]) => {
        const result = sortOn(input, path)
        if (result) {
            expect(result[0].name.common).toEqual(expected[0].name.common)
            expect(result[1].name.common).toEqual(expected[1].name.common)
            expect(result[2].name.common).toEqual(expected[2].name.common)
        }
    })

    it.each(countries)('sorts, largest first, countries based on the countries:%p and path:%p', (input: CountryType[], path:string, expected:CountryType[]) => {
        const result = sortOn(input, path, "DESC")
        if (result) {
            expect(result[0].name.common).toEqual(expected[2].name.common)
            expect(result[1].name.common).toEqual(expected[1].name.common)
            expect(result[2].name.common).toEqual(expected[0].name.common)
        }
    })
})