import { Cell } from "./Cell";
import { Grid } from "./Grid";

export class Adventurer  {
    private name: string;
    private direction: string = "O";
    private x:number = 0;
    private y:number = 0;
    private treasures: number = 0;

    constructor(name: string, x: number, y: number, direction: string, treasures: number =0) {
        this.name = name;
        this.direction = direction;
        this.x = x;
        this.y = y;
        this.treasures = treasures;
    }

    getName(): string {
        return this.name;
    }

    setName(name: string) {
        this.name = name;
    }

    getDirection(): string {
        return this.direction;
    }

    setDirection(direction: string): void {
        this.direction = direction;
    }

    getX(): number {
        return this.x;
    }

    setX(x: number): void {
        this.x = x;
    }

    getY(): number {
        return this.y;
    }

    setY(y: number): void {
        this.y = y;
    }

    getTreasures(): number {
        return this.treasures;
    }

    setTreasures(treasures: number): void {
        this.treasures += treasures;
    }

    setCoordinates(x: number, y: number): void {
        this.x, y = x, y;
    }

}