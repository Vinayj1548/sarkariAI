from downloaders.pdf_downloader import PdfDownloader


def test_pdf_downloader():

    pdf_path = PdfDownloader.download(
        "<PUT_ANY_TEST_NOTIFICATION_URL_HERE>"
    )

    assert pdf_path is not None

    print(pdf_path)