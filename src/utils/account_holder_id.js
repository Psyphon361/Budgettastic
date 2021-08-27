const request = require("request");

const get_account_holder_id = async (account_id, callback) => {
    const url =
        "https://fusion.preprod.zeta.in/api/v1/ifi/140793/accountHolders/" + account_id;

    request(
        {
            url,
            json: true,
            headers: {
                "X-Zeta-AuthToken": process.env.FUSION_AUTH_TOKEN,
            },
        },
        (error, data) => {
            if (error) {
                callback("Unable to connect to the Fusion API!", undefined);
            } else {
                callback(undefined, data);
            }
        }
    );
};

module.exports = get_account_holder_id;
