export const FORM_TYPE = {
    BOOKING: "BOOKING",
    CONTACT: "CONTACT",
};
export const FILTER_ABOUTME = {
    filter: {
        limit: 10,
        offset: 0,
        order: ["createdAt DESC"],
        where: {
            type: "REVIEW_ABOUT_ME"
        }
    }
}
export const FILTER_FOUNDERS = {
    filter: {
        limit: 6,
        offset: 0,
        order: "createdAt DESC",
        where: {
            status: "SHOW",
        }
    },

};
