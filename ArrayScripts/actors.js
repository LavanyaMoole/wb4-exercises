let academyMembers = [
    {
    memID: 101,
    name: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
    memID: 142,
     
    name: "Sallie Smith",
    films: ["A Good Day", "A Better Day"]
    },
    {
    memID: 187,
    name: "Fred Flanders",
    films: ["Who is Fred?", "Where is Fred?", "What is Fred?", "Why Fred?"]
    },
    {
    memID: 203,
    name: "Bobbie Boots",
    films: ["Walking Boots", "Hiking Boots", "Cowboy Boots"]
    },
    ];
    
    for(let i=0;i<academyMembers.length;i++){
        if(academyMembers[i].memID==187){
            console.log(`academy member whos Id is ${academyMembers[i].memID} ${academyMembers[i].name}`)
        }
        if(academyMembers[i].films.length>=3){
            console.log(`academy member who have been in atleast 3 films ${academyMembers[i].name}`)
        }
        if(academyMembers[i].name.split(" ")[0].startsWith("Bob")){
            console.log(`academy menber whos name starts with Bob ${academyMembers[i].name}`)
        }
        
    }

    for(let i=0;i<academyMembers.length;i++){
       
        let Films=academyMembers[i].films;
        for(let j=0;j<Films.length;j++){
            
            if(Films[j].startsWith("A")){
                
                console.log(`member whos films ${Films[j]} start with A ${academyMembers[i].name}`)
            }
        }
    }