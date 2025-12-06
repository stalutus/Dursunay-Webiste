import { writable } from 'svelte/store';

export const path = writable(window.location.pathname);

export function navigate(href) {
    if (href.startsWith('http')) {
        window.location.href = href;
        return;
    }
    history.pushState({}, '', href);
    path.set(href);
    window.scrollTo(0, 0);
}

// Handle/intercept clicks on links (optional, or use explicit action)
window.addEventListener('popstate', () => {
    path.set(window.location.pathname);
});
