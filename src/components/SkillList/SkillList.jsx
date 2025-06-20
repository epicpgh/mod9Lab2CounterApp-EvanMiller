
function Skill({ skill, level }) {
    return (
        <li>
            <span>{skill}</span>
            <div>Level {level}</div>
            <button>Github</button>
        </li>
    );
}

function SkillList() {
    const skills = ["html", "css", "javascript", "react", "nodejs"];
    const levelValue = 10;
    const skillsElements = skills.map((skill, index) => (
        <Skill key={index} skill={skill} level={levelValue} />
    ));

    console.log(skillsElements);
    return(
        <div>
            <h2>Skill List COmponent</h2>
            <ul>{skillsElements}</ul>
        </div>
    );
}


export default SkillList;

