import fitz


class TextExtractor:

    @staticmethod
    def extract(pdf_path: str) -> str:

        doc = fitz.open(pdf_path)

        text = ""

        for page in doc:
            text += page.get_text()

        return text