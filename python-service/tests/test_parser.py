from ai.parser import NotificationParser


def test_parser(sample_text):

    notification = NotificationParser.parse(sample_text)

    assert notification is not None

    assert notification.notification_name is not None

    assert notification.organization is not None

    print(notification.model_dump())