from flask import render_template, request

from . import app

import os

@app.route("/")
def index():
    music_dir = os.path.join(app.root_path, 'static', 'music')
    music_files = [f for f in os.listdir(music_dir) if f.endswith('mp3')]
    music_files_number = len(music_files)
    return render_template("index.html",
                           title = 'Home',
                           music_files_number = music_files_number,
                           music_files = music_files)

@app.route('/<filename>')
def play_song(filename):
    return render_template('play.html',
                           title = filename,
                           music_file = filename)
