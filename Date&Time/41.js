// Question no : 41

function takeDifference(start, end) {
    let startDate = new Date(start);
    let endDate = new Date(end);

    let diff = (endDate - startDate) / 1000;

    let years = Math.floor(diff / (60 * 60 * 24 * 365));
    diff = diff % (60 * 60 * 24 * 365);

    let months = Math.floor(diff / (60 * 60 * 24 * 30));
    diff = diff % (60 * 60 * 24 * 30);

    let days = Math.floor(diff / (60 * 60 * 24));
    diff = diff % (60 * 60 * 24);

    let hours = Math.floor(diff / (60 * 60));
    diff = diff % (60 * 60);

    let minutes = Math.floor(diff / (60));
    let seconds = Math.floor(diff % (60));

    return `${years} years ${months} months ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`
}