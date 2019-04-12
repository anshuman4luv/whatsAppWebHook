// ODA Details
module.exports.ODA_WEBHOOK_URL = process.env.BOT_WEBHOOK_URL || 'https://botv2frk1I0208H4446A1bots-mpaasocimt.botmxp.ocp.oraclecloud.com:443/connectors/v1/tenants/idcs-6d466372210e4300bb31f4db15e8e96c/listeners/webhook/channels/e215d955-6faa-43bf-b2ab-016db870dd1b';
module.exports.ODA_WEBHOOK_SECRET = process.env.BOT_WEBHOOK_SECRET || 'mRLawCclQIckkIabNNrx0rbyfU1etfYx';

// Smooch Details
exports.SMOOCH_APP_ID = process.env.SMOOCH_APP_ID || '5cb03a22ac003b0010331337';
exports.SMOOCH_KEY_ID = process.env.SMOOCH_KEY_ID || 'app_5cb03d1080314900108d8ee6';
exports.SMOOCH_SECRET = process.env.SMOOCH_SECRET || 'jftbq3zRfRjR7fsEdpmIMZxOWUC0pbAJp2uGwNE4ZUL5OdkzlPX20aGKVm0LBtnVzxP277mfHZcGRDKAprprcg';
exports.SMOOCH_WEBHOOK_SECRET = process.env.SMOOCH_WEBHOOK_SECRET || 'fxkq52PMf9sFKZ5T6Id3kxopfltALbnA_oTCoWy5QcEIwvgK-rIYO2yyoqOT142yB1X3yzlxc0n38WeBPEdkOg';

// General Details
exports.PROXY = process.env.PROXY || process.env.http_proxy;
exports.PORT = process.env.PORT || 8004;

// WhatsApp Sender event IDs
exports.EVENT_QUEUE_MESSAGE_TO_SMOOCH = "100";
exports.EVENT_QUEUE_MESSAGE_TO_BOT = "200";
exports.EVENT_SMOOCH_MESSAGE_DELIVERED = "1000";
exports.EVENT_PROCESS_NEXT_SMOOCH_MESSAGE = "2000";
