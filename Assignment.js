//KilometerToMeter Function Start
function kilometerToMeter(kilometer){

    //Negative value check
    if(kilometer<0){
        console.log('Kilometer cannot be negative.');
        return 0;
    }
    return kilometer*1000;
}
//KilometerToMeter Function End

//BudgetCalculator Function Start
function budgetCalculator(numberOfWatches, numberOfPhones, numberOfLaptops){

    //Negative value check
    if(numberOfWatches<0 || numberOfPhones<0 || numberOfLaptops<0){
        console.log('Quantity cannot be negative');
        return 0;
    }

    //Initialize budget variale to store total budget
    var budget=numberOfWatches*50;
    budget += numberOfPhones*100;
    budget += numberOfLaptops*500;

    return budget;
    
}
//BudgetCalculator Function End

//Hotel Cost Function Start
function hotelCost(bookingDays){

    var totalCost=0;

    if(bookingDays>=20){
        bookingDays -= 20;
        totalCost = 10*100 + 10*80 + bookingDays * 50;
        return totalCost;
    }
    else if(bookingDays>=10){
        bookingDays -=10;
        totalCost = 10*100 + bookingDays * 80;
        return totalCost;
    }
    else if(bookingDays>=0){
        totalCost = bookingDays *100;
        return totalCost;
    }
    else{
        //this block execute while the bookingDays value is negative
        console.log("Booking days cannot be negative.");
        return totalCost;
    }
}
//Hotel Cost Function End

//megaFriend Function Start
function megaFriend(frindList){

    //Array length check
    if(frindList.length<=0){
        console.log('Friend not found');
        return 0;
    }

    //this variable store index of long word
    var indexOfLongWord = -1;

    //this variable store the length of the word to compare
    var lengthOfWord = 0;

    for(var i=0; i<frindList.length; i++){
        if(frindList[i].length>lengthOfWord){
            indexOfLongWord = i;
            lengthOfWord = frindList[i].length;
        }
    }

    return frindList[indexOfLongWord];
}

//megaFriend Function End