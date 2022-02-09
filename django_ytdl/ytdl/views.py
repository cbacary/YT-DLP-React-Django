from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from django.shortcuts import render

from .models import YTDl
from .serializers import *
from .get_dl import get_ytdl_url


@api_view(['GET', 'POST'])
def get_url(request):
    if request.method == 'GET':
        # Get data
        ytdl = YTDl.objects.all()

        # Serialize data
        serializer = YTDLSerializer(ytdl, many=True)

        # Return data
        return Response(serializer.data)
    elif request.method == 'POST':
        # Serialize data
        serializer = YTDLSerializer(data=request.data)
        print(request.data)
        # Check if data is valid
        if serializer.is_valid():
            response_url = get_ytdl_url(request.data['url'])
            # Save data
            serializer.save()

            print(serializer.data)

            # Return data
            return Response(response_url, status=status.HTTP_201_CREATED)
        else:
            # Return errors
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
