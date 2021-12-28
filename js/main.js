
const Status = {
    "Hero": {strength: 80, agility: 100, resilience: 80, wisdom: 80, luck: 80},
    "Warrior": {strength: 100, agility: 80, resilience: 90, wisdom: 70, luck: 70},
    "Mage": {strength: 70, agility: 80, resilience: 70, wisdom: 100, luck: 90},
}

const CharDesign = {
    "Male":{
        "Hero":"https://recursionist.io/img/dashboard/lessons/quickstart/male-hero.png",
        "Warrior":"https://recursionist.io/img/dashboard/lessons/quickstart/male-warrior.png",
        "Mage":"https://recursionist.io/img/dashboard/lessons/quickstart/male-mage.png",
    },
    "Female":{
        "Hero":"https://recursionist.io/img/dashboard/lessons/quickstart/female-hero.png",
        "Warrior":"https://recursionist.io/img/dashboard/lessons/quickstart/female-warrior.png",
        "Mage":"https://recursionist.io/img/dashboard/lessons/quickstart/female-mage.png",
    },
    
}

class Character{
    constructor(name, gender,job,traits){
        this.name = name;
        this.gender = gender;
        this.job = job;
        this.traits = traits;
        this.charDesign = CharDesign[gender][job];
        let status = JSON.parse(JSON.stringify(Status));
        this.status = status[job];
        
    }

    reviseStatus(){
        if(this.traits === "Bat Out Of Hell"){
            this.status.agility = Math.floor(this.status.agility * 1.4);
        }else if(this.traits === "Brave" && this.job === "Hero"){
            this.status.strength = Math.floor(this.status.strength * 1.1);
            this.status.agility = Math.floor(this.status.agility * 1.1);
            this.status.luck = Math.floor(this.status.luck * 1.2)
        }else if(this.traits === "Lucky Devil" && this.gender === "Male"){
            this.status.luck = Math.floor(this.status.luck * 1.5);
        }else if(this.traits === "Tomboy" && this.gender === "Female"){
            this.status.strength = Math.floor(this.status.strength * 1.1);
            this.status.agility = Math.floor(this.status.strength * 1.1)
        }
    }

}


var app = new Vue({
    el:'#app',
    data:{
        character:"",
        name:"",
        gender:"Male",
        job:"Hero",
        traits:"",
        
    },
    computed:{
        makeCharacterObject: function(){
            this.character = new Character(this.name, this.gender, this.job, this.traits)
            this.character.reviseStatus();
        },
        isHero: function(){
            return this.job === "Hero";
        },
        isMale: function(){
            return this.gender === "Male";
        },
        isFemale: function(){
            return this.gender === "Female";
        }
    },
    watch:{
        job:function(){
            this.traits = "";
        }
    }
})