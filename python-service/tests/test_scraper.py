from scrapers.ssc_scraper import SSCScraper


def test_scraper():

    scraper = SSCScraper()

    notifications = scraper.scrape()

    assert len(notifications) > 0

    print(notifications[0])