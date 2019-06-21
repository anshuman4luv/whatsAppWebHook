// ODA Details
module.exports.ODA_WEBHOOK_URL = process.env.BOT_WEBHOOK_URL || 'https://botv2frk1I0208H4446A1bots-mpaasocimt.botmxp.ocp.oraclecloud.com:443/connectors/v1/tenants/idcs-6d466372210e4300bb31f4db15e8e96c/listeners/webhook/channels/e215d955-6faa-43bf-b2ab-016db870dd1b';
module.exports.ODA_WEBHOOK_SECRET = process.env.BOT_WEBHOOK_SECRET || 'mRLawCclQIckkIabNNrx0rbyfU1etfYx';


// Smooch Details
exports.SMOOCH_APP_ID = process.env.SMOOCH_APP_ID || '5d0c850698d42a00105fd341';
exports.SMOOCH_KEY_ID = process.env.SMOOCH_KEY_ID || 'app_5d0cb6eee7753c0010ecf19f';
exports.SMOOCH_SECRET = process.env.SMOOCH_SECRET || 'f5_0XJvhaUGhfxD8ucieAOXwa71ryIbPUS2VPBOI2ptOFTyI-dz3ByeQaebB9kOkDeIf_HMnMF-3xNOdfbuj1w';
exports.SMOOCH_WEBHOOK_SECRET = process.env.SMOOCH_WEBHOOK_SECRET || 'RbRLd616jn38LWqFBCDisI_G4NP0m6jwpbIk6xvChmkY6ZOoW6uwfAkAvwmm60Yoyv8GatKjNxHfXhwJfYJxhg';

// General Details
exports.PROXY = process.env.PROXY || process.env.http_proxy;
exports.PORT = process.env.PORT || 8004;

// WhatsApp Sender event IDs
exports.EVENT_QUEUE_MESSAGE_TO_SMOOCH = "100";
exports.EVENT_QUEUE_MESSAGE_TO_BOT = "200";
exports.EVENT_SMOOCH_MESSAGE_DELIVERED = "1000";
exports.EVENT_PROCESS_NEXT_SMOOCH_MESSAGE = "2000";
