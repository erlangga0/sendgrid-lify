// Change the url to the domain of your app
exports.url = 'https://sendgridlify.herokuapp.com';
exports.senderEmail = "erlangga.maulana@gmail.com";
exports.senderName = "Erlangga Maulana";

// set 'exports.listId = null' to add contact to all contacts, but no specific list
// or a string with the listId to add to a specific list
exports.listId = "87dafab0-6906-41af-b457-5383454c9c88";

// set 'exports.templateId = null' to opt out of using a template
// or a string with the templateId to use a template
exports.templateId = 'd-adf259c241a240d59f4c604bdabb2164';

// receive an email when a new signup is confirmed
exports.sendNotification = true;
exports.notificationEmail = 'admin@example.com';
