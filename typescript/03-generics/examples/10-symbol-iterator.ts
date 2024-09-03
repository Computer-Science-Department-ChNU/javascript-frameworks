class MyNumberCollection {

    private data: number[] = [];

    public add(item: number) {
        this.data.push(item);
    }

    [Symbol.iterator]() {
        let current: number = 0;
        let data = this.data;

        return {
            next() {
                if (current < data.length) {
                    return {
                        done: false,
                        value: data[current++]
                    };
                }
                else {
                    return {
                        done: true,
                        value: null
                    };
                }
            }
        }
    }
}

const myNumberCollection = new MyNumberCollection();
myNumberCollection.add(10);
myNumberCollection.add(20);
myNumberCollection.add(30);
myNumberCollection.add(40);

for (const item of myNumberCollection) {
    console.log(item);
}
