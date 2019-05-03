let year = parseInt(prompt("Enter a year"));
let namnhuan = false;
let chia4 = year%4 == 0;
if (chia4) {
    let chia100 = year % 100 == 0;
    if (chia100) {
        let chia400 = year % 400 == 0;
        if (chia400) {
            namnhuan = true;
        }
    } else {
        namnhuan = true;
    }
}
if (namnhuan) {
    alert (year +" là năm nhuận");
} else {
    alert(year + " không phải năm nhuận");
}