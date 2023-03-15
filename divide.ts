type Apartment = {
  metersToStation: number;
  ageOfBuilding: number;
  options: string[];
};

const apartment: Apartment = {
  metersToStation: 400,
  ageOfBuilding: 5,
  options: ["ShoeLocker", "Autolock"],
};

const { options } = apartment;

console.log(options);
