/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
var full_day_cost = 35;
var half_day_cost = 20;
var daily_rate = full_day_cost;
// var calculated_cost = 0;
var day_counter = 0;
var calculated_cost = document.getElementById("calculated-cost");

var half_button = document.getElementById("half");
half_button.addEventListener("click", change_to_half);
var full_button = document.getElementById("full");
full_button.addEventListener("click", change_to_full);


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
const monday = document.getElementById("monday");
monday.addEventListener("click", clicked_monday);

const tuesday = document.getElementById("tuesday");
tuesday.addEventListener("click", clicked_tuesday);

const wednesday = document.getElementById("wednesday");
wednesday.addEventListener("click", clicked_wednesday);

const thursday = document.getElementById("thursday");
thursday.addEventListener("click", clicked_thursday);

const friday = document.getElementById("friday");
friday.addEventListener("click", clicked_friday);

function clicked_monday()
{
    
    if(monday.classList.contains("clicked") == false)
    {
        monday.onclick =  monday.classList.add("clicked");
        day_counter += 1;
    }
    calculate();
}
function clicked_tuesday()
{
    if(tuesday.classList.contains("clicked") == false)
    {
        tuesday.onclick = tuesday.classList.add("clicked");
        day_counter += 1;
    }
    calculate();
}

function clicked_wednesday()
{
    if(wednesday.classList.contains("clicked")== false)
    {
        wednesday.onclick = wednesday.classList.add("clicked");
        day_counter += 1;
    }
    calculate();
}

function clicked_thursday()
{
    if(thursday.classList.contains("clicked")== false)
    {
        thursday.onclick = thursday.classList.add("clicked");
        day_counter += 1;
    }
    calculate();
}

function clicked_friday()
{   
    if(friday.classList.contains("clicked")== false)
    {
        friday.onclick = friday.classList.add("clicked");
        day_counter += 1;
    }
    calculate();
}

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
var clear_button = document.getElementById("clear-button");
clear_button.addEventListener("click", clear_days);
function clear_days()
{
    monday.classList.remove("clicked");
    tuesday.classList.remove("clicked");
    wednesday.classList.remove("clicked");
    thursday.classList.remove("clicked");
    friday.classList.remove("clicked");
    calculated_cost.innerHTML = 0;
    day_counter = 0;
}


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

function change_to_half()
{
    half_button.classList.add("clicked");
    full_button.classList.remove("clicked");
    daily_rate = half_day_cost;
    calculate();
}

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function change_to_full()
{
    full_button.classList.add("clicked");
    half_button.classList.remove("clicked");
    daily_rate = full_day_cost;
    calculate();
}



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function calculate()
{
    calculated_cost.innerHTML = daily_rate * day_counter;
    
}

