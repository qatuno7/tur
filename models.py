from django.db import models

class Word(models.Model):
    english_word = models.CharField(max_length=255)
    spanish_word = models.CharField(max_length=255)
    genus = models.CharField(max_length=255)
    definition = models.TextField()
