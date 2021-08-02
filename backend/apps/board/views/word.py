from rest_framework.generics import get_object_or_404
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

from board.models import LearnWord
from board.serializers.word import LearnWordSerializer


class WordListView(APIView):
    permission_classes = (AllowAny,)

    def get(self, request):
        word = LearnWord.objects.filter(is_learned=False).order_by('-id')[:11]
        serializer = LearnWordSerializer(word, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = LearnWordSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, 201)


class LearnWordDetailView(APIView):
    permission_classes = (AllowAny,)

    def get(self, request, pk):
        word = get_object_or_404(LearnWord, pk=pk)
        serializer = LearnWordSerializer(word)
        return Response(serializer.data)

    def put(self, request, pk):
        instance = get_object_or_404(LearnWord, pk=pk)
        serializer = LearnWordSerializer(instance, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

    def delete(self, request, pk):
        crm = get_object_or_404(LearnWord, pk=pk)
        crm.delete()
        return Response({}, 204)
