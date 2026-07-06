from typing import List, Optional

from pydantic import BaseModel


class AgeLimit(BaseModel):
    minimum: Optional[int] = None
    maximum: Optional[int] = None


class ImportantDate(BaseModel):
    event: str
    date: str


class Notification(BaseModel):

    organization: Optional[str] = None
    notification_name: Optional[str] = None
    notification_number: Optional[str] = None

    official_website: Optional[str] = None

    vacancies: Optional[int] = None

    application_start_date: Optional[str] = None
    application_end_date: Optional[str] = None

    exam_date: Optional[str] = None

    salary: Optional[str] = None

    qualification: List[str] = []

    posts: List[str] = []

    age_limit: AgeLimit = AgeLimit()

    selection_process: List[str] = []

    important_dates: List[ImportantDate] = []

    important_links: List[str] = []