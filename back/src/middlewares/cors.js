import cors from 'cors';

let whiteList = ['*']

export const corsController = () => cors({
    origin: (origin,callback) => {
        if (whiteList.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
    // other options...
})