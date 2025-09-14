class User{
    constructor(name, password, ){
        this.name=name;
        this.password=password;
    }

    get password(){
        return `${this._password}syed`
    }
    get name(){
        return this._name.toUpperCase()
    }
    set name(value){
       this._name=value
    }
    set password(value){
        this._password=value

    }
}

const syed=new User("syed","2ff");
console.log(syed.password);
console.log(syed.name);