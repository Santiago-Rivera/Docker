const connecToDatabese = ()=> {
    const dummyPromise = new Promise((resolve, reject) => {
        // Simulate a successful database connection
        setTimeout(() => {
            resolve('Connected to the database');
        }, 1000);
    });

    return dummyPromise;
}

// Export the function
export default connecToDatabese;