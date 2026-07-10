from typing import List, Optional
from pydantic import BaseModel, Field


class Post(BaseModel):
    name: str
    vacancies: Optional[int] = None


class ImportantDate(BaseModel):
    description: str
    date: Optional[str] = None


class ImportantLink(BaseModel):
    description: str
    url: str


class AgeLimit(BaseModel):
    minimum: Optional[int] = None
    maximum: Optional[int] = None


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

    qualification: List[str] = Field(default_factory=list)

    posts: List[Post] = Field(default_factory=list)

    age_limit: AgeLimit = Field(default_factory=AgeLimit)

    selection_process: List[str] = Field(default_factory=list)

    important_dates: List[ImportantDate] = Field(default_factory=list)

    important_links: List[ImportantLink] = Field(default_factory=list)