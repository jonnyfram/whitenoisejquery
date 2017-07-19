Installation
---

1. Clone this repository.

2. Create a virtual environment. For example, I use anaconda:

   ```
   conda create -n jonny-whitenoise python=3
   ```

3. Activate this virtual environment:

   ```
   source activate jonny-whitenoise
   ```

4. Install the requirements:

   ```
   cd <path-to-cloned-repo-dir> // from step 1
   pip install -r requirements.txt

5. Add a few songs in mp3 format to the static/music folder in the repo dir.

6. Now, run the app:

  ```
  python run.py
  ```

7. Go to `localhost;8080`, you will see a list of songs  you added in step 5.
   Click on any song to play it!


Design
---

1. base.html - base html from which other templates are derived.

2. index.html - the home page of the app which lists songs from static/music folder.

3. play.html -  the page with song controls to play, stop song and volume controls.

4. main.js - configures the audio control buttons using jquery.