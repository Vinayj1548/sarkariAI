from pathlib import Path
import re
import requests

from models.notification import Notification


class PDFDownloader:

    def __init__(self):

        self.download_folder = Path("saved/pdfs")

        self.download_folder.mkdir(
            parents=True,
            exist_ok=True
        )

    def sanitize_filename(self, name: str):

        return re.sub(
            r'[\\/*?:"<>|]',
            "",
            name
        )

    def download(self, page, notification: Notification):

        filename = (
            self.sanitize_filename(notification.title)
            + ".pdf"
        )

        save_path = self.download_folder / filename

        # Open PDF in new tab
        with page.expect_popup() as popup_info:
            notification.eye_button.click()

        popup = popup_info.value
        popup.wait_for_load_state()

        pdf_url = popup.url

        print(f"\nPDF URL: {pdf_url}")

        # Download PDF using requests
        response = requests.get(pdf_url)

        response.raise_for_status()

        with open(save_path, "wb") as pdf_file:
            pdf_file.write(response.content)

        popup.close()

        print(f"Downloaded: {save_path.name}")

        return save_path