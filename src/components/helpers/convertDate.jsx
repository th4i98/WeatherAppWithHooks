

export const dtToDay = (dt) => {
    const date = new Date(dt*1000);
    let day = date.getDay();
    let d4te = date.getDate();
    let month = date.getMonth();
    
    switch (day) {
        case 0:
            return "Sunday, " + d4te + "/" + month ;
        case 1:
            return "Monday, " + d4te + "/" + month;
        case 2:
            return "Tuesday, " + d4te + "/" + month;
        case 3:
            return "Wednesday, " + d4te + "/" + month;
        case 4:
            return "Thursday, " + d4te + "/" + month;
        case 5:
            return "Friday, " + d4te + "/" + month;
        case 6:
            return "Saturday, " + d4te + "/" + month;
        default: 
            return 'not found';
    }
    
}