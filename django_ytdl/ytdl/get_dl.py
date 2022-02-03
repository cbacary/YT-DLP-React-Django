import yt_dlp


def get_ytdl_url(url):
    try:
        with yt_dlp.YoutubeDL() as ydl:
            info = ydl.extract_info(url, download=False)
            data = ydl.sanitize_info(info)
    except:
        return None

    url_dict = {}

    for i in data['formats']:
        if i['acodec'] != 'none' and i['vcodec'] != 'none':
            url_dict[i['format_note']] = i['url']

    return url_dict
