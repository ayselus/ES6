let ceki = prompt('Çekini qeyd edin ')
let boy = +prompt('Boyunuzu daxil edin')
let bmi= ceki / (boy * boy)
let netice;
if ( bmi < 18){
    netice =' Siz çeki azlığından əziyyət çəkirsiz';   
} else if (bmi < 20 ){
    netice =' Siz çekiniz azdir.Lakin  saglamliq ucun ziyan deyil';   
}else if (bmi < 26 ){
    netice =' Siz çekiniz normaldir!!! Tebrikler';
}else if (bmi < 28 ){
    netice =' Siz 1 ci dereceli artiq cekiden eziyyet cekirsiniz';
}else if (bmi < 31 ){
    netice =' Siz 2 ci dereceli artiq cekiden eziyyet cekirsiniz';
}else if (bmi < 36 ){
    netice =' Siz 3 ci dereceli artiq cekiden eziyyet cekirsiniz';
}else if (bmi < 41 ){
    netice =' Siz 4 ci dereceli artiq cekiden eziyyet cekirsiniz';
}else {
    netice =' Sizin basinizda problem var ';
}


document.getElementById('bmi').innerHTML = netice;