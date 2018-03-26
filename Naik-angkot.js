function naikAngkot(arrPenumpang) {
    var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var arr = []

    for (i = 0; i < arrPenumpang.length; i++) {

        var angkot = {}
        angkot.penumpang = arrPenumpang[i][0],
        angkot.naikDari = arrPenumpang[i][1],
        angkot.tujuan = arrPenumpang[i][2],
        angkot.bayar = 0;
        sampai=false
        var counter = 0
        var bill = 2000
        //console.log(arrPenumpang[i])

         for (r=0;r<rute.length;r++) {

             if(angkot.naikDari===rute[r]){

                sampai=true
             }
             if(sampai&&angkot.tujuan!==rute[r]){
                counter++
             }

             else if(sampai&&angkot.tujuan===rute[r]){
                sampai=true
                angkot.bayar=bill*counter

             }

        }
        arr.push(angkot)
        console.log("ini adalah counter= "+ counter)

    }


   return arr

    //your code here
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

//console.log(naikAngkot([])); //[]

