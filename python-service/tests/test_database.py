from ai.parser import NotificationParser
from database.notification_repository import NotificationRepository


def test_database(sample_text):

    notification = NotificationParser.parse(sample_text)

    inserted_id = NotificationRepository.save(notification)

    assert inserted_id is not None

    print(inserted_id)