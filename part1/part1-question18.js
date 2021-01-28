for (const prop in statistics){

	let aPro = `${prop}`;
    let aVal = `${statistics[prop]}`;
    let isOdd = aVal % 2;
    if ( aPro[0] == 'r' || aPro[0] == 'R' || isOdd == 1){
    	console.log(aVal);
    }
    
}
