// ODA Details
module.exports.ODA_WEBHOOK_URL = process.env.BOT_WEBHOOK_URL || 'https://8716c685.ngrok.io/connectors/v1/tenants/chatbot-tenant/listeners/webhook/channels/147593ef-c5dc-4bc0-bf6d-b02f523e129a';
module.exports.ODA_WEBHOOK_SECRET = process.env.BOT_WEBHOOK_SECRET || 'JiCa90dANP7cHAqSeZsghhGuVmp4FB6u';

// Smooch Details
exports.SMOOCH_APP_ID = process.env.SMOOCH_APP_ID || '5cb03a22ac003b0010331337';
exports.SMOOCH_KEY_ID = process.env.SMOOCH_KEY_ID || 'app_5cb03d1080314900108d8ee6';
exports.SMOOCH_SECRET = process.env.SMOOCH_SECRET || 'jftbq3zRfRjR7fsEdpmIMZxOWUC0pbAJp2uGwNE4ZUL5OdkzlPX20aGKVm0LBtnVzxP277mfHZcGRDKAprprcg';
exports.SMOOCH_WEBHOOK_SECRET = process.env.SMOOCH_WEBHOOK_SECRET || 'SMOOCH_WEBHOOK_SECRET';

// General Details
exports.PROXY = process.env.PROXY || process.env.http_proxy;
exports.PORT = process.env.PORT || 8004;

// WhatsApp Sender event IDs
exports.EVENT_QUEUE_MESSAGE_TO_SMOOCH = "100";
exports.EVENT_QUEUE_MESSAGE_TO_BOT = "200";
exports.EVENT_SMOOCH_MESSAGE_DELIVERED = "1000";
exports.EVENT_PROCESS_NEXT_SMOOCH_MESSAGE = "2000";