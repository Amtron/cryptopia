from app import app

@app.route('/')
def root():
    return app.send_static_file('index.html')

@app.route('/profile')
def profile():
    return app.send_static_file('profile.html')
	