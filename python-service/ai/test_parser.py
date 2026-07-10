from ai.parser import NotificationParser

with open("storage/pdfs/output.txt", "r", encoding="utf-8") as f:
    text = f.read()

result = NotificationParser.parse(text)

print(result.model_dump())