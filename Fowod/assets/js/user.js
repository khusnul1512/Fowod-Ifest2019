var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"],
        datasets: [{
            label: 'Penggunaan Listrik',
            data: [22, 59, 73, 92, 20, 17, 10],
            backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

var ctx2 = document.getElementById("myChart-alat").getContext('2d');
var myChart_alat = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ["Livelamp", "LiveDoor", "LiveWater"],
        datasets: [{
            label: 'Penggunaan Alat',
            data: [100, 70, 87],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
})

$(document).ready(function(){
    $('#alatku-content').hide();
    $('#control-content').hide();
    $('#geografis-content').hide();
    $('#monitoring').click(function(){
        $('#monitoring').addClass('aktif-menu-user');
        $('#control-btn').removeClass('aktif-menu-user');
        $('#alatku').removeClass('aktif-menu-user');
        $('#geografis').removeClass('aktif-menu-user');
        $('#monitoring-content').show();
        $('#alatku-content').hide();
        $('#control-content').hide();
        $('#geografis-content').hide();
    });
    $('#control-btn').click(function(){
        $('#monitoring').removeClass('aktif-menu-user');
        $('#control-btn').addClass('aktif-menu-user');
        $('#alatku').removeClass('aktif-menu-user');
        $('#geografis').removeClass('aktif-menu-user');
        $('#monitoring-content').hide();
        $('#alatku-content').hide();
        $('#control-content').show();
        $('#geografis-content').hide();
    });
    $('#alatku').click(function(){
        $('#monitoring').removeClass('aktif-menu-user');
        $('#control-btn').removeClass('aktif-menu-user');
        $('#alatku').addClass('aktif-menu-user');
        $('#geografis').removeClass('aktif-menu-user');
        $('#monitoring-content').hide();
        $('#alatku-content').show();
        $('#control-content').hide();
        $('#geografis-content').hide();
    });
    $('#geografis').click(function(){
        $('#monitoring').removeClass('aktif-menu-user');
        $('#control-btn').removeClass('aktif-menu-user');
        $('#alatku').removeClass('aktif-menu-user');
        $('#geografis').addClass('aktif-menu-user');
        $('#monitoring-content').hide();
        $('#alatku-content').hide();
        $('#control-content').hide();
        $('#geografis-content').show();
    });
    $('#liveoff-lamp').hide();
    $('#liveon-door').hide();
    $('#liveon-lamp').click(function(){
        $('#liveon-lamp').hide();
        $('#liveoff-lamp').show();
        $('#livelamp-btn').addClass('off');
    });
    $('#liveoff-lamp').click(function(){
        $('#liveoff-lamp').hide();
        $('#liveon-lamp').show();
        $('#livelamp-btn').removeClass('off');
    });
    $('#liveoff-door').click(function(){
        $('#liveoff-door').hide();
        $('#liveon-door').show();
        $('#livedoor-btn').removeClass('off');
    });
    $('#liveon-door').click(function(){
        $('#liveon-door').hide();
        $('#liveoff-door').show();
        $('#livedoor-btn').addClass('off');
    });
    $('#btn-ubah').click(function(){
        $('.about-this').hide();
        $('.change-this').show();
    });
    $('#btn-simpan').click(function(){
        var username = $('#input-username').val();
        var nama = $('#input-nama').val();
        var email = $('#input-email').val();
        var phone = $('#input-phone').val();
        $('#output-nama').html(nama);
        $('#output-username').html(username);
        $('#output-username-judul').html(username);
        $('#output-email').html(email);
        $('#output-phone').html(phone);
        if( username == "" && nama == "" && email == "" && phone == "" ) {
            $('#output-nama').html("Mohammad Khusnul Khuluq");
            $('#output-username').html("Ninno");
            $('#output-username-judul').html("Ninno");
            $('#output-email').html("khusnul20032002@gmail.com");
            $('#output-phone').html("088217262025");
        } else if (username == "" || nama == "" || email == "" || phone == "") {
            alert('anda tidak boleh mengkosongi data');
            return false;
        }
        $('.about-this').show();
        $('.change-this').hide();
    });
});
