var jmlAngkot = 10, 
    angkotBeroperasi = 6;

for(var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
    if (noAngkot <= angkotBeroperasi && noAngkot != 5){
        console.log('Angkot No. ' + noAngkot + ' beroperasi dengan Baik.');
    } else if (noAngkot == 5 || noAngkot == 8 || noAngkot == 10){
        console.log('Angkot No. ' + noAngkot + ' sedang lembur.');
    } else {
        console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.');
    }
    
}
