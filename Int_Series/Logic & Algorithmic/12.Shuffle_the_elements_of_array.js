// Shuffle the elements of array
function shuffle(array) {
    if (array.length === 0) return [];
    const result = array.slice();

    for (let i = result.length-1; i > 0; i--){
        const j = Math.floor(Math.random() * (i+1));

        // Right side will evaluate first
        //destructuring assignment , so result[i] and result[j] will swap
        [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
}


