import requests, xmltodict
from fastapi import FastAPI, Request
from fastapi.templating import Jinja2Templates
import jinja2


templates = Jinja2Templates(directory="templates")
app = FastAPI()

@app.get("/")
def read_root(request: Request):
    xml = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">  <soap:Body><get_buyer_waybills xmlns="http://tempuri.org/">      <su>mega:405453959</su>      <sp>12345654321</sp><itypes>,1,2,3,6,</itypes><seller_tin /><statuses>,1,2,</statuses><car_number /><begin_date_s>2023-04-28T00:00:00</begin_date_s><begin_date_e>2023-04-28T23:59:59</begin_date_e><create_date_s xsi:nil="true" /><create_date_e xsi:nil="true" /><driver_tin />><delivery_date_s xsi:nil="true" /><delivery_date_e xsi:nil="true" /><full_amount xsi:nil="true" /><waybill_number /><close_date_s xsi:nil="true" /><close_date_e xsi:nil="true" /><s_user_ids /><comment /></get_buyer_waybills></soap:Body></soap:Envelope>'

    headers = {
        "Content-Type": "text/xml; charset: utf-8",
        "Content-Length":"830"
    }

    response = requests.post("https://services.rs.ge/WayBillService/WayBillService.asmx", data=xml, headers=headers).text
    xml_dict = xmltodict.parse(response)
    data = xml_dict["soap:Envelope"]["soap:Body"]["get_buyer_waybillsResponse"]["get_buyer_waybillsResult"]["WAYBILL_LIST"]["WAYBILL"]
    # return {"data": data}
    return templates.TemplateResponse("index.html", {"request": request, "data": data})
    # return {"xml": xml}