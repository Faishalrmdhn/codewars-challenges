// Mencari 5 kata terbanyak pada sesuai input
function solution(seed, str) {
  let lowerCaseWord = seed.toLowerCase()
  let words = lowerCaseWord.split(' ')
  let filterWord = words.filter(word => word.includes(str))
  const wordCount = {};
  
  filterWord.forEach(word => {
    if (wordCount[word]) {
      wordCount[word]++;
    } else {
      wordCount[word] = 1;
    }
  });

  const sortedWords = Object.entries(wordCount).sort((a, b) => b[1] - a[1]);
  const top5Words = sortedWords.slice(0, 5);

const combinedArray = []
for (var i = 0; i < top5Words.length; i++) {
  for (var j = 0; j < top5Words[i].length; j++) {
  }
  combinedArray.push(top5Words[i][0])

}
  return combinedArray.join('_')

}
let input = "Pelaksanaan vaksinasi COVID-19 bertujuan untuk memutus rantai penularan penyakit dan menghentikan wabah COVID-19. Vaksin COVID-19 bermanfaat untuk memberi perlindungan tubuh agar tidak jatuh sakit akibat COVID-19 dengan cara menimbulkan atau menstimulasi kekebalan spesifik dalam tubuh dengan pemberian vaksin. Pelayanan vaksinasi COVID-19 dilakukan oleh dokter, perawat atau bidan yang memiliki kompetensi dan dilaksanakan di Fasilitas Pelayanan Kesehatan milik Pemerintah Pusat, Pemerintah Daerah Provinsi, Pemerintah Daerah Kabupaten/Kota atau milik masyarakat/swasta yang memenuhi persyaratan yang sudah ditentukan oleh Kementerian Kesehatan Indonesia."
console.log(solution(input, "vak"))