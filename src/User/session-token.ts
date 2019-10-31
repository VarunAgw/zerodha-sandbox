import { Error400, Success200 } from "../constants";

export const POSTSessionToken = (request: any, response: any) => {

    response.status(200).jsonp({
        "status": "success",
        "data": {
            "user_id": "XX000",
            "user_name": "Kite Connect",
            "user_shortname": "Kite",
            "email": "kite@kite.trade",
            "user_type": "investor",
            "broker": "ZERODHA",
            "exchanges": [
                "MCX",
                "BSE",
                "NSE",
                "BFO",
                "NFO",
                "CDS"
            ],
            "products": [
                "BO",
                "CNC",
                "CO",
                "MIS",
                "NRML"
            ],
            "order_types": [
                "LIMIT",
                "MARKET",
                "SL",
                "SL-M"
            ],
            "api_key": "xxxxxx",
            "access_token": "yyyyyy",
            "public_token": "zzzzzz",
            "refresh_token": null,
            "login_time": "2018-01-01 16:15:14",
            "avatar_url": null
        }
    });
}

export const DELETESessionToken = (request: any, response: any) => {
    if (request.query.access_token && request.query.api_key) {
        response.status(200).jsonp({ message: Success200 });;
    } else {
        response.status(400).jsonp({ message: Error400 });
    }
}