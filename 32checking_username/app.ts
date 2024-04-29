//Exercise 45 Q 32
//Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
//creating an Array
//Array of current users
let current_user = ["usman", "ali",  "Areeba", "Zain", "Osama"]
//Array of new users
let new_users = ["Hamza", "Ayesha", "Ali", "Fahad", "Areeba"]

//Loop through new_users to check for user names availaibility
new_users.forEach(new_one_users =>{
    //Making a condition for user name already exist and save in our_condition variable
    let our_condition = current_user.some(current_one_user => current_one_user.toLowerCase() === new_one_users.toLowerCase())
    //Print different message using if-else statement
    if(our_condition){
        console.log(`sorry ${new_one_users} is already taken!`)
    }
    else{
        console.log(`This username ${new_one_users} is available`)
    }


    }
)