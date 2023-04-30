import requests, xmltodict
from fastapi import FastAPI, Request, Body
from fastapi.templating import Jinja2Templates
import jinja2

templates = Jinja2Templates(directory="templates")
app = FastAPI()

@app.post("/fetch_data")
async def fetch_data(xml: str = Body()):

    headers = {
        "Content-Type": "text/xml; charset: utf-8",
        "Content-Length":"830"
    }
    response = requests.post("https://services.rs.ge/WayBillService/WayBillService.asmx", data=xml, headers=headers).text
    xml_dict = xmltodict.parse(response)
    data = xml_dict["soap:Envelope"]["soap:Body"]["get_buyer_waybillsResponse"]["get_buyer_waybillsResult"]["WAYBILL_LIST"]["WAYBILL"]
    return data

@app.get("/")
def read_root(request: Request):
    xml = ''
    return templates.TemplateResponse("index.html", {"request": request})

