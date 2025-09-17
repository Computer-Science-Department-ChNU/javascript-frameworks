interface LibraryItem {
    name: string
    author: string
    borrowed: boolean

    borrow(): void;
}

class Book implements LibraryItem {
    constructor(public name: string,
                public author: string,
                public borrowed: boolean = false,
                public pages: number) {
    }

    public borrow() {
        this.borrowed = !this.borrowed
    }
}

class Magazine implements LibraryItem {
    constructor(public name: string,
                public author: string,
                public borrowed: boolean = false,
                public releaseYear: number) {
    }

    public borrow() {
        this.borrowed = !this.borrowed
    }
}

class DVD implements LibraryItem {
    constructor(public name: string,
                public author: string,
                public borrowed: boolean = false,
                public duration: number) {
    }

    public borrow() {
        this.borrowed = !this.borrowed
    }
}

class Library{
    constructor(private libraryItems: LibraryItem[] = []) {
    }

    public addItem(item: LibraryItem): void{
        this.libraryItems.push(item)
    }

    public findItemByName(name: string): LibraryItem | undefined{
        for(let i of this.libraryItems){
            if(i.name === name)
                return i
        }
        return undefined
    }

    public showAvailableItems(): void{
        for(let i of this.libraryItems){
            if(!i.borrowed)
                console.log(`Name: ${i.name}\nAuthor: ${i.author}\n-----------\n`)
        }
    }
}

const lib = new Library();

const book1 = new Book("The Hobbit", "J.R.R. Tolkien", false, 310);
const book2 = new Book("1984", "George Orwell", false, 328);

const mag1 = new Magazine("National Geographic", "Editorial Team", false, 2023);
const mag2 = new Magazine("Science Today", "Editorial Team", false, 2022);

const dvd1 = new DVD("Inception", "Christopher Nolan", false, 148);
const dvd2 = new DVD("The Matrix", "Wachowski Sisters", false, 136);

lib.addItem(book1);
lib.addItem(book2);
lib.addItem(mag1);
lib.addItem(mag2);
lib.addItem(dvd1);
lib.addItem(dvd2);

console.log("📚 Available items in library:");
lib.showAvailableItems();

console.log("\nBorrowing '1984' and 'Inception'...");
book2.borrow();
dvd1.borrow();

console.log("\n📚 Available items after borrowing:");
lib.showAvailableItems();

const search = lib.findItemByName("The Hobbit");
if (search) {
    console.log(`\n🔍 Found item: ${search.name} by ${search.author}, borrowed: ${search.borrowed}`);
}