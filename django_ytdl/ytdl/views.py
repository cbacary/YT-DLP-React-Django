from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from django.shortcuts import render

from .models import YTDl
from .serializers import *
from .get_dl import get_ytdl_url


@api_view(['POST'])
def get_url(request):

    # Serialize data
    serializer = YTDLSerializer(data=request.data)
    print(request.data)
    # Check if data is valid
    if serializer.is_valid():
        response_url = get_ytdl_url(request.data['url'])

        if response_url is None:
            return Response(status=status.HTTP_400_BAD_REQUEST)

        # Save data
        serializer.save()

        print(serializer.data)

        # Return data
        return Response(response_url, status=status.HTTP_201_CREATED)
    else:
        # Return errors
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
