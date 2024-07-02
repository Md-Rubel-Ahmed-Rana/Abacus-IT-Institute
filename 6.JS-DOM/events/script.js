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
  const typeBold = document.createElement("b");
  typeBold.innerHTML = "Event type: ";
  const typeSpan = document.createElement("span");
  typeSpan.innerHTML = event.eventType;
  eventType.appendChild(typeBold);
  eventType.appendChild(typeSpan);

  //   event description
  const eventDesc = document.createElement("p");
  const descBold = document.createElement("b");
  descBold.innerHTML = "Description: ";
  const descSpan = document.createElement("span");
  descSpan.innerHTML = event.description;
  eventDesc.appendChild(descBold);
  eventDesc.appendChild(descSpan);

  // append inner children to card
  eventCard.appendChild(eventName);
  eventCard.appendChild(eventType);
  eventCard.appendChild(eventDesc);

  // append/add the card to the container
  eventContainer.appendChild(eventCard);
});
