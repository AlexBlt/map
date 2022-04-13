import { Adventurer } from './Adventurer';

export class Cell {
    private x: number = 0;
    private y: number = 0;

    private mountain: boolean;
    private treasures: number = 0;
    private adventurer: Adventurer | null = null;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.mountain = false;

    }


    getX(): number {
        return this.x;
    }

    getY(): number {
        return this.y;
    }

    setX(x: number): void {
        this.x = x;
    }

    setY(y: number): void {
        this.y = y;

    }

    isMountain(): boolean {
        return this.mountain;
    }

    setMountain(): void {
        this.mountain = true;
    }
    
    getAdventurer(): Adventurer | null{
        return this.adventurer;
    }

    setAdventurer(adventurer: Adventurer): void {
        this.adventurer = adventurer;
    }

    getTreasures(): number {
        return this.treasures;
    }

    setTreasures(treasures: number): void {
        this.treasures += treasures;
    }


}
