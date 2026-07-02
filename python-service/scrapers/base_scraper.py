from playwright.sync_api import sync_playwright

class BaseScraper:
    def __init__(self):
        self.playwright = sync_playwright().start()

        self.browser = self.playwright.chromium.launch(
            headless=False,
            slow_mo=300
        )

        self.page = self.browser.new_page()

    def open(self, url: str):
        self.page.goto(url)

    def wait(self, ms: int):
        self.page.wait_for_timeout(ms)

    def close(self):
        self.browser.close()
        self.playwright.stop()