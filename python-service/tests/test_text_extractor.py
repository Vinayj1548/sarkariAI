from extractors.text_extractor import TextExtractor


def test_text_extractor():

    text = TextExtractor.extract(
        "data/pdfs/ssc_notification.pdf"
    )

    assert len(text) > 0

    print(text[:500])