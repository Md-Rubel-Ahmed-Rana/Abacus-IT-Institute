const eventContainer = document.getElementById("event-container");

events.forEach((event) => {
  const eventCard = document.createElement("div");
  eventCard.classList.add("event-card");

  // event name
  const eventName = document.createElement("h4");
  const nameSpan = document.createElement("span");
  nameSpan.innerHTML = event.name;
  const nameBold = document.createElement("b");
  nameBold.innerHTML = "Name: ";
  eventName.appendChild(nameBold);
  eventName.appendChild(nameSpan);

  //   event type
  const eventType = document.createElement("p");
  eventType.innerHTML = event.eventType;
  const typeBold = document.createElement("b");
  typeBold.innerHTML = "Event type: ";
  eventType.appendChild(typeBold);

  //   event description
  const eventDesc = document.createElement("p");
  eventDesc.innerHTML = event.description;
  const descBold = document.createElement("b");
  descBold.innerHTML = "Description: ";
  eventDesc.appendChild(descBold);

  // append inner children to card
  eventCard.appendChild(eventName);
  eventCard.appendChild(eventType);
  eventCard.appendChild(eventDesc);

  // append/add the card to the container
  eventContainer.appendChild(eventCard);
});
