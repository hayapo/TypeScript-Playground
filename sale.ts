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

const salesPoints: {
  name: string;
  check: (apartment: Apartment) => boolean;
}[] = [
  {
    name: "駅近",
    check: ({ metersToStation }) => metersToStation < 1000,
  },
  {
    name: "築浅",
    check: ({ ageOfBuilding }) => ageOfBuilding < 5,
  },
  {
    name: "セキュリティ充実",
    check: ({ options }) => options.includes("Autolock"),
  },
];

const getTag = (apartment: Apartment) => {
  return salesPoints
    .filter(({ check }) => {
      return check(apartment);
    })
    .map(({ name }) => name);
};

const tags = getTag(apartment);

console.log(tags);
