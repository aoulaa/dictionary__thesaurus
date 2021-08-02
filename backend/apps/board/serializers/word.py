from rest_framework import serializers

from board.models import LearnWord


class LearnWordSerializer(serializers.ModelSerializer):

    class Meta:
        model = LearnWord
        fields = (
            'id',
            'name',
            'translation',
            'is_learned'
        )
