
const MyInfo = (props) =>{
return <h4>I'm {props.info}</h4>
}

const skillsArray = ["HTML, CSS , Bootstrap CSS","JavaScript and NodeJS","Database (PostgreSQL)","Version Control using Git And GitHub","Critical and analytical And Research and development skills.","Independent thinking and problem-solving"
,"Communication and presentation skills","Teamwork, Adaptability/ Flexibility"]

const MySkills = (skillsArray) =>{
  skillsArray.map((value)=>{
    return <ul className="list">{value}</ul>

  })
 }

const HelloComponant = () =>{
  return  (<div className = "bodyCss"> 
   
  <h3 className="whiteText"> Hello, <MyInfo className = "pinkText" info="Yeukai Loreen Muusha"></MyInfo> </h3>
  <h3 className= "pinkText"><MyInfo info = "an Agile Web Developer"/></h3>


<p className="paragraph"> <MyInfo info = "looking to achieve my career goal, which is to gain a role which allows me to further my 
knowledge and skills, broadening my horizon.I enjoy the challenge of problem solving, debugging and
creating something from nothing."/> </p>


<h4 className="pinkText">I have the following skills</h4>
<MySkills/>
 
<br/>
  <button className = "button">view my work</button>
    
    
    
    </div>)
}

export default HelloComponant;
