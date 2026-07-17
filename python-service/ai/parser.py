import json

from ai.client import client
from ai.normalizer import AIResponseNormalizer
from ai.prompts import PARSER_PROMPT
from models.ai_notification import Notification
from pydantic import ValidationError


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

        try:
            print("========== RAW RESPONSE ==========")
            print(response_text)
            print("==================================")
            data = json.loads(response_text)
            data = AIResponseNormalizer.normalize(data)
            notification = Notification.model_validate(data)
            return notification

        except json.JSONDecodeError as e:
            raise ValueError(f"Gemini returned invalid JSON: {e}")

        except ValidationError as e:
            raise ValueError(f"Notification validation failed: {e}")

        

    