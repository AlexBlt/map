import { Grid } from "./Grid";
import * as fs from 'fs';
import { Adventurer } from "./Adventurer";

let fileName = 'map1';
const file = (fs.readFileSync('maps/'+fileName+'.txt', 'utf8'));

let lines = file.split('\r');
let grid: any;


for (let i = 0; i < lines.length; i++) {
    let tmp = lines[i].split('-');

    for (let j = 0; j < tmp.length; j++) {
        tmp[j] = tmp[j].trim();
    }

    switch (tmp[0]) {
        case 'C':
            grid = new Grid(parseInt(tmp[1]), parseInt(tmp[2]))
            break;

        case 'M':
            grid?.getCell(parseInt(tmp[1]), parseInt(tmp[2])).setMountain();
            break;

        case 'T':
            grid?.getCell(parseInt(tmp[1]), parseInt(tmp[2])).setTreasures(2);
            break;

        case 'A':
            let adventurer = new Adventurer(tmp[1], parseInt(tmp[2]), parseInt(tmp[3]), tmp[4])
            grid?.getCell(parseInt(tmp[2]), parseInt(tmp[3])).setAdventurer(adventurer);
            (grid?.move(adventurer, tmp[5]))
            break;
    }
}

const writeToFile = (grid: any): any => {
    let mountains: string = '';
    let treasures: string = '';
    let adventurers: string = '';
    let finalString: string = '';
    for (let i = 0; i < grid?.getColumns(); i++) {
        for (let j = 0; j < grid?.getRows(); j++) {
            if (grid.getCell(i, j).isMountain()) {
                mountains += 'M - ' + i + ' - ' + j + '\n';
            }

            if (grid.getCell(i, j).getTreasures()) {
                treasures += 'T - ' + i + ' - ' + j + ' - ' + grid.getCell(i, j).getTreasures() + '\n';
            }

            if (grid.getCell(i, j).getAdventurer()) {
                let adv = grid.getCell(i, j).getAdventurer();
                adventurers += 'A - ' + adv.getName() + ' - ' + adv.getX() + ' - ' + adv.getY() + ' - ' +
                    adv.getDirection() + ' - ' + adv.getTreasures();
            }
        }
    }
    let map = 'C - ' + grid?.getColumns() + ' - ' + grid?.getRows() + '\n';
    finalString = map + mountains + treasures + adventurers;
    console.log(finalString)

    fs.writeFileSync('./maps/'+fileName+'_results.txt', finalString);


}

writeToFile(grid)








