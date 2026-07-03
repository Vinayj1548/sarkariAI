import fitz

pdf_path = "storage/pdfs/ssc_notification.pdf"
doc = fitz.open(pdf_path)

text = ""

for page in doc:
    text += page.get_text()

with open("storage/pdfs/output.txt", "w", encoding="utf-8") as f:
    f.write(text)

print("Text extracted successfully!")