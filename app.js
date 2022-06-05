class Account {
	constructor(name){
		this.name = name;
		this.balance = 0;
	}
	status(){
		console.log(`Owner: ${this.name} Balance: ${this.balance}`)
	};
	credit(credit){
		this.balance += credit;
	};
}

const brad = new Account("Brad")
const sean = new Account("Sean")
const georges = new Account("Georges")

let accounts = [brad, sean, georges]

for(let i = 0; i < accounts.length; i++){
	accounts[i].balance += 1000;
	accounts[i].status();
}
