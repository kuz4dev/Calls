export function getTime() {
    return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

export function getDate() {
    return new Date().toLocaleDateString();
};

