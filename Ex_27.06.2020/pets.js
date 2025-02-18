function solveClasses() {
    class Pet {
        constructor(owner, name) {
            this.owner = owner;
            this.name = name;
            this.comments = [];
        }
        addComment(comment) {
            if (this.comments.includes(comment)) {
                throw new Error(`This comment is already added!`);
            } else {
                this.comments.push(comment);
                return `Comment is added.`;
            }
        }
        feed() {
            return `${this.name} is fed`;
        }
        toString() {
            const result = [
                `Here is ${this.owner}'s pet ${this.name}.`
            ];
            if (this.comments.length > 0) {
                result.push(`Special requirements: ${this.comments.join(', ')}`);
            }
            return result.join('\n');
        }
    }
    class Cat extends Pet {
        constructor(owner, name, insideHabits, scratching) {
            super(owner, name);
            this.insideHabits = insideHabits;
            this.scratching = scratching;
        }
        feed() {
            const result = super.feed() + ", happy and purring."
            return result;
        }
        toString() {
            const result = [
                super.toString(),
                "Main information:",
                this.scratching
                    ? `${this.name} is a cat with ${this.insideHabits}, but beware of scratches.`
                    : `${this.name} is a cat with ${this.insideHabits}.`
            ];
            return result.join('\n');
        }
    }
    class Dog extends Pet {
        constructor(owner, name, runningNeeds, trainability) {
            super(owner, name);
            this.runningNeeds = runningNeeds;
            this.trainability = trainability;
        }
        feed() {
            const result = super.feed() + ", happy and wagging tail.";
            return result;
        }
        toString() {
            const result = [
                super.toString(),
                "Main information:",
                `${this.name} is a dog with need of ${this.runningNeeds}km running every day and ${this.trainability} trainability.`
            ].join('\n');
            return result;
        }
    }
    return {
        Pet,
        Cat,
        Dog
    }
}
const classes = solveClasses()
let pet = new classes.Pet('Ann', 'Merry');
console.log(pet.addComment('likes bananas'));
console.log(pet.addComment('likes sweets'));
console.log(pet.feed());
console.log(pet.toString());