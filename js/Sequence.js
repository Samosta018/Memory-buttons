class Sequence {
    constructor() {
        this.sequence = [];
    }

    generateNextStep() {
        const randomButtonId = `btn${Math.floor(Math.random() * 9) + 1}`;
        this.sequence.push(randomButtonId);
        return this.sequence;
    }

    getCurrentSequence() {
        return this.sequence;
    }

    reset() {
        this.sequence = [];
    }
}