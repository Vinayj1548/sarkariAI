from database.database import notifications


class NotificationRepository:

    @staticmethod
    def save(notification):

        document = notification.model_dump()

        result = notifications.insert_one(document)

        return result.inserted_id