from django.urls import path

from board.views.word import WordListView, LearnWordDetailView

urlpatterns = [
    path('words', WordListView.as_view(), name='word-list'),
    path('word/<int:pk>', LearnWordDetailView.as_view(), name='word-detail'),
]
