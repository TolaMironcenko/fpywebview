all:
	@make clean
	@make build

build:
	@pyinstaller src/main.py -n dt --windowed --noconfirm --clean --add-data "src/templates/build:templates/build" --icon "src/data/img/icon.icns"

clean:
	@rm -rf build/ dist/