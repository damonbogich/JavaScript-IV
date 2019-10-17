// CODE here for your Lambda Classes



class Person{
    constructor(attributes){
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}

class Instructor extends Person{
    constructor(attributes){
        super(attributes);
        this.specialty = attributes.specialty;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }
    demo(subject){
        console.log(`Today we are learning about ${subject}.`)
    }
    grade(student , subject){
        console.log(`${student.name} receives a perfect score on ${student.favSubjects}.`);

    }
}


class Student extends Person{
    constructor(attributes){
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
    }
    listsSubjects(){
        console.log(`${this.favSubjects}`);
    }
    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}.`);
    }
    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }

}




class ProjectManager extends Instructor{
    constructor(attributes){
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }
    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }
    debugsCode(student , subject){
        console.log(`${this.name} debugs ${student.name}'s on ${student.favSubjects}`);
    }
}


const instructor1 = new Instructor({
    name: 'Michael',
    age: 23,
    location: 'California',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `My foot's asleep`
  
  });
  
  const instructor2 = new Instructor({
      name: 'Enyisha',
      age: 22,
      location: 'Brooklyn',
      favLanguage: 'HTML',
      specialty: 'Front-end',
      catchPhrase: `What doesn't kill you makes you stronger`
    
    });


const student1 = new Student({
    name: 'Damon',
    age: 25,
    location: 'Novi',
    previousBackground: 'Client Management',
    className: 'Web25',
    favSubjects: 'JavaScript'
});

const student2 = new Student({
    name: 'Marianna',
    age: 40,
    location: 'Queens',
    previousBackground: 'Client Management',
    className: 'Web25',
    favSubjects: 'HTML'
});

const projectManager1 = new ProjectManager({
  name: 'Michelle',
  age: 28,
  location: 'California',
  favLanguage: 'JavaScript',
  specialty: 'back-end',
  catchPhrase: `Sit Down Mister!`,
  gradClassName: 'Web 4',
  favInstructor: 'Brit'
});

const projectManager2 = new ProjectManager({
    name: 'Lisa',
    age: 29,
    location: 'Bronx',
    favLanguage: 'CSS',
    specialty: 'front-end',
    catchPhrase: `I am exhausted!`,
    gradClassName: 'Web 19',
    favInstructor: 'Justin'
  });
  



console.log(instructor1.speak());
console.log(instructor2.demo('callbacks'));
console.log(instructor2.grade(student1, 'JavaScript'));
console.log(student1.speak());
console.log(student1.listsSubjects());
console.log(student2.PRAssignment('math'));
console.log(student2.sprintChallenge('science'));
console.log(projectManager1.demo('java'));
console.log(projectManager1.grade(student2, this.favSubjects));
console.log(projectManager2.standUp('Web25'));
console.log(projectManager2.debugsCode(student2 , this.favSubjects));