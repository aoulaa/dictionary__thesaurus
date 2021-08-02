from django.db import models
from core.models import BaseModel


class LearnWord(BaseModel):
    name = models.CharField(max_length=100, null=True, blank=True)
    translation = models.CharField(max_length=255,  null=True, blank=True)
    is_learned = models.BooleanField(default=False)

    def __str__(self):
        return self.name


