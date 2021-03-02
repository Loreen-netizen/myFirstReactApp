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
  <button className = "button">view my work</button>
    
    
    
    </div>)
}

export default App;
