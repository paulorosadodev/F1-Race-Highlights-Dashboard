from videos_data.api_clients.gemini_client import get_gemini_client

model = get_gemini_client()

def generate_summary_from_comments(comments):
    full_prompt = (
        "Aqui estão os comentários de um vídeo de Fórmula 1 no YouTube. "
        "Analise-os detalhadamente e escreva um resumo corrido (sem utilizar caracteres especiais como *) do que as pessoas estão comentando sobre o vídeo. "
        "Inclua elogios, críticas, tópicos populares, sentimentos e destaques.\n\n"
    )
    full_prompt += "\n".join(f"- {c}" for c in comments)

    response = model.generate_content(full_prompt)

    return response.text.strip()
