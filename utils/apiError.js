class apiError extends Error {
    constructor(code , msg , data){
        super(msg);
        this.code = code
        this.data = data
    }
}

export default apiError;