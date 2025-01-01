const getDateAndTimeForCountry = (timeZone) => {
    const options = {
        timeZone: timeZone,
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    };

    const formatter = new Intl.DateTimeFormat('en-US', options);
    return formatter.format(new Date());
};

console.log("New York:", getDateAndTimeForCountry('America/New_York'));
console.log("London:", getDateAndTimeForCountry('Europe/London'));
console.log("Tokyo:", getDateAndTimeForCountry('Asia/Tokyo'));
console.log("Sydney:", getDateAndTimeForCountry('Australia/Sydney'));
console.log("Delhi:", getDateAndTimeForCountry('Asia/Kolkata'));
