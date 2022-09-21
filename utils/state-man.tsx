import React from 'react';

export function updateArrayItem<T>(items: T[], item: T, idFieldName: string = 'id'): T[] {
    const findIndex = items?.findIndex(f => +f[idFieldName] === +item[idFieldName]);
    const updated = [...(items || [])];
    if (findIndex >= 0) {
        updated.splice(findIndex, 1, item);
    }
    return updated;
}

export function upsertItem<T>(items: T[], item: T, idFieldName: string = 'id'): T[] {
    const findIndex = items?.findIndex(f => +f[idFieldName] === +item[idFieldName]);
    const updated = [...(items || [])];
    if (findIndex >= 0) {
        updated.splice(findIndex, 1, item);
    } else {
        updated.push(item);
    }
    return updated;
}
