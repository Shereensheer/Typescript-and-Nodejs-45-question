let current_users: string[] = ['hani' , 'shahla' , 'zari' , 'faisal' , 'shan']
let new_users: string[] = ['sana' , 'mujtaba' , 'ibrahim' ,'shama' , 'abrish']

new_users.forEach((newUser) => {
    if (
        current_users.some(
            (currentUser) => currentUser.toLowerCase() === newUser.toLowerCase()
        )
    ){
        console.log(`${new_users} will need to enter a new username.`);
    }
    
    else{

        console.log(`${new_users} is available`)
    }
 
});












