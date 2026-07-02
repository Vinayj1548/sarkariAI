from playwright.sync_api import Page


class DOMInspector:

    @staticmethod
    def inspect(page: Page):

        selectors = [
            "div",
            "span",
            "a",
            "button",
            "table",
            "tbody",
            "tr",
            "td",
            "li",
            "p",
            "img",
            ".card",
            ".cp",
            "#skiptocontent",
        ]

        print("\n========== DOM INSPECTOR ==========\n")

        for selector in selectors:
            try:
                count = page.locator(selector).count()
                print(f"{selector:<20} {count}")
            except Exception:
                print(f"{selector:<20} ERROR")

        print("\n===================================\n")

    @staticmethod
    def preview(page: Page, selector: str, limit: int = 5):

        elements = page.locator(selector)

        count = elements.count()

        print("\n" + "=" * 70)
        print(f"Selector : {selector}")
        print(f"Found    : {count}")
        print("=" * 70)

        if count == 0:
            print("No elements found.")
            return

        for i in range(min(count, limit)):

            element = elements.nth(i)

            print(f"\nElement {i + 1}")
            print("-" * 70)

            try:
                element.highlight()
            except:
                pass

            try:
                text = element.inner_text()

                print("\nTEXT\n")
                print(text if text.strip() else "[No Text]")

            except Exception:
                print("\nTEXT\n")
                print("Unable to fetch.")

            try:
                html = element.inner_html()

                print("\nHTML\n")
                print(html)

            except Exception:
                print("\nHTML\n")
                print("Unable to fetch.")

            print("-" * 70)

    @staticmethod
    def debugger(page: Page):

        while True:

            selector = input(
                "\nEnter CSS Selector (q to quit): "
            )

            if selector.lower() == "q":
                print("\nLeaving Debugger...\n")
                break

            DOMInspector.preview(page, selector)