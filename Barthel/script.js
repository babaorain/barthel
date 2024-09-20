function calculateBarthel() {
    const feeding = parseInt(document.getElementById("feeding").value);
    const bathing = parseInt(document.getElementById("bathing").value);
    const grooming = parseInt(document.getElementById("grooming").value);
    const dressing = parseInt(document.getElementById("dressing").value);
    const bowels = parseInt(document.getElementById("bowels").value);
    const bladder = parseInt(document.getElementById("bladder").value);
    const toilet_use = parseInt(document.getElementById("toilet_use").value);
    const transfers = parseInt(document.getElementById("transfers").value);
    const mobility = parseInt(document.getElementById("mobility").value);
    const stairs = parseInt(document.getElementById("stairs").value);

    const totalScore = feeding + bathing + grooming + dressing + bowels + bladder + toilet_use + transfers + mobility + stairs;

    let classification = '';
    if (totalScore >= 0 && totalScore <= 20) {
        classification = 'Total Dependence';
    } else if (totalScore >= 21 && totalScore <= 60) {
        classification = 'Severe Dependence';
    } else if (totalScore >=