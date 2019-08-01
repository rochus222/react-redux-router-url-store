export function getItemPath(items) {
    const params = new URLSearchParams();
    items.forEach(item => params.append("item", item));
    return params.toString();
}