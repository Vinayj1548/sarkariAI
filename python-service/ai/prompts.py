PARSER_PROMPT = """
You are an expert AI specialized in parsing Indian Government Job Notifications.

Return ONLY valid JSON.

Schema:

{{
    "organization": "",
    "notification_name": "",
    "notification_number": "",
    "official_website": "",
    "vacancies": null,
    "application_start_date": null,
    "application_end_date": null,
    "exam_date": null,
    "salary": "",
    "qualification": [],
    "posts": [],
    "age_limit": {{
        "minimum": null,
        "maximum": null
    }},
    "selection_process": [],
    "important_dates": [],
    "important_links": []
}}

Notification:

{text}
"""