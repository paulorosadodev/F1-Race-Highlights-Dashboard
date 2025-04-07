from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

from videos_data.utils import get_video_statistics
from videos_data.services.youtube_api import fetch_videos_data

class VideosDataView(APIView):
    def get(self, request):
        try:
            video_data_list = fetch_videos_data()
        except Exception as e:
            return Response(
                {"error": f"Erro ao buscar vídeos: {str(e)}"},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

        if not video_data_list:
            return Response(
                {"message": "Nenhum vídeo encontrado."},
                status=status.HTTP_204_NO_CONTENT
            )

        try:
            response_data = get_video_statistics(video_data_list)
        except Exception as e:
            return Response(
                {"error": f"Erro ao processar estatísticas dos vídeos: {str(e)}"},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

        return Response(response_data, status=status.HTTP_200_OK)
