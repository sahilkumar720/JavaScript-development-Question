// 44.******
// what are the different options and parameters available in toLocalString and toLocalDateString etc format date.
let date = '2024-04-28T08:23:13.234Z'

function formatDate(dateStr) {
    let date = new Date(dateStr);
    return date.toLocaleDateString('en-IN', {
        weekday: 'long',
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });
}

let formatedDate = formatDate(date);
console.log(formatedDate)