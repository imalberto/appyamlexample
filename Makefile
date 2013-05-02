
# DEBUG=mojito,middleware node app
# DEBUG=* node app
# @NODE_DEBUG=module DEBUG=app:yaml,mojito:server,middleware:* node --debug app
start:
	@DEBUG=app:yaml,mojito:server,middleware:* node --debug app

start_mojito:
	@./node_modules/mojito/bin/mojito start

# pipe all error to >/dev/null
# - tells Makefile to ignore non-zero return code
clean:
	-@rm -rf *.o 2>/dev/null || true
