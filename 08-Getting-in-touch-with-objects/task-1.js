const person = {
    get salary() {
        let now = new Date();
        let nextMonth = new Date();
        nextMonth.setMonth(now.getMonth()+1);
        nextMonth.setDate(1);
        let daysLeft = (nextMonth - now);
        
        return daysLeft > 20 ? 'good salary':'bad salary';
    }
};

console.log(person.salary);