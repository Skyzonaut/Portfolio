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