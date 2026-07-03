from ai.client import GeminiClient
from ai.prompts import PARSER_PROMPT

class NotificationParser:
    def parse(self , text):
        prompt = PARSER_PROMPT.format(text=text)
        response = GeminiClient().generate(prompt)

        return response