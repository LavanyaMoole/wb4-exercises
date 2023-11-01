let vehicles = [
    {
        color: "Silver", type: "Minivan",
        registrationState: "CA", licenseNo: "ABC-101",
        registrationExpires: new Date("3-10-2022"), capacity: 7
    },
    {
        color: "Red",
        type: "Pickup Truck",

        registrationState: "TX", licenseNo: "A1D-2NC",
        registrationExpires: new Date("8-31-2023"), capacity: 3
    },
    {
        color: "White",
        type: "Pickup Truck", registrationState: "TX", licenseNo: "A22-X00",
        registrationExpires: new Date("9-31-2023"), capacity: 6
    },
    {
        color: "Red",
        type: "Car", registrationState: "CA", licenseNo: "ABC-222",
        registrationExpires: new Date("12-10-2022"), capacity: 5
    },
    {
        color: "Black", type: "SUV",
        registrationState: "CA", licenseNo: "EEE-222",
        registrationExpires: new Date("12-10-2021"), capacity: 7
    },

    {
        color: "Red",
        type: "SUV", registrationState: "TX", licenseNo: "ZZ2-101",
        registrationExpires: new Date("12-30-2022"), capacity: 5
    },
    {
        color: "White",
        type: "Pickup Truck", registrationState: "TX", licenseNo: "CAC-7YT",
        registrationExpires: new Date("1-31-2023"), capacity: 5
    },
    {
        color: "White",
        type: "Pickup Truck", registrationState: "CA",

        licenseNo: "123-ABC",
        registrationExpires: new Date("3-31-2023"), capacity: 5
    }
];


function getVehiclesInRedColor(Vehicles) {
    let redColoredVehicles = [];
    for (let i = 0; i < Vehicles.length; i++) {
        if (Vehicles[i].color == "Red") {
            redColoredVehicles.push(Vehicles[i]);
        }

    }
    return redColoredVehicles;
}
function expiredRegistration(Vehicles) {

    for (let i = 0; i < Vehicles.length; i++) {
        if (Vehicles[i].registrationExpires < new Date()) {
            return vehicles[i];
        }

    }
}
function findVehiclesWithMinCapacity(Vehicles, minCapacity) {
    let matchingVehicles = [];

    for (let i = 0; i < Vehicles.length; i++) {
        if (Vehicles[i].capacity >= minCapacity) {
            matchingVehicles.push(Vehicles[i]);
        }
    }

    return matchingVehicles;
}
function findVehiclesWithLicenseEnding(Vehicles, ending) {
    let matchingVehicles = [];

    for (let i = 0; i < Vehicles.length; i++) {
        if (Vehicles[i].licenseNo.endsWith(ending)) {
            matchingVehicles.push(Vehicles[i]);
        }
    }

    return matchingVehicles;
}



let vehiclesWithRedColor = getVehiclesInRedColor(vehicles);
console.log(`Vehicles in red color`)
console.table(vehiclesWithRedColor)

let expiredRegistrationVehicles = expiredRegistration(vehicles);
console.log(`Registration expired vehicles`);
console.table(vehicles)

let vehiclesWithMinCapacity = findVehiclesWithMinCapacity(vehicles, 6);

console.log("Vehicles with a capacity of at least 6 people:");
console.table(vehiclesWithMinCapacity);

let ending = "222";
let vehiclesWithEndingLicense = findVehiclesWithLicenseEnding(vehicles, ending);

console.log("Vehicles with license plates ending with '222':");
console.table(vehiclesWithEndingLicense);