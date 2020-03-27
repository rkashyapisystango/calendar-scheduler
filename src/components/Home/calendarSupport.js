export const popEventClick = info => {
  const { event } = info;
  alert(
    `You just executed ops1 to event: {id: ${event.id}, title: ${event.title}}`,
  );
};

export const popEvent2Click = info => {
  const { event } = info;
  alert(
    `You just executed ops2 to event: {id: ${event.id}, title: ${event.title}}`,
  );
};

export const eventClicked = (info, data) => {
  const { event } = info;
  alert(`You just clicked an event: {id: ${event.id}, title: ${event.title}} ${data}`);
};
