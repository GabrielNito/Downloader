from flask import Flask, request, jsonify
from flask_cors import CORS
from pytube import YouTube

app = Flask(__name__)
CORS(app)


@app.route('/youtube-list', methods=['POST'])
def list_resolutions():
    data = request.get_json()
    video_url = data.get('url')

    try:
        yt = YouTube(video_url)

        streams = yt.streams.filter(progressive=True)

        video_streams = []

        for stream in streams:
            video_streams.append({
                'resolution': stream.resolution,
                'fps': stream.fps,
                'type': stream.type,
                'url': stream.url,
            })

        video_streams = sorted(video_streams, key=lambda x: int(
            x['resolution'][:-1]), reverse=True)

        return jsonify({
            "success": True,
            "video_streams": video_streams,
            "thumbnail": yt.thumbnail_url,
            "title": yt.streams[0].title
        })

    except Exception as e:
        return jsonify({"success": False, "error": str(e)})


if __name__ == '__main__':
    app.run(debug=True)
