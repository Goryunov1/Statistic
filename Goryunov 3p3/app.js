

class Car {
    constructor(name,stats) {
        this.name = name;
        this.stats = stats;
    }
}

const cars = [new Car("Audi A5",[6.89, 5.3, 5.07, 3.51, 3.18]),
new Car("Mercedes-Benz C", [7.96, 3.48, 3.11, 2.8, 2.45])];

window.addEventListener("load", () => {
    const box = document.body.firstElementChild;
    // box.remove();
    // document.body.append(box);
    for (let i = 0; i < cars[0].stats.length; i++) {
        const item = document.createElement ("div");
        item.className = "graph__item";
        item.dataset.year = new Date().getFullYear() - i;
        for (let c = 0; c < cars.length; c++) {
            const line = document.createElement("div");
            line.className = "line";
            line.dataset.val = cars[c].stats[i];
            line.style.height = cars[c].stats[i] * 20 + "px";
            line.dataset.type = cars[c].name;
            item.append(line);
        }
        box.append(item);
    }
});

/*
Машины две
Статистика одинаковая

car1 => stats[i] => div[i] car 2 => stats [i] => div2[i].... carN



*/ 