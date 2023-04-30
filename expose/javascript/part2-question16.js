let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for (const prop in statistics) {
    const prop_stat = statistics[prop];
    if (prop.startsWith('r') || prop_stat % 2 === 1) {
        console.log(prop_stat);
    }
}