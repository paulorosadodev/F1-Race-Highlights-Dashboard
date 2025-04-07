from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

from videos_data.services.youtube_api import fetch_comments_from_video
from videos_data.services.gemini_api import generate_summary_from_comments

class VideoCommentsView(APIView):
    def get(self, request, video_id):
        if not video_id:
            return Response(
                {"error": "Parâmetro 'video_id' é obrigatório."},
                status=status.HTTP_400_BAD_REQUEST
            )

        try:
            comments = fetch_comments_from_video(video_id)
        except Exception as e:
            return Response(
                {"error": f"Erro ao buscar comentários do vídeo: {str(e)}"},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

        if not comments:
            return Response(
                {"message": "Nenhum comentário encontrado para o vídeo informado."},
                status=status.HTTP_204_NO_CONTENT
            )

        try:
            summary = generate_summary_from_comments(comments)
        except Exception as e:
            return Response(
                {
                    "comments": comments,
                    "summary": "",
                    "warning": f"Erro ao gerar resumo com Gemini: {str(e)}"
                },
                status=status.HTTP_200_OK
            )
        
        response_data = {
                "comments": comments,
                "summary": summary
            }

        return Response(response_data, status=status.HTTP_200_OK)
