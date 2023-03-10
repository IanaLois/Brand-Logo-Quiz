function getElementById(id) {
    return document.getElementById(id);
}

const endScore = getElementById('endScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
endScore.innerText = mostRecentScore;
