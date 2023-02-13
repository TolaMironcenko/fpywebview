import webview

DEV = {'template': 'http://127.0.0.1:3000', 'debug': True}
PROD = {'template': 'templates/build/index.html', 'debug': False}


def hello():
    print("hello world!")


if __name__ == '__main__':
    window_args = {
        'title': 'hello world',
        'url': PROD['template'],
        'width': 350,
        'height': 350,
        'min_size': (350, 350)
    }
    window = webview.create_window(**window_args)
    window.expose(hello)

    webview.start(window, debug=PROD['debug'])
