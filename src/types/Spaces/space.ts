export interface WorkSpace{
    _id?:string;
    providerId:string;
    spaceName:string;
    spaceType:string;
    state:string;
    district:string;
    city:string;
    areaName:string;
    buildingName:string;
    description:string;
    floor:string;
    images:string[] | null;
    chargePerHour:number;
    availableSpaces:number;
    isAccepted?:boolean;
    contactNumber:string;
    facilities:string[]|null;
    rentalAgreement:string;
    latitude:number,
    longitude:number,
}