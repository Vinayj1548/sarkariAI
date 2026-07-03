from scrapers.base_scraper import BaseScraper
from extractors.notification_extractor import NotificationExtractor
from downloaders.pdf_downloader import PDFDownloader


class SSCScraper(BaseScraper):

    def start(self):

        print("Opening SSC Website...\n")

        self.open("https://ssc.gov.in")

        self.wait(5000)

        extractor = NotificationExtractor(self.page)

        notifications = extractor.extract()

        downloader = PDFDownloader()

        # Download only first notification
        pdf_path = downloader.download(
            self.page,
            notifications[0]
        )

        print(f"\nSaved To: {pdf_path}")

        self.close()