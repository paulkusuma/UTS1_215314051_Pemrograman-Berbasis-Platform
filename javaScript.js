function tampilMasukanJumlahPilihan() {
  var nama = document.getElementById('dataInputNama').value;
  //Eror traping Input nama
  if (nama.trim() === '') {
    alert('Masukkan nama Anda!');
    return;
  }

  var jumlah = parseInt(document.getElementById('dataInputJumlah').value);
  var tag = '';

  // Eror Traping Input jumlah
  if (isNaN(jumlah) || jumlah < 1) {
    alert('Masukkan jumlah pilihan dengan angka positif dan tidak boleh 0!');
    return;
  }

  for (var i = 1; i <= jumlah; i++) {
    tag += 'Pilihan ' + i + ' : <input type="text" id="inputPilihan' + i + '"> <br>';
  }
  document.getElementById('isi').innerHTML = tag;
  document.getElementById('tombolOKPilihan').style.display = 'block';
}

document.getElementById('tombolOKPilihan').addEventListener('click', function () {
  var jumlah = parseInt(document.getElementById('dataInputJumlah').value);
  for (var i = 1; i <= jumlah; i++) {
    var inputPilihan = document.getElementById('inputPilihan' + i);
    var radioPilihan = document.createElement('input');
    radioPilihan.type = 'radio';
    radioPilihan.id = 'radioPilihan' + i;
    radioPilihan.name = 'pilihan';
    radioPilihan.value = inputPilihan.value;

    var label = document.createElement('label');
    label.for = 'radioPilihan' + i;
    label.textContent = 'Pilihan ' + i + ' : ' + inputPilihan.value;
    document.querySelector('form').appendChild(radioPilihan);
    document.querySelector('form').appendChild(label);
    document.querySelector('form').appendChild(document.createElement('br'));
  }
  document.getElementById('tampilkanData').style.display = 'block';
});

function tampilkanDataTerpilih() {
  var radioButtons = document.getElementsByName('pilihan');
  var dataTerpilih = '';
  for (var i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      dataTerpilih = radioButtons[i].value;
      break;
    }
  }
  var nama = document.getElementById('dataInputNama').value;
  var jumlah = document.getElementById('dataInputJumlah').value;
  var pilihan = '';

  // Eror Traping
  if (dataTerpilih === '') {
    alert('Pilih salah satu dari pilihan yang tersedia!');
    return;
  }

  for (var i = 1; i <= jumlah; i++) {
    var inputPilihan = document.getElementById('inputPilihan' + i);
    pilihan += 'Pilihan ' + i + ' : ' + inputPilihan.value + ', ';
  }

  var output = 'Hallo, Nama saya ' + nama + ', saya mempunyai sejumlah ' + jumlah + ' pilihan, yaitu : ' + pilihan + 'dan saya memilih ' + dataTerpilih;

  document.getElementById('hasilTampil').innerHTML = output;
}
