from .base import *

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.mysql",
        "NAME": "app",
        "USER": "root",
        "PASSWORD": "password",
        "HOST": "app-db",
        "PORT": "3306",
        "ATOMIC_REQUESTS": True,
    }
}
