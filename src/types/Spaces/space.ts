export interface WorkSpace{
    _id?:string;
    providerId:string;
    spaceName:string;
    spaceType:string;
    state:string;
    district:string;
    country:string;
    areaName:string;
    buildingName:string;
    description:string;
    floor:string;
    images:string[];
    chargePerHour:number;
    availableSpaces:number;
    isAccepted?:boolean;
    contactNumber:string;
    facilities:string[];
    rentalAgreement:string;
    latitude:number,
    longitude:number,
}