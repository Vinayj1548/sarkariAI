from dataclasses import dataclass
from playwright.sync_api import Locator


@dataclass
class Notification:
    title: str
    pdf_size: str
    container: Locator