// ODA Details
module.exports.ODA_WEBHOOK_URL = process.env.BOT_WEBHOOK_URL || 'https://botv2frk1I0208H4446A1bots-mpaasocimt.botmxp.ocp.oraclecloud.com:443/connectors/v1/tenants/idcs-6d466372210e4300bb31f4db15e8e96c/listeners/webhook/channels/e215d955-6faa-43bf-b2ab-016db870dd1b';
module.exports.ODA_WEBHOOK_SECRET = process.env.BOT_WEBHOOK_SECRET || 'mRLawCclQIckkIabNNrx0rbyfU1etfYx';


// Smooch Details
exports.SMOOCH_APP_ID = process.env.SMOOCH_APP_ID || '5d0bad567d1721001080a32c';
exports.SMOOCH_KEY_ID = process.env.SMOOCH_KEY_ID || 'app_5d0c8f4fdda1fb001059f7e3';
exports.SMOOCH_SECRET = process.env.SMOOCH_SECRET || 'z2TNQSZWbeX2V-djytqqRhDOytWmDTGSk8k9zatgMEYvHa7mZbuVoVgmIErczrPw2_Q75mMWFNIhxxMCoYQHJw';
exports.SMOOCH_WEBHOOK_SECRET = process.env.SMOOCH_WEBHOOK_SECRET || 'RbRLd616jn38LWqFBCDisI_G4NP0m6jwpbIk6xvChmkY6ZOoW6uwfAkAvwmm60Yoyv8GatKjNxHfXhwJfYJxhg';

// General Details
exports.PROXY = process.env.PROXY || process.env.http_proxy;
exports.PORT = process.env.PORT || 8004;

// WhatsApp Sender event IDs
exports.EVENT_QUEUE_MESSAGE_TO_SMOOCH = "100";
exports.EVENT_QUEUE_MESSAGE_TO_BOT = "200";
exports.EVENT_SMOOCH_MESSAGE_DELIVERED = "1000";
exports.EVENT_PROCESS_NEXT_SMOOCH_MESSAGE = "2000";
