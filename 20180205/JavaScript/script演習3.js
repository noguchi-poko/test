function hannkei(a){
    return"半径"+a+"cmの円は"+a*a*3.14+"です。";
}

document.write(hannkei(5)+"<br>");
document.write(hannkei(7)+"<br>");
document.write(hannkei(10)+"<br>");

document.write("<br><br>");

function ryoukinn(b,c){
    return "の合計金額は"+(b*500+c*200)+"円です。";
}
document.write("Aグループ"+ryoukinn(2,4)+"<br>");
document.write("Bグループ"+ryoukinn(1,5)+"<br>");
document.write("Aグループ"+ryoukinn(3,7)+"<br>");