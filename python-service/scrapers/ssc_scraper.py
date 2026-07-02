from scrapers.base_scraper import BaseScraper

from extractors.notification_extractor import NotificationExtractor


class SSCScraper(BaseScraper):

    def start(self):

        print("Opening SSC Website...")

        self.open("https://ssc.gov.in")

        self.wait(5000)

        extractor = NotificationExtractor(self.page)

        notifications = extractor.extract()

        print()

        print("=" * 60)

        print("Notifications Found")

        print("=" * 60)

        for notification in notifications:

            print()

            print(notification.title)

            print(notification.pdf_size)

        self.close()