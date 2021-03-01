
const MyInfo = (props) =>{
return <h4>I'm {props.info}</h4>
}

const MySkills = (props) =>{
  return <ul className="list">{props.skill}</ul>
}

const HelloComponant = () =>{
  return  (<div className = "bodyCss"> 
   
  <h3 className="whiteText"> Hello, <MyInfo className = "pinkText" info="Yeukai Loreen Muusha"></MyInfo> </h3>
  <h3 className= "pinkText"><MyInfo info = "an Agile Web Developer"/></h3>


<p className="paragraph"> <MyInfo info = "looking to achieve my career goal, which is to gain a role which allows me to further my 
knowledge and skills, broadening my horizon.I enjoy the challenge of problem solving, debugging and
creating something from nothing."/> </p>


<h4 className="pinkText">I have the following skills</h4>
<MySkills skill = "HTML, CSS , Bootstrap CSS"/>
<MySkills skill = "JavaScript and NodeJS"/>
<MySkills skill = "Database (PostgreSQL)"/>
<MySkills skill = "Version Control using Git And GitHub"/>
<MySkills skill = "Critical and analytical And Research and development skills."/>
<MySkills skill = "Independent thinking and problem-solving"/>
<MySkills skill = "Communication and presentation skills"/>
<MySkills skill = "Teamwork, Adaptability/ Flexibility"/>
<br/>
  <button className = "button">view my work</button>
    
    
    
    </div>)
}

export default HelloComponant;
