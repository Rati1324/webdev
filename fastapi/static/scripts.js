async function getWaybillTypes() {
    const xml = '<?xml version="1.0" encoding="UTF-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">  <soap:Body><get_waybill_types xmlns="http://tempuri.org/"><su>mega:405453959</su><sp>12345654321</sp></get_waybill_types></soap:Body></soap:Envelope>';

    const response = await fetch("/fetch_data", {
        method: "POST",
        headers: {
            "Content-Type": "text/xml",
        },
        body: xml,
    });
    const data = await response.json();
    let preparedData = data["soap:Envelope"]["soap:Body"]["get_waybill_typesResponse"]["get_waybill_typesResult"]["WAYBILL_TYPES"]["WAYBILL_TYPE"];
    return preparedData;
}