django config
```python
#setting.py

INSTALLED_APPS = [
    ...,
    "corsheaders",
    ...,
]

MIDDLEWARE = [
    ...,
    "corsheaders.middleware.CorsMiddleware",
    "django.middleware.common.CommonMiddleware",
    ...,
]

CORS_ALLOWED_ORIGINS = [
    # 添加想要允许的origin
    "http://localhost:3000",
    'http://localhost:4000',
]


from corsheaders.defaults import default_headers
# 添加自定义头
CORS_ALLOW_HEADERS = list(default_headers) + [
    "my-custom-header",
]

```

[cors mdn docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)