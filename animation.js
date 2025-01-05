function showSection(sectionId) {
    const sections = document.querySelectorAll('.content');
    const targetSection = document.getElementById(sectionId);

    // Diğer içerikleri gizle
    sections.forEach(function (section) {
        section.classList.remove('active');
        section.style.transition = 'none'; // Animasyonu durdur
        section.style.display = 'none'; // Gizle
    });

    // Hedef bölümü göster
    targetSection.classList.add('active');
    targetSection.style.display = 'block'; // Görünür yap
}
