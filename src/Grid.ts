import { Adventurer } from "./Adventurer";
import { Cell } from "./Cell";

export class Grid {
    private columns: number = 1;
    private rows: number = 1;

    private grid: Cell[][];

    constructor(columns: number, rows: number) {
        this.columns = columns;
        this.rows = rows;
        this.grid = [];

        this.setGrid(columns, rows);

    }

    getColumns(): number {
        return this.columns;
    }

    getRows(): number {
        return this.rows;
    }

    getGrid(): Cell[][] {
        return this.grid;
    }

    getCell(x: number, y: number) {
        //test si cell existe pas
        return this.grid[x][y];
    }

    setGrid(columns: number, rows: number): void {
        for (let i = 0; i < columns; i++) {
            this.grid[i] = [];
            for (let j = 0; j < rows; j++) {
                this.grid[i][j] = new Cell(i, j);
            }
        }
    }

    canAccessCell(cell: Cell) {
        return !(cell.isMountain() || cell.getAdventurer() !== null || cell == undefined)
    }

    move(adventurer: Adventurer, moveList: string): void {
        let moves = [...moveList];

        for(let i=0;i<moves.length;i++) {
            if(['G','D'].includes(moves[i])) {
                this.turn(moves[i], adventurer);
            } else {
                this.moveForward(adventurer);
            }
        }
    }

    turn(direction: string, adventurer: Adventurer): void {
        switch (adventurer.getDirection()) {
            case 'N':
                if (direction === 'G') {
                    adventurer.setDirection('O');
                }
                else {
                    adventurer.setDirection('E');
                }
                break;

            case 'E':
                if (direction === 'G') {
                    adventurer.setDirection('N');
                }
                else {
                    adventurer.setDirection('S');
                }
                break;

            case 'S':
                if (direction === 'G') {
                    adventurer.setDirection('E');
                }
                else {
                    adventurer.setDirection('O');
                }
                break;

            case 'O':
                if (direction === 'G') {
                    adventurer.setDirection('S');
                }
                else {
                    adventurer.setDirection('N');
                }
                break;

        }
    }

    moveForward(adventurer: Adventurer): void {
        switch (adventurer.getDirection()) {
            case 'N':
                if (this.canAccessCell(this.getCell(adventurer.getX(), adventurer.getY() - 1))) {
                    adventurer.setY(adventurer.getY() - 1);
                    let cell = this.getCell(adventurer.getX(), adventurer.getY());
                    if(cell.getTreasures()) {
                        cell.setTreasures(-1);
                        adventurer.setTreasures(1);
                    }
                }
                else {
                    console.log("Case inaccessible");
                }

                break;

            case 'E':
                if (this.canAccessCell(this.getCell(adventurer.getX() + 1, adventurer.getY()))) {
                    adventurer.setX(adventurer.getX() + 1);
                    let cell = this.getCell(adventurer.getX(), adventurer.getY());
                    if(cell.getTreasures()) {
                        cell.setTreasures(-1);
                        adventurer.setTreasures(1);
                    }
                }
                else {
                    console.log("Case inaccessible");
                }
                break;

            case 'S':
                if (this.canAccessCell(this.getCell(adventurer.getX(), adventurer.getY() + 1))) {
                    adventurer.setY(adventurer.getY() + 1);
                    let cell = this.getCell(adventurer.getX(), adventurer.getY());
                    if(cell.getTreasures()) {
                        cell.setTreasures(-1);
                        adventurer.setTreasures(1);
                    }
                }
                else {
                    console.log("Case inaccessible");
                }
                break;

            case 'O':
                if (this.canAccessCell(this.getCell(adventurer.getX() - 1, adventurer.getY()))) {
                    adventurer.setX(adventurer.getX() - 1);
                    let cell = this.getCell(adventurer.getX(), adventurer.getY());
                    if(cell.getTreasures()) {
                        cell.setTreasures(-1);
                        adventurer.setTreasures(1);
                    }
                }
                else {
                    console.log("Case inaccessible");
                }
                break;

        }
    }
}
