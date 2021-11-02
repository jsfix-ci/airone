from rest_framework import viewsets

from entry.api_v2.serializers import GetEntrySerializer
from entry.models import Entry


class entryAPI(viewsets.ReadOnlyModelViewSet):
    queryset = Entry.objects.filter(is_active=True)
    serializer_class = GetEntrySerializer