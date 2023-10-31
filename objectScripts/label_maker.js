let myInfo={
    name:"Lavanya Moole",
    address:"815 E grover ave",
    city:"Phoenix",
    state:"Arizona",
    zipcode:"85012"

}
function printContact(info){
    console.log(info);
    console.log(`name: ${info.name}`);

    console.log(`address: ${info.address}`);
    console.log(`city: ${info.city}`);
    console.log(`state : ${info.state}`);
    console.log(`zipcode: ${info.zipcode}`);
   
}
printContact(myInfo);