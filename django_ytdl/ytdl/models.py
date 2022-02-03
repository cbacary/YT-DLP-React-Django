from django.db import models

# Create your models here.


class YTDl(models.Model):
    url = models.CharField("URL", max_length=255)

    def __str__(self):
        return self.url
