import photograph from "./professional photo Loreen.png";

const MyPhoto = () =>{
return (
<img src={photograph} className="profPhoto" alt="professional"/>
)
}


const MySkills = () =>{
const skillsArray = ["HTML, CSS , Bootstrap CSS","JavaScript and NodeJS","Database (PostgreSQL)","Version Control using Git And GitHub","Critical and analytical And Research and development skills.","Independent thinking and problem-solving"
,"Communication and presentation skills","Teamwork, Adaptability/ Flexibility"];

    return skillsArray.map(value => {
    return <ul className="list">{value}</ul> 
  });  
  }


//  const DisplayMyWork = () =>{
// return(
//    <p>"Github Repository:
//    https://github.com/Loreen-netizen/registration_numbers_webapp
//    I built the registration numbers web application as part of my work in my Codex
//    curriculum. This application made use of my front end and back end development skills as
//    it allows a user to enter their vehicle registration number onto a screen. The registration
//    number is validated using regular expressions before it is passed into a database using
//    SQL queries where it is stored and subsequently transformed and rendered as a list item
//    to a screen. The registration numbers web application checks if the new registration
//    number is already in the database and therefore does not allow entry of duplicates. It also
//    allows a user to filter through registration numbers to see only those from a specific
//    town.</p>
// )
// }

  


const App = () =>{
  return  (<div className = "bodyCss"> 
   
  <h2 className = "pinkText" > Hello,  I'm Yeukai Loreen Muusha </h2>
  <h3 className= "pinkText">I'm an Agile Web Developer</h3>
  <MyPhoto/>


<p className="paragraph"> My career goal is to gain a role which allows me to further my knowledge and skills,
 broadening my horizon.<br/>I enjoy the challenge of problem solving, debugging and creating something from nothing. </p>


<h4 className="pinkText">I have the following skills</h4>
<MySkills/>
 
<br/>
 
  <a href="https://github.com/Loreen-netizen?tab=repositories"><button className = "button" >view my work </button></a>
  
    
    
    
    </div>)
}

export default App;
