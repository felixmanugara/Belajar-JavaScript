/* Switch Statement
   Switch statement merupakan statement percabangan yang sama
   seperti dengan if, namun lebih sederhana dalam cara pembuatannya
   kondisi pada switch statement hanya untuk perbandingan ==  */


const mark = "B";

switch(mark) {
    case "A":
        console.info("Anda Lulus dengan sangat baik");
        break;
    case "B":
        console.info("Anda Lulus dengan baik");
        break;
    case "c":
        console.info("Anda Lulus dengan cukup");
        break;
    case "D":
        console.info("Anda tidak Lulus");
        break;
    default:
        console.info("Anda mungkin salah Jurusan")
} 