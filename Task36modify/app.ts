function make_shirt(size: string = "large", message: string = "I LOVE TYPESCRIPT"){
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
}

make_shirt();
make_shirt("medium");
make_shirt("small" , "Dive into coding");