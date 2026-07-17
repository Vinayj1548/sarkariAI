class AIResponseNormalizer:

    @staticmethod
    def normalize(data: dict) -> dict:

        data["qualification"] = data.get("qualification") or []

        data["posts"] = data.get("posts") or []

        data["selection_process"] = data.get("selection_process") or []

        data["important_dates"] = data.get("important_dates") or []

        data["important_links"] = data.get("important_links") or []

        data["age_limit"] = data.get("age_limit") or {
            "minimum": None,
            "maximum": None
        }

        return data