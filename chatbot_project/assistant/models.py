from django.db import models

# Create your models here.
class FAQ(models.Model):
    CATEGORIES = [
        ('miscellaneous', 'Miscellaneous'), 
        ('advising', 'Adivising'), 
        ('registration', 'Registration'), 
        ('graduation', 'Graduation'), 
        ('general', 'General Questions for CSEE Department'), 
        ('csQuestions', 'Computer Science Program'),
    ]
    question = models.CharField(max_length=255)
    answer = models.TextField()
    #tags = models.JSONField(blank = True, null = True)

    category = models.CharField(max_length=50, choices=CATEGORIES, default='general')

    def __str__(self):
        return f"[{self.category.title()}] {self.question}"


    