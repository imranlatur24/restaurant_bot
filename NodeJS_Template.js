const {Image} = require('dialogflow-fulfillment');

// Simple text
const name = 'Anshul';
agent.add(`Hello ${name}`);

// Sending images
agent.add(new Image('https://i.imgur.com/DYLlv4G.gif'));

// Sending quick replies
agent.add(`Would you like to understand how I may be of use to you? Please say Yes or No`);
agent.add(new Suggestion(`Yes`));
agent.add(new Suggestion(`No`));

// Sending cards
const card = new Card('Here is a Card Template');
card.setImage('https://i.imgur.com/w6ubJcV.png');
card.setText('Click on the below button ');
card.setButton({text: 'Go to Google.com', url: 'https://google.com'});
agent.add(card);

// Setting contexts
agent.setContext({ name: 'context-name', lifespan: 2, parameters: { city: 'Rome' }});

// Setting follow up event
agent.setFollowupEvent('SOME_EVENT');
