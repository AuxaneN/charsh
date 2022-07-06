class CustomAPIError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.message = message;
        this.statusCode = statusCode;
        this.statusCode = statusCode;
    }
}
export const createCustomError = (msg, statusCode) => {
    return new CustomAPIError(msg, statusCode);
};
export const errorHandler = (err, _req, _res, _next) => {
    console.log("Error:", err);
    console.log("Request:", _req);
    if (err instanceof CustomAPIError) {
        return _res.status(err.statusCode).json({ msg: err.message });
    }
    return _res.status(500).json({ msg: 'Something went wrong, please try again' });
};
//# sourceMappingURL=errorHandler.js.map