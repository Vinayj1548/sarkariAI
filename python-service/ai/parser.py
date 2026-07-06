import json

from client import client
from prompts import PARSER_PROMPT
from models.ai_notification import Notification


class NotificationParser:

    @staticmethod
    def parse(text: str):

        prompt = PARSER_PROMPT.replace("{{TEXT}}", text)

        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=prompt
        )

        response_text = response.text.strip()

        if response_text.startswith("```json"):
            response_text = response_text[7:]

        if response_text.endswith("```"):
            response_text = response_text[:-3]

        response_text = response_text.strip()

        data = json.loads(response_text)

        notification = Notification.model_validate(data)

        return notification