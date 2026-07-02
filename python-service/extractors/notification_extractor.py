from playwright.sync_api import Page

from models.notification import Notification


class NotificationExtractor:

    def __init__(self, page: Page):

        self.page = page

    def extract(self):

        notifications = []

        titles = self.page.locator(".text")

        icons = self.page.locator(".icons")

        count = titles.count()

        for i in range(count):

            title = titles.nth(i).inner_text().strip()

            icon_section = icons.nth(i)

            pdf_size = (
                icon_section
                .locator("span")
                .first
                .inner_text()
                .strip()
            )

            notifications.append(

                Notification(

                    title=title,

                    pdf_size=pdf_size,

                    icon_section=icon_section

                )

            )

        return notifications