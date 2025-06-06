// This file contains the JavaScript logic for the project. It handles click events on activity items, updates the map display based on the selected activity, and manages dynamic loading of map URLs from the activities data.

import activities from './data/activities.js';

document.addEventListener('DOMContentLoaded', () => {
    const activityList = document.getElementById('activity-list');
    const mapDisplay = document.getElementById('map-display');

    activities.forEach(activity => {
        const listItem = document.createElement('li');
        listItem.textContent = activity.name;
        listItem.addEventListener('click', () => {
            mapDisplay.src = activity.mapUrl;
            updateDescription(activity);
        });
        activityList.appendChild(listItem);
    });
});

function updateDescription(activity) {
    const descriptionElement = document.getElementById('activity-description');
    descriptionElement.innerHTML = `
        <h3>${activity.name}</h3>
        <p>${activity.description}</p>
    `;
}