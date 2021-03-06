export const GETMFHoldings = (request: any, response: any) => {
    
    response.status(200).jsonp({
        "COLLABORATION-NEEDED": "Please contibute the random data generation logic and query string validation logic https://github.com/nordible/zerodha-sandbox/pulls",
        "status": "success",
        "data": [{
          "folio": "123123/123",
          "fund": "Kotak Select Focus Fund - Direct Plan",
          "tradingsymbol": "INF174K01LS2",
          "average_price": 30.729,
          "last_price": 33.014,
          "pnl": 594.769,
          "last_price_date": "2016-11-11",
          "quantity": 260.337
        }]
      });
}
