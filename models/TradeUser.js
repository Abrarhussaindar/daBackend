const mongoose = require('mongoose');

// Define schema for the questions
const tradeUserSchema = new mongoose.Schema({
    OrganizationName: {
        type: String,
        default: "",
    },
    KeyPersonnel: {
        type: String,
        default: "",
    },
    Founder: {
        type: String,
        default: ""
    },
    LegalStructure: {
        type: String,
        default: ""
    },
    Email: {
        type: String,
        default: ""
    },
    PhoneNumber: {
        type: String,
        default: ""
    },
    IndustrySector: {
        type: String,
        default: ""
    },
    MembershipAffiliations: {
        type: String,
        default: ""
    },
    questions: [
        {
            questionName: {
                type: String,
                default: ""
            },
            options: {
                type: [String]
            }
        }
    ]
});

const TradeUser = mongoose.model('TradeUser', tradeUserSchema);

module.exports = TradeUser;
