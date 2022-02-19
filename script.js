function active() {
    var text = document.getElementById('text');
    var graph = document.getElementById('graph')
    if (text.style.visibility !== 'hidden') {
        text.style.display = 'none'; //or
        text.style.visibility = 'hidden';
        graph.style.display = 'inline'; //or
        graph.style.visibility = 'visible';
    } else {
        text.style.display = 'inline'; //or
        text.style.visibility = 'visible';
        graph.style.display = 'none'; //or
        graph.style.visibility = 'hidden';
    }
}

function clickTech() {

    var techLbl = document.getElementById('tech-lbl');
    var skillLbl = document.getElementById('skill-lbl');
    var tech = document.getElementById('tech');
    var skill = document.getElementById('skill');
        skill.style.display = 'none'; //or
        skill.style.visibility = 'hidden';

        tech.style.display = 'flex'; //or
        tech.style.visibility = 'visible';

        techLbl.style.color = '#9191ec';
        techLbl.style.fontWeight = 'bolder';

        skillLbl.style.color = 'white';
        skillLbl.style.fontWeight = 'normal';

        console.log("fils de pute");
}


function clickSkill() {

    var techLbl = document.getElementById('tech-lbl');
    var skillLbl = document.getElementById('skill-lbl');
    var tech = document.getElementById('tech');
    var skill = document.getElementById('skill');

        tech.style.display = 'none'; //or
        tech.style.visibility = 'hidden';

        skill.style.display = 'flex'; //or
        skill.style.visibility = 'visible';

        skillLbl.style.color = '#9191ec';
        skillLbl.style.fontWeight = 'bolder';

        techLbl.style.color = 'white';
        techLbl.style.fontWeight = 'normal';

}