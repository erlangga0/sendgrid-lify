// Change the url to the domain of your app
exports.url = 'https://sendgridlify.herokuapp.com';
exports.senderEmail = "erlangga.maulana@gmail.com";
exports.senderName = "Erlangga Maulana";

// set 'exports.listId = null' to add contact to all contacts, but no specific list
// or a string with the listId to add to a specific list
exports.listId = 'af18d18d-a8e1-4b02-8d60-31d84f4e9fe9';

// set 'exports.templateId = null' to opt out of using a template
// or a string with the templateId to use a template
exports.templateId = null;

// receive an email when a new signup is confirmed
exports.sendNotification = true;
exports.notificationEmail = 'admin@example.com';
