all:
	@make clean
	@make build

build:
	@pyinstaller dt.spec
	

clean:
	@rm -rf build/ dist/