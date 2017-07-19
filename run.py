import os
from whitenoise import app

def run():
    port = int(os.environ.get('PORT', 8080))
    app.jinja_env.auto_reload = True
    app.config['TEMPLATES_AUTO_RELOAD'] = True
    app.run(debug=True, host='0.0.0.0', port=port)

if __name__ == '__main__':
    run()
