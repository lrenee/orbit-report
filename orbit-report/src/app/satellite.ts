export class Satellite {
    name: string;
    orbitType: string;
    type: string;
    operational: boolean;
    launchDate: string;
       
    constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
        this.name = name;
        this.type = type;
        this.launchDate = launchDate;
        this.orbitType = orbitType;
        this.operational = operational;
    }

    shouldShowWarning() : boolean {
        return this.type.toLowerCase() === "space debris";
    };


    // shouldShowWarning(index: number) : string {
    //     if (this.type.toLowerCase() === "space debris") {
    //         return "w";
    //     } else if (index % 2 === 0) {
    //         return "e";
    //     } else {
    //         return "o";
    //     }               
    // };
}
