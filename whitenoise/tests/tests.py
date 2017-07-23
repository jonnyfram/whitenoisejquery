import os
import unittest
import multiprocessing
import time

from urllib.parse import urlparse

from splinter import Browser

os.environ["CONFIG_PATH"] = "whitenoise.config.DevelopmentConfig"

from whitenoise import app

class TestViews(unittest.TestCase):

    def setUp(self):
        """ Test setup """
        self.browser = Browser("phantomjs")
        self.process = multiprocessing.Process(target=app.run,
                                               kwargs={"port": 8080})
        self.process.start()
        time.sleep(1)

    def tearDown(self):
        self.process.terminate()
        self.browser.quit()
    
    def test_landing(self):
            self.browser.visit("http://127.0.0.1:8080/")
            #button = self.browser.find_by_css("button[type=submit]")
            #button.click()
            self.assertEqual(self.browser.url, "http://127.0.0.1:8080/")
            
    def test_play_pages(self):
        
        music_dir = os.path.join(app.root_path, 'static', 'music')
        music_files = [f for f in os.listdir(music_dir) if f.endswith('mp3')]
        
        for sounds in music_files:
            self.browser.visit("http://127.0.0.1:8080/"+sounds)
            self.assertEqual(self.browser.url, "http://127.0.0.1:8080/"+sounds)
        
if __name__ == "__main__":
    unittest.main()