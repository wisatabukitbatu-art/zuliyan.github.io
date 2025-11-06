document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('contactForm').addEventListener('submit',function(e){
 e.preventDefault();alert('Terima kasih! Pesan Anda telah terkirim.');
 this.reset();
});