class AddressBook {
    // Implement the constructor method
    constructor(name, email) {
        this.elementsName = []
        this.elementsMail = []
    }
    // Implement the store method
    store(name, email){
        this.elementsName.push(name)
        console.log(this.elementsName)
        this.elementsMail.push(email)
        console.log(this.elementsMail)
    }
    // Implement the lookup method
    lookup(name){
        for(let i = 0 ; i < this.elementsMail.length ; i++){
            if(this.elementsMail[i].substring(0, this.elementsMail[i].lastIndexOf('@')) === name){
                console.log(this.elementsMail[i])
                return this.elementsMail[i]
            }
        }
        console.log('Adress not found')
        return 'Adress not found'
    }
}

const myAddressBook = new AddressBook();

myAddressBook.store("bart", "bart@simpsons.com");
myAddressBook.store("maggie", "maggie@simpsons.com");

myAddressBook.lookup("bart");
// 'bart@simpsons.com'

myAddressBook.lookup("homer");
// 'address not found'