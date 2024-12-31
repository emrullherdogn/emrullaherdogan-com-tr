function showSection(sectionId) {
    const sections = document.querySelectorAll('.content');
    const targetSection = document.getElementById(sectionId);

    // Diğer içerikleri gizle
    sections.forEach(function (section) {
        section.classList.remove('active'); // Aktif sınıfını kaldır
        section.style.transition = 'none'; // Animasyonu geçici olarak durdur
        setTimeout(function () {
            section.style.transition = ''; // Animasyonu tekrar etkinleştir
        }, 50); // 50ms gecikme
    });

    // Tıklanan bölümü göster
    targetSection.classList.add('active');
}
