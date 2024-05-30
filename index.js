document.addEventListener("DOMContentLoaded", function() {
    // Select all sections that will be animated
    const sections = document.querySelectorAll('.hero-section, .about-section, .skills-section, .work-section, .testimonials-section, .contact-section');

    // Intersection Observer options
    const options = {
        threshold: 0.5
    };

    // Intersection Observer callback
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, options);

    // Observe each section
    sections.forEach(section => {
        observer.observe(section);
    });
});