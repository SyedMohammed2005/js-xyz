// singleton object
// object.create()

// object literal syntax

const mySym=Symbol("key1");


const jsuser = {
    name: "syed",
    fullname: "syed mohammed",
    [mySym]: "mykey1",    
    age: 20,
    isActive: true,
    hobbies: ["eating", "sports"],
    address: {
        street: "123 Main St",
        city: "New York",
        state: "NY",
    }}
    // Removed jsuser.jsuser (invalid property)
    console.log(jsuser["name"]);
    console.log(jsuser["fullname"]);
    console.log(jsuser[mySym]);
    console.log(typeof jsuser[mySym]);

    jsuser.age = 21;
    console.log(jsuser.age);
    // Object.freeze(jsuser);
    jsuser.age = 22;

    jsuser.greeting = function () {
        console.log("hello jsuser");
    };
    jsuser.greeting2 = function () {
        console.log(`hello jsuser ${this.name}`);
    };
    jsuser.greeting();
    jsuser.greeting2();
   
