from django.urls import path
from .views import *
from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    path('login/', obtain_jwt_token),
    path('products/', products_list),
    path('products/<int:product_id>/', product_detail),
    path('categories/', CategoryAPIView.as_view()),
    path('categories/<int:fk>/', CategoryDetailAPIView.as_view()),
    path('cart/', cart_list),
    path('carts/', CartProductsAPIView.as_view),
    path('cart/<int:fk>/', cart_list),
    path('categories/<int:fk>/products/', products_by_category),
    # path('cart/',CartAPIView),
    path('products/feedback', FeedbackAPIView)
]