
        // Page transition system
        let currentPage = 1;

        function nextPage(pageNumber) {
            // Get current and next page elements
            const current = document.getElementById('page' + currentPage);
            const next = document.getElementById('page' + pageNumber);

            // Fade out current page
            current.style.animation = 'fadeOut 0.5s ease-in-out forwards';

            // After fade out, switch pages
            setTimeout(() => {
                current.classList.remove('active');
                next.classList.add('active');
                currentPage = pageNumber;

                // Special background shift on page 4
                if (pageNumber === 4) {
                    document.body.classList.add('shifted');
                }
            }, 500);
        }

        // Prevent accidental navigation away
        window.addEventListener('beforeunload', function (e) {
            if (currentPage < 5) {
                e.preventDefault();
                e.returnValue = '';
            }
        });

        // Optional: Add keyboard navigation (arrow keys or enter)
        document.addEventListener('keydown', function(e) {
            if ((e.key === 'Enter' || e.key === 'ArrowRight') && currentPage < 5) {
                nextPage(currentPage + 1);
            }
        });