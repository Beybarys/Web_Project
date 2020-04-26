from django.urls import path
from main.views import product_list

urlpatterns = [
    path('products/', product_list)
]